import React from "react";

export default function FunctionComponent() {
  return (
    <div>
      <h2 id="number">0</h2>
      <div>
        <button id="increase">+1</button>
        <button id="decrease">-1</button>
      </div>
    </div>
  );
}

const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
  console.log("increase 가 클릭됨");
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
  console.log("decrease 가 클릭됨");
};
