import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCount] = useState(0);
  const sum = () => {
    setCount(counter + 1);
  }
  const nombre = "Fer Espidio";
  const elemento = <h1>Hello, {nombre}</h1>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {counter}
        </p>
        <button onClick={sum}>Add</button>
        <p> 
          <strong>Hola </strong> {elemento}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
