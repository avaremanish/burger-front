import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [item , setItem] = useState({

  })



  return (
    <>
      <div className="App">
        <h1 className="Header">BURGER MANIA</h1>
        <div className="Burger-Items">
          <div className="Burger-item">
            <button className="Item-buttons" onClick={() => handleInc("Bread")}>
              +
            </button>
            <div className="">Bread</div>
            <button className="Item-buttons" onClick={() => handleDec("Bread")}>
              -
            </button>
          </div>
          <div className="Burger-item">
            <button className="Item-buttons">+</button>
            <div className="">aloo tikki</div>
            <button className="Item-buttons">-</button>
          </div>
          <div className="Burger-item">
            <button className="Item-buttons">+</button>
            <div className=""> cheese </div>
            <button className="Item-buttons">-</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
