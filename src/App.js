import React, {useState } from 'react';
import './day3/day3.css'
import Calc from './day4/Calc';

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
        <Calc number={number}/>
        <button onClick={minus}>-1</button>
        <button onClick={plus}>+1</button>
        <button onClick={multiply}>*2</button>
    </div>
  );
}

export default App;
