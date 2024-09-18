import Option from './Option';

const FourOptions = ({col1, col2, first, second, third, fourth, correct, onOptionClick}) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <Option title={first} col1={col1} col2={col2} correct={first===correct}
            onScoreT1Click={() => onOptionClick(1, first===correct)}
            onScoreT2Click={() => onOptionClick(2, first===correct)}
          />
          <Option title={second} col1={col1} col2={col2} correct={second===correct}
            onScoreT1Click={() => onOptionClick(1, second===correct)}
            onScoreT2Click={() => onOptionClick(2, second===correct)}
          />
        </div>
        <div className="flex justify-center">
          <Option title={third} col1={col1} col2={col2} correct={third===correct}
            onScoreT1Click={() => onOptionClick(1, third===correct)}
            onScoreT2Click={() => onOptionClick(2, third===correct)}
          />
          <Option title={fourth} col1={col1} col2={col2} correct={fourth===correct}
            onScoreT1Click={() => onOptionClick(1, fourth===correct)}
            onScoreT2Click={() => onOptionClick(2, fourth===correct)}
          />
        </div>
      </div>
    </>
  );
};
export default FourOptions;