import { useEffect, useState } from "react";
import FourOptions from "../components/FourOptions";
import SongBar from "../components/SongBar";
import { supabase } from '../services/supabaseClient';
import { useLocation } from "react-router-dom";
import ScoreCard from "../components/ScoreCard";
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"



const Game = () => {
  const [songs, setSongs] = useState([]);
  const [options, setOptions] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [teamScore1, setTeamScore1] = useState(0);
  const [teamScore2, setTeamScore2] = useState(0);
  const [round, setRound] = useState(0);
  const location = useLocation();
  console.log(location);
  
  const genre = location.state.genre;
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log("Shuffled array:", array);
    return array;
  }

  function getRandomElements(array, count) {
    const shuffled = shuffleArray([...array]);
    return shuffled.slice(0, count);
  }

  async function fetchSongs(genre) {
    let tableName;
    if(genre === "English"){tableName = "english_table";}
    else if(genre === "Hindi"){tableName = "hindi_table";}
    else if(genre === "Mix"){tableName = "mix_table";}
    const { data, error } = await supabase.from(tableName).select('*');
    if (error) {
      console.error('Error fetching songs:', error.message);
      return;
    }
    const shuffledSongs = shuffleArray(data); // Shuffle the fetched data
    setSongs(shuffledSongs);
    console.log("Fetched and shuffled data:", shuffledSongs); // Log the shuffled data
  }

  useEffect(() => {
    fetchSongs(genre);
  }, [genre]);

  useEffect(() => {
    if (songs.length > 0) {
      const current = songs[round % songs.length];  // Assume the first song is the current song
      setCurrentSong(current);

      // Get three random options excluding the current song
      const otherOptions = getRandomElements(songs.filter(song => song.id !== current.id), 3);

      // Combine the current song with the other options
      const allOptions = shuffleArray([current, ...otherOptions]);

      setOptions(allOptions);
    }
  }, [songs,round]);

  
  const handleOptionClick = (team, isCorrect) => {
    if (isCorrect) {
      if (team === 1) {
        setTeamScore1(prevScore => prevScore + 1);
        if(teamScore1>=4 ){
          alert("Game Over T1 wins");
          window.location.href = "/over"; 
        } 
      } else if (team === 2) {
        setTeamScore2(prevScore => prevScore + 1);    
      if(teamScore2>=4){
        alert("Game Over T2 wins");
        window.location.href = "/over"; 
      } 
      }
      
      setRound(round => round + 1);  // Move to next round

    }
    console.log(`Team ${team} clicked! Correct: ${isCorrect}`);
  };


  
const comp = useRef(null)

useLayoutEffect(() => {
  let ctx = gsap.context(() => {
    const t1 = gsap.timeline()
    t1.from("#intro-slider", {
      xPercent: "-100",
      duration: 1.3,
      delay: 0.3,
    })
      .from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      })
      .to(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
        stagger: 0.5,
      })
      .to("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
      })
      .from("#welcome", {
        opacity: 0,
        duration: 0.5,
      })
  }, comp)

  return () => ctx.revert()
}, [])







  return (
    <>
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="fixed inset-0 p-10 backdrop-blur-md bg-white/30 top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
      >
        <h1 className="text-9xl" id="title-1">
          LET'S THE
        </h1>
        <h1 className="text-9xl" id="title-2">
          MAGIC OF aNNTRA
        </h1>
        <h1 className="text-9xl" id="title-3">
          BEGIN
        </h1>
      </div>
      <div>
      <div className="flex justify-around pt-10 mx-10">
      <ScoreCard teamColor={location.state.teamColor1} teamScore={teamScore1} teamName={location.state.grpName1}/>
      <ScoreCard teamColor={location.state.teamColor2} teamScore={teamScore2} teamName={location.state.grpName2}/>
      </div>
      
      


      <div className="flex flex-col justify-center">
        {/* Ensure songs array has at least one element before accessing it */}
        {currentSong && <SongBar songUrl={currentSong.url} />}

        <div className="m-3">
          {options.length === 4 && (
            <FourOptions
              col1={location.state.teamColor1}
              col2={location.state.teamColor2}

              first={options[0].title}
              second={options[1].title}
              third={options[2].title}
              fourth={options[3].title}
              onOptionClick={handleOptionClick}
              correct={currentSong.title}
            />
          )}
        </div>
        
      </div>
      </div>
    </div>

      
    </>
  );
};

export default Game;