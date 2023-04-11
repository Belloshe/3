import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('white')

  const handleBuyClick = () => {
    const colors = ['#70c3ff', '#ff70a6', '#d770ff', '#70ff94']
    const randomColor = colors[Math.floor(Math.random()*colors.length)]
    setColor(randomColor)
  }

  return (
    <div className="container">
      <div className="box1" style={{ backgroundColor: color }}>
        <h1>Barbie</h1>
        <h2>Lorem ipsum dolor sit, amet<br></br> consectetur adipisicing elit.
          <br></br>Itaque, eveniet commodi!
          <br></br>
          Lorem ipsum dolor sit amet.
        </h2>
        <h3>33,28</h3>
        <button onClick={handleBuyClick}>Buy</button>
      </div>
      <div className="box2"></div>
    </div>
  );
}

export default App
 