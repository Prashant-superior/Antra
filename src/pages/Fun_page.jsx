import { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';

const Fun = () => {
  const [songs, setSongs] = useState([]);

  async function fetchSongs() {
    const { data } = await supabase.from('english_table') .select('*'); 
    setSongs(data);
    console.log("Fetched data:", data); 
};
  useEffect(() => {
    fetchSongs();
  }, []);
 

  return (
    <div>
      <h1>Song List</h1>
      <ul>
        {songs.map((song, index) => (
          <li key={song.id}>{song.url}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fun;