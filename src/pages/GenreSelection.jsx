import { useEffect, useState } from 'react'

const GenreSelection = ()=>{
    const [genre,setGenre] = useState("")

    

    return(
        <>
        <div className="h-full flex flex-col justify-center	items-center min-h-screen">
            <div className="w-full flex flex-row justify-center">
                <div  onClick={()=>{
                    setGenre("english")
                    // console.log("English")
                }}>
                    <img className="h-auto max-w-sm rounded-lg m-5     
                    hover:scale-105 transform transition duration-300 ease-in-out shadow-lg hover:md:shadow-[#62cee9]" 
                    src="src/images/genreImage/ENGLISH.png" alt="image description"/>
                </div>

                <div onClick={()=>{
                    setGenre("hindi")
                    // console.log("Hindi")
                }}>
                    <img className="h-auto max-w-sm rounded-lg m-5 
                    hover:scale-105 transform transition duration-300 ease-in-out shadow-lg hover:shadow-[#cad776]" src="src/images/genreImage/hindi.png" alt="image description"/>
                </div>
                
                <div onClick={()=>{
                    setGenre("mix")
                    // console.log("Mix")
                    // console.log(genre)
                }}>
                    <img className="h-auto max-w-sm rounded-lg m-5    
                    hover:scale-105 transform transition duration-300 ease-in-out shadow-lg hover:shadow-[#ffc9d9]" src="src/images/genreImage/image.png" alt="image description"/>
                </div>
            </div>
        </div>
        </>
    )
};

export default GenreSelection;