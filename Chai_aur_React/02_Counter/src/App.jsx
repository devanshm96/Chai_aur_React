import {useState} from 'react'
import './App.css'

function App() {
  // to propogate changes in DOM across all places where that variable is used
  const [counter, setCounter] = useState(15)

  // function addVal() {
  //   // counter val is updated by only one. Groups into batches - all jobs are similar in a batch
  //   setCounter(counter+1)
  //   setCounter(counter+1)
  //   setCounter(counter+1)
  //   setCounter(counter+1)
  //   console.log("Value increade ",counter);
  // }

  function addVal() {
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    console.log("Value increade ",counter);
  }

  function subVal() {
    setCounter(counter-1);
    console.log("Value decreade ",counter);
  }

  // let counter=5

  //value not updated in the UI - react controls UI updation
  // function addVal() {
  //   counter++;
  //   console.log("Value increade ",counter);
  // }
  
  // function subVal() {
  //   counter--;
  //   console.log("Value decreade ",counter);
  // }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={addVal}>Add value, Current {counter}</button>
      <br></br>
      <button onClick={subVal}>Remove value, Current {counter}</button>
    </>
  )
}

export default App
