import React, { useEffect, useState, useRef } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import gsap from "gsap";
import FourOptions from "../components/FourOptions";
import SongBar from "../components/SongBar";
import ScoreCard from "../components/ScoreCard";
import { supabase } from '../services/supabaseClient';

const Game = () => {
  const [songs, setSongs] = useState([]);
  const [options, setOptions] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [teamScore1, setTeamScore1] = useState(0);
  const [teamScore2, setTeamScore2] = useState(0);
  const [round, setRound] = useState(0);
  const [introComplete, setIntroComplete] = useState(false);
  const location = useLocation();
  const genre = location.state.genre;
  const comp = useRef(null);
  const navigate = useNavigate();

  // ... (keep existing functions: shuffleArray, getRandomElements, fetchSongs, handleOptionClick)
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

  const handleOptionClick = (team, isCorrect) => {
    if (isCorrect) {
      if (team === 1) {
        setTeamScore1(prevScore => prevScore + 2);
        if(teamScore1===8){
          navigate('/winning',{
            state:{
              teamScore1:teamScore1,
              teamScore2:teamScore2,
              ...location.state,
            }
          }) 
        } 
      } else if (team === 2) {
        setTeamScore2(prevScore => prevScore + 2);    
        if(teamScore2===8){
          navigate('/winning',{
            state:{
              teamScore1:teamScore1,
              teamScore2:teamScore2,
              ...location.state,
            }
          }) 
        }  
      }
      
      setRound(round => round + 1);  // Move to next round

    }
    console.log(`Team ${team} clicked! Correct: ${isCorrect}`);
  };

  useEffect(() => {
    fetchSongs(genre);
  }, [genre]);

  useEffect(() => {
    if (songs.length > 0) {
      const current = songs[round % songs.length];
      setCurrentSong(current);
      const otherOptions = getRandomElements(songs.filter(song => song.id !== current.id), 3);
      const allOptions = shuffleArray([current, ...otherOptions]);
      setOptions(allOptions);
    }
  }, [songs, round]);

  useEffect(() => {
    if (comp.current) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            setIntroComplete(true);
            gsap.set(["#black-screen", "#blur-screen", "#intro-slider"], { display: "none" });
          }
        });

        // Black screen with ANTRA text
        tl.set("#black-screen", { display: "flex" })
          .from("#antra-text", { scale: 0, duration: 1, ease: "back.out(1.7)" })
          .to("#black-screen", { opacity: 0, duration: 1, delay: 1 })

        // Blur effect sliding in
          .set("#blur-screen", { display: "block" })
          .fromTo("#blur-screen", 
            { xPercent: 100 },
            { xPercent: 0, duration: 1, ease: "power2.inOut" }
          )

        // Intro text animation
          .set("#intro-slider", { display: "flex" })
          .from(["#title-1", "#title-2", "#title-3"], {
            opacity: 0,
            y: 30,
            stagger: 0.5,
            duration: 0.8,
          })
          .to(["#title-1", "#title-2", "#title-3"], {
            opacity: 0,
            y: -30,
            stagger: 0.5,
            duration: 0.8,
            delay: 0.5,
          })
          .to(["#intro-slider", "#blur-screen"], {
            yPercent: -100,
            duration: 1,
          });
        // ... (keep existing animation logic)
      }, comp);

      return () => ctx.revert();
    }
  }, []);

  return (
    <div className="relative h-screen overflow-hidden" ref={comp}>
      {/* Black screen with ANTRA text */}
      <div id="black-screen" className="fixed inset-0 bg-black z-50 items-center justify-center hidden">
        <h1 id="antra-text" className="text-white text-6xl font-bold font-spaceGrotesk">antra</h1>
      </div>

      {/* Blur effect */}
      <div id="blur-screen" className="fixed inset-0 backdrop-blur-md bg-white/30 z-40 hidden"></div>

      {/* Intro slider */}
      <div
        id="intro-slider"
        className="fixed inset-0 p-10 z-50 flex flex-col font-spaceGrotesk justify-center items-start gap-10 tracking-tight hidden"
      >
        <h1 className="text-6xl sm:text-9xl font-spaceGrotesk" id="title-1 ">LET THE</h1>
        <h1 className="text-6xl sm:text-9xl font-spaceGrotesk" id="title-2">MAGIC OF <span className="italic text-red-400"> antra </span></h1>
        <h1 className="text-6xl sm:text-9xl font-spaceGrotesk" id="title-3">BEGIN</h1>
      </div>

      {/* Main game content */}
      <div className={`bg-gradient-to-r from-rose-100 to-teal-100 h-full flex flex-col ${introComplete ? '' : 'hidden'}`}>
        <div className="flex justify-around pt-10 mx-4 flex-shrink-0">
          <ScoreCard teamColor={location.state.teamColor1} teamScore={teamScore1} teamName={location.state.grpName1} />
          <ScoreCard teamColor={location.state.teamColor2} teamScore={teamScore2} teamName={location.state.grpName2} />
        </div>

        <div className="flex-grow  justify-center">
          {currentSong && <SongBar songUrl={currentSong.url} />}

          <div className="mx-3 mb-4">
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
  );
};

export default Game;