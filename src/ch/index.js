import React from "react";

function FunctionComponent({ color, value }) {
  return (
    <>
      <h2 className="number" style={{ color: color }}>
        {value}
      </h2>
      <div>
        <button id="increase">+1</button>
        <button id="decrease">-1</button>
      </div>
    </>
  );
}

FunctionComponent.defaultProps = {
  color: "blue"
};

export default FunctionComponent;
