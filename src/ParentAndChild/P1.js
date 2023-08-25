import React from "react";

const P1 = (props) => {
  return (
    <div>
      {props.children[0]}
      <h1>i am parent {props.name}</h1>
 
    </div>
  );
}

export default P1;


