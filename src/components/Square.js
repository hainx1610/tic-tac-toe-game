import React from "react";

function Square({ value, handleClick }) {
  return (
    <button className={"square"} onClick={handleClick}>
      {value}
    </button>
  );
}

export default Square;
