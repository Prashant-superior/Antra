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
            navigate('/game', { 
                replace: true, 
                state: {
                    genre: genre,
                    grpName1:location.state.grpName1,
                    grpName2: location.state.grpName2,
                    teamColor1: location.state.teamColor1,
                    teamColor2: location.state.teamColor2,
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
                    src="src/images/genreImage/ENGLISH.png" alt="image description"/>
                </div>

                <div onClick={() => handleClick("Hindi")}>
                    <img className="h-auto max-w-sm rounded-lg m-5 
                    hover:scale-105 transform transition duration-300 ease-in-out shadow-lg hover:shadow-[#cad776]" src="src/images/genreImage/hindi.png" alt="image description"/>
                </div>
                
                <div onClick={() => handleClick("Mix")}>
                    <img className="h-auto max-w-sm rounded-lg m-5    
                    hover:scale-105 transform transition duration-300 ease-in-out shadow-lg hover:shadow-[#ffc9d9]" src="src/images/genreImage/image.png" alt="image description"/>
                </div>
            </div>
        </div>
        </>
    )
};

export default GenreSelection;