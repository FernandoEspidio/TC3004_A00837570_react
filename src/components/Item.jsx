import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Item = ({item, ondelete}) => {
  return (
        <tr>
            <Link to={`/items/${item.id}?q=react55`}>
              <td> {item.name} </td>
            </Link>
            <td>
              <Button click={()=>ondelete(item.id)} name={"X"}/>
            </td>
        </tr>
  )
}

export default Item
