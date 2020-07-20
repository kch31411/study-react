import React, { useState } from "react";

function FunctionComponent({ color, value, showBtn }) {
  const [number, setNumber] = useState(Number(value));

  const onIncrease = () => {
    setNumber(number + 1);
  };
  const onDecrease = () => {
    setNumber(prev => prev - 1);
  };

  return (
    <>
      <h2 className="number" style={{ color: color }}>
        {number}
      </h2>
      {showBtn && (
        <div>
          <button onClick={onIncrease} id="increase">
            +1
          </button>
          <button onClick={onDecrease} id="decrease">
            -1
          </button>
        </div>
      )}
    </>
  );
}

FunctionComponent.defaultProps = {
  color: "blue",
  showBtn: true
};

export default FunctionComponent;
