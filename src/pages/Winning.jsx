import { useLocation, useNavigate } from "react-router-dom";
import ScoreCard from "../components/ScoreCard";
import { useEffect, useState } from "react";

const Winning = () => {
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate();
    const [img1, setImg1] = useState("")
    const [img2, setImg2] = useState("")
    const [img11, setImg11] = useState("")
    const [img22, setImg22] = useState("")
    const [img1bg, setImg1bg] = useState("")
    const [img2bg, setImg2bg] = useState("")
    
    const im = "src/images/genreImage/sampsoid-sampsoid-racing.gif";
    useEffect(() => {
        if (location.state.teamScore1 > location.state.teamScore2) {
            // location.state.teamScore1+=1;
            setImg1('src/images/genreImage/cat-jump.gif');
            setImg2('src/images/genreImage/cat-stare.gif');
            setImg11('src/images/genreImage/krone-crown.gif')
            setImg22('src/images/genreImage/fun-kid.gif')
            setImg1bg('src/images/genreImage/sampsoid-sampsoid-racing.gif')
            setImg2bg('src/images/genreImage/ice.gif')
        }
        else {
            // location.state.teamScore2+=1;

            setImg1('src/images/genreImage/cat-stare.gif');
            setImg2('src/images/genreImage/cat-jump.gif');
            setImg22('src/images/genreImage/krone-crown.gif')
            setImg11('src/images/genreImage/fun-kid.gif')
            setImg1bg('src/images/genreImage/ice.gif')
            setImg2bg('src/images/genreImage/sampsoid-sampsoid-racing.gif')
        }
    }, []);

    const clickHandle=()=>{
        navigate('/genre',{
            replace:false,
            state:{
                grpName1:location.state.grpName1,
                grpName2: location.state.grpName2,
                teamColor1: location.state.teamColor1,
                teamColor2: location.state.teamColor2,
            }
        })
    }

    console.log({ img1 }, { img2 }, { img11 }, { img22 })
    return (
        <div>

            
            <div className="flex justify-around pt-5" >
                <div className="flex flex-col" style={{
                backgroundImage: `url(${img1bg})`,
                backgroundSize: 'cover',  // Ensures the background covers the entire div
                backgroundPosition: 'center',  // Centers the background image
                  // Set width to full
            }}>
                    <div className="flex justify-center">
                        <img src={img11} alt="" className="h-24 w-24" />
                    </div>
                    <div className="p-5">
                        <ScoreCard teamColor={location.state.teamColor1} teamScore={location.state.teamScore1} teamName={location.state.grpName1} />
                    </div>
                    <div className="flex justify-center">
                        <img src={img1} alt="" className="max-w-24 min-w-24" />
                    </div>

                </div>
                <div className="flex flex-col"style={{
                backgroundImage: `url(${img2bg})`,
                backgroundSize: 'cover',  // Ensures the background covers the entire div
                backgroundPosition: 'center',  // Centers the background image
                  // Set width to full
            }}>
                    <div className="flex justify-center">
                        <img src={img22} alt="" className="h-24 w-24" />
                    </div>
                    <div className="p-5">
                        <ScoreCard teamColor={location.state.teamColor2} teamScore={location.state.teamScore2} teamName={location.state.grpName2} />
                    </div>
                    <div className="flex justify-center">
                        <img src={img2} alt="" className="max-w-24 min-w-24" />
                    </div>

                </div>

            </div>
            <div className="flex justify-center pt-14">
                <a onClick={clickHandle} className="relative inline-block text-lg group min-w-96 text-center">
                    <span className="min-w-96 relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                        <span className="min-w-96 absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                        <span className="min-w-96 absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                        <span className="relative">`   Re  Take   `</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>
            </div>
        </div>
    )
}

export default Winning;