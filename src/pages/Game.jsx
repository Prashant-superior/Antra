import { useEffect, useState } from "react";
import FourOptions from "../components/FourOptions";
import SongBar from "../components/SongBar";
import { supabase } from '../services/supabaseClient';
import { useLocation } from "react-router-dom";
import ScoreCard from "../components/ScoreCard";

const Game = () => {
  const [songs, setSongs] = useState([]);
  const [options, setOptions] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [teamScore1, setTeamScore1] = useState(0);
  const [teamScore2, setTeamScore2] = useState(0);
  const [round, setRound] = useState(0);
  const location = useLocation();
  // console.log(location);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function getRandomElements(array, count) {
    const shuffled = shuffleArray([...array]);
    return shuffled.slice(0, count);
  }

  async function fetchSongs() {
    const { data, error } = await supabase.from('english_table').select('*');
    if (error) {
      console.error('Error fetching songs:', error.message);
      return;
    }
    const shuffledSongs = shuffleArray(data); // Shuffle the fetched data
    setSongs(shuffledSongs);
    console.log("Fetched and shuffled data:", shuffledSongs); // Log the shuffled data
  }

  useEffect(() => {
    fetchSongs();
  }, []);

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
        if(teamScore1>=5 ){
          alert("Game Over T1 wins");
          window.location.href = "/over"; // Redirect to home page
        } 
      } else if (team === 2) {
        setTeamScore2(prevScore => prevScore + 1);    
      if(teamScore2>=5 ){
        alert("Game Over T2 wins");
        window.location.href = "/over"; // Redirect to home page
      } 
      }
      
      setRound(round => round + 1);  // Move to next round

    }
    console.log(`Team ${team} clicked! Correct: ${isCorrect}`);
  };



  return (
    <>

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
    </>
  );
}

export default Game;