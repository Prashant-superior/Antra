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
            location.state.teamScore1=10;
            // console.log(location.state.teamScore1);
            setImg1('https://ylntqzcdismadpijbtvq.supabase.co/storage/v1/object/sign/songs/Image/cat.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb25ncy9JbWFnZS9jYXQuZ2lmIiwiaWF0IjoxNzI2OTI2MDcyLCJleHAiOjE3NTg0NjIwNzJ9.QFDjk8JSCa_MmsxnzhKCV3TRjJQgzIkM4nHmi026Xp0&t=2024-09-21T13%3A40%3A50.251Z');
            setImg2('https://ylntqzcdismadpijbtvq.supabase.co/storage/v1/object/sign/songs/Image/cat-stare.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb25ncy9JbWFnZS9jYXQtc3RhcmUuZ2lmIiwiaWF0IjoxNzI2OTI2MTAyLCJleHAiOjE3NTg0NjIxMDJ9.KiAWOwnOICl9YynECJNnI5wju5mG3g7j4BETHPNeVQs&t=2024-09-21T13%3A41%3A19.669Z');
            setImg11('https://ylntqzcdismadpijbtvq.supabase.co/storage/v1/object/sign/songs/Image/krone-crown.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb25ncy9JbWFnZS9rcm9uZS1jcm93bi5naWYiLCJpYXQiOjE3MjY5MjYxMjcsImV4cCI6MTc1ODQ2MjEyN30.GS7ZttQnvwnrMss7J_JkdqqH2G9mnnHrZBTyR2vjp44&t=2024-09-21T13%3A41%3A44.646Z')
            setImg22('https://ylntqzcdismadpijbtvq.supabase.co/storage/v1/object/sign/songs/Image/fun-kid.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb25ncy9JbWFnZS9mdW4ta2lkLmdpZiIsImlhdCI6MTcyNjkyNjE0NywiZXhwIjoxNzU4NDYyMTQ3fQ.dVvb-4bg-HEZvKe_jGH9KuMEBoOk7EWoaXnz6Dkq4O8&t=2024-09-21T13%3A42%3A05.103Z')
            // setImg1bg('src/images/genreImage/sampsoid-sampsoid-racing.gif')
            // setImg2bg('src/images/genreImage/ice.gif')
        }
        else {      
            location.state.teamScore2=10;

            // console.log(location.state.teamScore2);
            setImg1('https://ylntqzcdismadpijbtvq.supabase.co/storage/v1/object/sign/songs/Image/cat-stare.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb25ncy9JbWFnZS9jYXQtc3RhcmUuZ2lmIiwiaWF0IjoxNzI2OTI2MTAyLCJleHAiOjE3NTg0NjIxMDJ9.KiAWOwnOICl9YynECJNnI5wju5mG3g7j4BETHPNeVQs&t=2024-09-21T13%3A41%3A19.669Z');
            setImg2('https://ylntqzcdismadpijbtvq.supabase.co/storage/v1/object/sign/songs/Image/cat.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb25ncy9JbWFnZS9jYXQuZ2lmIiwiaWF0IjoxNzI2OTI2MDcyLCJleHAiOjE3NTg0NjIwNzJ9.QFDjk8JSCa_MmsxnzhKCV3TRjJQgzIkM4nHmi026Xp0&t=2024-09-21T13%3A40%3A50.251Z');
            setImg22('https://ylntqzcdismadpijbtvq.supabase.co/storage/v1/object/sign/songs/Image/krone-crown.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb25ncy9JbWFnZS9rcm9uZS1jcm93bi5naWYiLCJpYXQiOjE3MjY5MjYxMjcsImV4cCI6MTc1ODQ2MjEyN30.GS7ZttQnvwnrMss7J_JkdqqH2G9mnnHrZBTyR2vjp44&t=2024-09-21T13%3A41%3A44.646Z')
            setImg11('https://ylntqzcdismadpijbtvq.supabase.co/storage/v1/object/sign/songs/Image/fun-kid.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb25ncy9JbWFnZS9mdW4ta2lkLmdpZiIsImlhdCI6MTcyNjkyNjE0NywiZXhwIjoxNzU4NDYyMTQ3fQ.dVvb-4bg-HEZvKe_jGH9KuMEBoOk7EWoaXnz6Dkq4O8&t=2024-09-21T13%3A42%3A05.103Z')
            // setImg1bg('src/images/genreImage/ice.gif')
            // setImg2bg('src/images/genreImage/sampsoid-sampsoid-racing.gif')
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

            
            <div className="flex justify-around pt-12" >
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
                <div className="flex flex-col "style={{
                backgroundImage: `url(${img2bg})`,
                backgroundSize: 'cover',  // Ensures the background covers the entire div
                backgroundPosition: 'center',  // Centers the background image
                  // Set width to full
            }}>
                    <div className="flex justify-center ">
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
                        <span className="relative">Play Again</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>
            </div>
        </div>
    )
}

export default Winning;