import {useState} from 'react';
import './App.css';
import { useEffect } from 'react';

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

  useEffect(() => {
    alert("Counter changed to " + counter + ".");
  }, [counter]);

  // Without a dependency array, useEffect runs every time a button is pressed
  // With an empty dependency array [], useEffect runs only the first time a component is mounted.
  // With a dependency array that contains something, like [counter], useEffect will run every time the prop in question is changed.
  
  return (
    <div className="App">
      <button onClick={() => {setCounter((prevCounter) => (prevCounter - 1))}}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => {setCounter((prevCounter) => (prevCounter + 1))}}>+</button>
    </div>
  );
}

export default App;
