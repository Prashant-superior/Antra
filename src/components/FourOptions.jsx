import Option from "./Option";

const FourOptions = ({ first, second, third, fourth }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <Option title={first} />
          <Option title={second} />
        </div>
        <div className="flex justify-center">
          <Option title={third} />
          <Option title={fourth} />
        </div>
      </div>
    </>
  );
};

export default FourOptions;