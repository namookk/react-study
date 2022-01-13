import React, {useState } from 'react';
import './day3/day3.css'

function App() {
    const [number, setNumber] = useState(0);
    function minus(){
      setNumber(number - 1);
    }
    function plus(){
      setNumber(number + 1);
    }
    function multiply(){
        setNumber(number * 2);
    }

    return (
    <div className="App">
        <div> 값 : {number}</div>
        <button onClick={minus}>-1</button>
        <button onClick={plus}>+1</button>
        <button onClick={multiply}>*2</button>
    </div>
  );
}

export default App;
