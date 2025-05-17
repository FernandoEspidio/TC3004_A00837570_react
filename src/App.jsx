import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import List from './pages/List';
import Add from './components/Add';
import { BrowserRouter, Route, Routes, useAsyncError } from 'react-router-dom';
import ResponsiveAppBar from './components/AppBar';
import CredentialsSignInPage from './pages/Login';
import Login from './pages/Login';
import Home from './pages/Home';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

function App() {
  // const [items, setItems] = useState([
  //   { id: 1, name : "item1", price: 1}, 
  //   { id: 2, name : "item2", price: 2}, 
  //   { id: 3, name : "item3", price: 3}
  // ]);

  const[items, setItems] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  let [counter, setCount] = useState(0);
  
  const [token, setToken] = useState("");

  useEffect(() => {
    if(isLogin){
      getItems();
    }
  }, [isLogin]);

  const getItems = async () => {
    const tokenUsed = token;
  
    const result = await fetch(`${API_URL}/items/`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${tokenUsed}`
      }
    });
    const data = await result.json();
    setItems(data);
  };
  
  const del = async (id) => {
    const tokenUsed = token;
  
    await fetch(`${API_URL}/items/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${tokenUsed}`
      }
    });
    setItems(items.filter((item) => item.id !== id));
  };
  
  const add = async (item) => {
    const tokenUsed = token;

    const result = await fetch(`${API_URL}/items/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${tokenUsed}`
      },
      body: JSON.stringify(item),
    });
    const data = await result.json();
    console.log(data);
    
    setItems([...items, data.item]);
  };

  const login = async (user) => {
    const resul = await fetch(`${API_URL}/login/`, {
      method:"POST", 
      headers:{"content-type":"application/json"},
      body: JSON.stringify(user),
    });

    const data = await resul.json();

    setToken(data.token);
    setIsLogin(data.isLogin);

    return data.isLogin;

    // if(user.username === "Fernando" && user.password === "1234") {
    //   setIsLogin(true);
    // }

    return isLogin;
  }

  const setLogout = () => {
    setIsLogin(false);
  };

  const nombre = "Fer Espidio";
  const elemento = <h1>Hello, {nombre}</h1>;

  return (
    <div>
      <BrowserRouter>
      {isLogin && <ResponsiveAppBar setLogout={setLogout}/>}
        <Routes>
          <Route path="/" element={<Login login={login}/>}/>
          <Route path="/add" element={<Add add={add}/>}/>
          <Route path="/items" element={<List items={items} ondelete = {del}/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>

      <Footer/>
      </BrowserRouter>
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