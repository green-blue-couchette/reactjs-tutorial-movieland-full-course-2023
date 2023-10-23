import {useState} from 'react';
import './App.css';

/**
 * Follows the tutorial "React JS Full Course 2023 | Build an App and Master React in 1 Hour"
 * 1:11:43
 * by JavaScript Mastery on YouTube
 * - Oliver
 * 
 * Started Sunday, October 22, 2023
 */

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <button onClick={() => {setCounter((kitty) => (kitty - 1))}}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => {setCounter((kitty) => (kitty + 1))}}>+</button>
    </div>
  );
}

export default App;
