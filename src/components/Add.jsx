import React, { useState } from 'react'
import Button from './Button';

const Add = ({add}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const onsubmit = (e) => {
      e.preventDefault();
      if(!name || !price){alert("Ingresa algo"); return};
      add({name, price})
      setName("");
      setPrice("");
    };

  return (
    <form onSubmit={onsubmit}>
        <input onChange = {(e)=>setName(e.target.value)} value = {name} type ="text" name = ""  id=""/>
        <input onChange = {(e)=>setPrice(e.target.value)} value = {price} type ="text" name = ""  id="" />
        <input type="submit" value = {"Agregar"}/>
    </form>
  )
}

export default Add
