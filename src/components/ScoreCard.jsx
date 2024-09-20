const ScoreCard = ({ teamColor, teamScore, teamName }) => {


  return (
    <>
      <div className="flex flex-col bg-white border shadow-sm rounded-xl  dark:shadow-neutral-700/70 max-w-96 min-w-80" style={{ backgroundColor: teamColor }}>
        <div className="p-3 md:p-5">
          <h3 className="text-lg  text-black-300 flex justify-around ">
            {teamName}
          </h3>
          <p className="mt-2 text-black-500 dark:text-black-500 flex justify-around text-2xl font-semibold ">
            {teamScore}
          </p>

        </div>
      </div>
    </>
  )
}

export default ScoreCard;
