import './App.css';
import {useEffect, useState } from 'react';

import Footer from './components/Footer';

import List from './pages/List';
import Add from './components/Add';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ResponsiveAppBar from './components/AppBar';

import Login from './pages/Login';
import Home from './pages/Home';
import ItemInfo from './components/ItemInfo';
import LifeCycle from './components/LifeCycle';
import useAuth from './hooks/useAuth';
import { useItems } from './hooks/useItems';

function App() {
  // const [items, setItems] = useState([
  //   { id: 1, name : "item1", price: 1}, 
  //   { id: 2, name : "item2", price: 2}, 
  //   { id: 3, name : "item3", price: 3}
  // ]);

  const [show, setShow] = useState(false);

  const {isLogin, token, login, logout} = useAuth();
  const {items, getItems, addItem, delItem} = useItems(token);

  useEffect(() => {
    if(isLogin) {
      getItems();
    }
  }, [isLogin, getItems]);

  return (
    <div>
      <BrowserRouter>
      {isLogin && <ResponsiveAppBar logout={logout}/>}
        <Routes>
          <Route path="/" element={<Login login={login}/>}/>
          <Route path="/add" element={<Add add={addItem}/>}/>
          <Route path="/items" element={<List items={items} ondelete = {delItem}/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/items/:id" element={<ItemInfo items={items}/>}/>
        </Routes>

      <Footer/>
      </BrowserRouter>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"} LifeCycle</button>
      {show && <LifeCycle/>}
{/* 
      {counter}
      <Button 
        name ={"suma"} 
        click = {sum}
      />

      <Button
        name = {"mensaje"}
        click = {() => alert("hola")}
      /> */}
{/* 
      <Add add = {add}/>

      <List items = {items} ondelete={del}/> */}
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