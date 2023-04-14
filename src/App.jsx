import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(parseInt(localStorage.getItem("count")) || 0);

  useEffect(() => {
    localStorage.setItem("count", counter);
  }, [counter])
  return (
    <div className="App">
      <h1>Chasing the clicks</h1>
      <div>{counter}</div>
      <button onClick={() => setCounter(prevState => prevState + 1)}>Click me</button>
    </div>
  )
}

export default App
