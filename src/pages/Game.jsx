import { useEffect, useState } from "react";
import FourOptions from "../components/FourOptions";
import SongBar from "../components/SongBar";
import { supabase } from '../services/supabaseClient';

const Game = () => {
  const [songs, setSongs] = useState([]);
  const [options, setOptions] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

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
      const current = songs[0]; // Assume the first song is the current song
      setCurrentSong(current);

      // Get three random options excluding the current song
      const otherOptions = getRandomElements(songs.filter(song => song.id !== current.id), 3);

      // Combine the current song with the other options
      const allOptions = shuffleArray([current, ...otherOptions]);

      setOptions(allOptions);
    }
  }, [songs]);

  return (
    <>
      <div className="flex flex-col justify-center">
        {/* Ensure songs array has at least one element before accessing it */}
        {currentSong && <SongBar songUrl={currentSong.url} />}

        {/* <ul>
          {songs.map((song) => (
            <li key={song.id}>
              {song.title} by {song.singer}
            </li>
          ))}
        </ul> */}

        <div className="m-3">
          {options.length === 4 && (
            <FourOptions 
              first={options[0].title} 
              second={options[1].title} 
              third={options[2].title} 
              fourth={options[3].title} 
              onClick={(title) => {}}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Game;