import './App.css';

/**
 * Follows the tutorial "React JS Full Course 2023 | Build an App and Master React in 1 Hour"
 * 1:11:43
 * by JavaScript Mastery on YouTube
 * - Oliver
 * 
 * Started Sunday, October 22, 2023
 */

const Person = (props) => {
  return(
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
      <hr></hr>
    </>
  );
}

const App = () => {
  return (
    <div className="App">
      <Person name="Ignác"      lastName="Semmelweis" age={32}/>
      <Person name="Kriszta"    lastName="Mézga"      age={9}/>
      <Person name="Carl-Oskar" lastName="Skytt"      age={25}/>
    </div>
  );
}

export default App;
