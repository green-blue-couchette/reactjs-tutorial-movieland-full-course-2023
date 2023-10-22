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
  const name = "Jane";
  const isNameShowing = true;

  return (
    <div className="App">
      {name ? (
        <>
          <h1>Hello, {name}!</h1>
        </>
      ):(
        <>
          <h1>Testing, still...</h1>
          <h2>(There is no name!)</h2>
        </>
      )
    }
    </div>
  );
}

export default App;
