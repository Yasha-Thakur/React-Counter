import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="card">
    <p>Increase or Decrease the counter</p>
    <p>Current value is: {count}</p>
      <button onClick={() => setCount((count+1))}>
        Increase to {count+1}
      </button>
      <button onClick={() => setCount((count-1))}>
        Decrease to {count-1}
      </button>
    </div>
    </>
  )
}

export default App
