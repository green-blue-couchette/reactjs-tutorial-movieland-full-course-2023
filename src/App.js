import './App.css';

/**
 * Follows the tutorial "React JS Full Course 2023 | Build an App and Master React in 1 Hour"
 * 1:11:43
 * by JavaScript Mastery on YouTube
 * - Oliver
 * 
 * Started Sunday, October 22, 2023
 */

const Person = () => {
  return(
    <>
      <h1>Name: Ignác</h1>
      <h2>Last Name: Semmelweis</h2>
      <h2>Age: 26</h2>
      <hr></hr>
    </>
  );
}

const App = () => {
  return (
    <div className="App">
      <Person/>
      <Person/>
      <Person/>
    </div>
  );
}

export default App;
