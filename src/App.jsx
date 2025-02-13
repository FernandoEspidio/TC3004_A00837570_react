import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import List from './components/List';
import Add from './components/Add';

function App() {
  const items = [
    { id: 1, name : "item1", price: 1}, 
    { id: 2, name : "item2", price: 2}, 
    { id: 3, name : "item3", price: 3}
  ];

  const [counter, setCount] = useState(0);
  const sum = () => {
    setCount(counter + 1);
  };

  const add = (item) => {
    item.id = items.length + 1;
    items.push(item);
  };

  const nombre = "Fer Espidio";
  const elemento = <h1>Hello, {nombre}</h1>;

  return (
    <div>
      <Header/>
      {counter}
      <Button 
        name ={nombre} 
        click = {sum}
      />

      <Button
        name = {"mensaje"}
        click = {() => alert("hola")}
      />

      <Add add = {add}/>

      <List items = {items} />

      <Footer/>
    </div>
  );
}

export default App;

/*
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

*/