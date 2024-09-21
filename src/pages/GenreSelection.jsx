import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const GenreSelection = ()=>{
    
    const [genre, setGenre] = useState('');  // Manage selected genre
    const [shouldNavigate, setShouldNavigate] = useState(false); // Separate state for navigation trigger
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location.state.grpName1,location.state.grpName2,location.state.teamColor1,location.state.teamColor2,)

    const handleClick = (selectedGenre) => {
        setGenre(selectedGenre); // Set the selected genre
        setShouldNavigate(true); // Trigger navigation
    };

    useEffect(() => {
        // Only navigate when the genre is valid and shouldNavigate is true
        if (shouldNavigate && ["English", "Hindi", "Mix"].includes(genre)) {
            navigate('/trial', { 
                replace: true, 
                state: {
                    genre: genre,
                    ...location.state,
                }
            });
            setShouldNavigate(false); // Reset navigation trigger to prevent re-render loop
        }
        }, [shouldNavigate, genre, navigate, location]);


    return(
        <>
        <div className="h-full flex flex-col justify-center	items-center min-h-screen">
            <div className="w-full flex flex-row justify-center">
                <div  onClick={() => handleClick("English")}>
                    <img className="h-auto max-w-sm rounded-lg m-5     
                    hover:scale-105 transform transition duration-300 ease-in-out shadow-lg hover:md:shadow-[#62cee9]" 
                    src="https://ylntqzcdismadpijbtvq.supabase.co/storage/v1/object/sign/songs/Image/ENGLISH.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb25ncy9JbWFnZS9FTkdMSVNILnBuZyIsImlhdCI6MTcyNjkyNTk2MywiZXhwIjoxNzU4NDYxOTYzfQ.HGxYGmkQiMHOr046lNLa7tPT1rTld7TuuQioq3-D5mo&t=2024-09-21T13%3A39%3A01.282Z" alt="image description"/>
                </div>

                <div onClick={() => handleClick("Hindi")}>
                    <img className="h-auto max-w-sm rounded-lg m-5 
                    hover:scale-105 transform transition duration-300 ease-in-out shadow-lg hover:shadow-[#cad776]" src="https://ylntqzcdismadpijbtvq.supabase.co/storage/v1/object/sign/songs/Image/hindi.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb25ncy9JbWFnZS9oaW5kaS5wbmciLCJpYXQiOjE3MjY5MjU5ODYsImV4cCI6MTc1ODQ2MTk4Nn0.OSNoCtTUi2CyWazx5kRxWeCmOxW4e2OKT3KGKc3EX90&t=2024-09-21T13%3A39%3A23.921Z" alt="image description"/>
                </div>
                
                <div onClick={() => handleClick("Mix")}>
                    <img className="h-auto max-w-sm rounded-lg m-5    
                    hover:scale-105 transform transition duration-300 ease-in-out shadow-lg hover:shadow-[#ffc9d9]" src="https://ylntqzcdismadpijbtvq.supabase.co/storage/v1/object/sign/songs/Image/image.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb25ncy9JbWFnZS9pbWFnZS5wbmciLCJpYXQiOjE3MjY5MjYwNDAsImV4cCI6MTc1ODQ2MjA0MH0.QQwFyDGUqeUts_zxrvpKcgi8fHIxre3NaxKrQmwrD5I&t=2024-09-21T13%3A40%3A17.346Z" alt="image description"/>
                </div>
            </div>
        </div>
        </>
    )
};

export default GenreSelection;