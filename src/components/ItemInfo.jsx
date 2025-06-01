import React from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'

const ItemInfo = ({ items }) => {
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const navigate = useNavigate();
  const item = items.find((item) => item.id === id);
  return (
    <div>
        <h1>Item Info {id}</h1>
        <h2>Name: {item.name}</h2>
        <h2>Price: {item.price}</h2>
        <h3>Search Params: {searchParams.get("q")}</h3>
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default ItemInfo