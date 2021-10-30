import React, { useState } from 'react';
import Increment from './Increment';

const App = () => {

  let [count, setCount] = useState(0);
  const [Day, setDay] = useState(true);

  const incNumber = () => {
    setCount(++count);
  }
  const decNumber = () => {
    if (count == 0) {
      alert("Number can't be less than zero 👍");
    }
    else {
      setCount(--count);
    }

  }

  return (
    <>
      <div className={`main-div ${Day ? 'isMorning' : ''}`}>
        <h2>Good {Day ? 'Morning' : 'Night'} 💗</h2>
        <div className="center-div">
          <Increment counter={count} />
          <br />
          <br />
          <div className="btn-style">
            <button onClick={incNumber} title="Increment Number">
              Increment ⏫
            </button>
            <button onClick={decNumber} title="Decrement Number">
              Decrement ⬇️
            </button>
            <button onClick={() => setDay(!Day)}>Update Day ☁️</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;