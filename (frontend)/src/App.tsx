// import { useState } from 'react'
import './App.css'
import { GetData } from './getData'

const App = () => {
  // const [counter, setCounter] = useState(0)
  console.log(GetData())
  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <p>Lets learn backend</p>
        {/* <button onClick={() => { setCounter(counter + 1)}}>Add</button>
        <button onClick={() => { setCounter(counter - 1)}}>Minus</button>
        <p>Counter: {counter}</p> */}
      </div>
    </>
  )
}

export default App
