import React from "react";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const [grpName1, setGrpName1] = React.useState("");
    const [grpName2, setGrpName2] = React.useState("");
    const [teamColor1, setTeamColor1] = React.useState("#9bd5ef");
    const [teamColor2, setTeamColor2] = React.useState("#7ae582");

    const navigate = useNavigate();

    const handlename1 = (e) => {
        setGrpName1(e.target.value);
        // console.log(grpName1)
    }

    const handlename2 = (e) => {
        setGrpName2(e.target.value);
        // console.log(grpName1)
    }

    const handleColorChange1 = (color) => {
        setTeamColor1(color);
        // console.log(teamColor1)
    }

    const handleColorChange2 = (color) => {
        setTeamColor2(color);
        // console.log(teamColor2)
    }

    const nav=()=>{
        // console.log("hello")
        navigate('/genre', { replace: false, state:{
            grpName1: grpName1,
            grpName2: grpName2,
            teamColor1: teamColor1,
            teamColor2: teamColor2
        }});
    }

    return (
        <div className="flex items-center justify-center pt-28 ">
            <div className="flex flex-col space-y-6">
                <div className=" ">
                    <div className=" flex flex-col">
                        <label className="block mb-2 px-2 text-start text-lg font-medium text-gray-900 dark:text-black">Select Team Color</label>
                        <div className="flex space-x-4">
                            {['#9bd5ef', '#fea756', '#aa6ee8', '#fd1042'].map(color => (
                                <div
                                    key={color}
                                    className={`w-20 h-20 rounded-full cursor-pointer ${color === teamColor1 ? 'ring-4 ring-offset-2 ring-' + color + '-500' : ''}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => handleColorChange1(color)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="mb-8 flex flex-col">
                        <label htmlFor="Team 1 Name" className="block mb-2 px-2 text-start text-lg font-medium text-gray-900 dark:text-black">Team 1 Name</label>
                        <input type="text" id="Team 1 Name" className="bg-gray-50 border border-gray-300 text-zinc-950 text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ backgroundColor: teamColor1 }} onChange={(e) => handlename1(e)} />
                    </div>
                </div>


                <div>
                    <div className="mb-2 flex flex-col">
                        <label className="block mb-2 px-2 text-start text-lg font-medium text-gray-900 dark:text-black">Select Team Color</label>
                        <div className="flex space-x-4">
                            {['#7ae582', '#4361ee', '#ff006e', '#00f5d4'].map(color => (
                                <div
                                    key={color}
                                    className={`w-20 h-20 rounded-full cursor-pointer ${color === teamColor2 ? 'ring-4 ring-offset-2 ring-' + color + '-500' : ''}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => handleColorChange2(color)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="mb-1 flex flex-col">
                        <label htmlFor="Team 2 Name" className="block mb-2 px-2 text-start text-lg font-medium text-gray-900 dark:text-black">Team 2 Name</label>
                        <input type="text" id="Team 2 Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ backgroundColor: teamColor2 }} onChange={(e) => handlename2(e)} />
                    </div>
                </div>

                <div>
                    <a onClick={nav} className="relative w-full inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-black rounded shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">Let's Go</span>
                        <span className="relative invisible">Let's GO</span>
                    </a>
                </div>
            </div>

        </div>
    )
}
export default LandingPage;