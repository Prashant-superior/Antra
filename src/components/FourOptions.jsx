import Option from "./Option";
import { useEffect,useState } from "react";

const FourOptions = ({col1,col2, first, second, third, fourth, correct}) => {

  
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <Option title={first} col1={col1} col2={col2} correct={first===correct?"yes":"no"}/>
          <Option title={second} col1={col1} col2={col2} correct={second===correct?"yes":"no"}/>
        </div>
        <div className="flex justify-center">
          <Option title={third} col1={col1} col2={col2} correct={third===correct?"yes":"no"}/>
          <Option title={fourth} col1={col1} col2={col2} correct={fourth===correct?"yes":"no"}/>
        </div>
      </div>
    </>
  );
};

export default FourOptions;