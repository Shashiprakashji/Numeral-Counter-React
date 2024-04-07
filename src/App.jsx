import { useState } from "react";

import "./App.css";

function App() {
  // let counter = 15;
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log(counter);
  };
  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
  };

  return (
    <>
      <div>
        <h1>My react first project</h1>
        <h2>Counter value: {counter}</h2>
        <button onClick={addValue}>Add Value: </button>
        <br />
        <button onClick={removeValue}>Remove Value: </button>
      </div>
    </>
  );
}

export default App;
