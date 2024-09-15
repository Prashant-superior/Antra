import React from "react";

const LandingPage = () => {

    const [grpname, setGrpName] = React.useState("");

    const handleChange = (e) => {
        setGrpName(e.target.value);
    }

    return(
    <div>
        <div className="bg-red-500 flex justify-center m-60">
            <input placeholder="Group 1 Name" type="text" onChange={handleChange} className="h-12 w-52">
            </input>
        </div>
    </div>
    )    
}
export default LandingPage;