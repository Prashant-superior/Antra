import Option from "./Option";

const FourOptions = ({col1,col2, first, second, third, fourth }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <Option title={first} col1={col1} col2={col2}/>
          <Option title={second} col1={col1} col2={col2}/>
        </div>
        <div className="flex justify-center">
          <Option title={third} col1={col1} col2={col2}/>
          <Option title={fourth} col1={col1} col2={col2}/>
        </div>
      </div>
    </>
  );
};

export default FourOptions;