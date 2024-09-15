import React from "react";

const LandingPage = () => {

    const [grpname, setGrpName] = React.useState("");
    const [teamColor1, setTeamColor1] = React.useState("");
    const [teamColor2, setTeamColor2] = React.useState("");

    const handleChange = (e) => {
        setGrpName(e.target.value);
    }

    const handleColorChange1 = (color) => {
        setTeamColor1(color);
    }

    const handleColorChange2 = (color) => {
        setTeamColor2(color);
    }
    
    return(
    <div className="flex items-center justify-center pt-28 ">
        <div className="flex flex-col space-y-6">
            <div className="mb-6 flex flex-col">
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

            <div className="mb-6 flex flex-col">
                <label htmlFor="Team 1 Name" className="block mb-2 px-2 text-start text-lg font-medium text-gray-900 dark:text-black">Team 1 Name</label>
                <input type="text" id="Team 1 Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ backgroundColor: teamColor1 }} />
            </div>

            <div className="mb-6 flex flex-col">
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

            <div className="mb-6 flex flex-col">
                <label htmlFor="Team 2 Name" className="block mb-2 px-2 text-start text-lg font-medium text-gray-900 dark:text-black">Team 2 Name</label>
                <input type="text" id="Team 2 Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ backgroundColor: teamColor2 }} />
            </div>
        </div>
    </div>
    )    
}
export default LandingPage;