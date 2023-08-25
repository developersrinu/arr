import React from "react";
import P1 from './ParentAndChild/P1';
import C1 from './ParentAndChild/C1';
import C2 from './ParentAndChild/C2';
import Arr from './Arr'

const App = () => {
  return (
    <div>
      {/* <P1 name="srinu">
        <C1 />
        <C2 />
      </P1>
      <P1 name="srinu">
        <C2 />
      </P1> */}
      <Arr/>
    </div>
  );
}

export default App;


