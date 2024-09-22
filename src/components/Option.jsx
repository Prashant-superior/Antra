import SingleButton from "./SingleButton";

const Option = ({title, col1, col2, correct, onScoreT1Click, onScoreT2Click}) => {
    return (
        <>
            <div className="flex flex-col justify-center min-w-96 border-0 border-indigo-500/100 bg-white rounded shadow-lg px-3 m-5 font-spaceGrotesk">   
                <div className="flex justify-center font-medium text-base mt-3 mb-1">
                    <span>{title}</span>
                </div>

                <div className="flex justify-around mb-2">
                    <SingleButton 
                        color={col1} 
                        correct={correct} 
                        onClick={() => onScoreT1Click(correct)} 
                    />
                    <SingleButton 
                        color={col2} 
                        correct={correct} 
                        onClick={() => onScoreT2Click(correct)}
                    />
                </div>
            </div>
        </>
    )
}

export default Option;