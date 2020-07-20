import React from "react";

function FunctionComponent({ color, value, showBtn }) {
  return (
    <>
      <h2 className="number" style={{ color: color }}>
        {value}
      </h2>
      {showBtn && (
        <div>
          <button id="increase">+1</button>
          <button id="decrease">-1</button>
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
