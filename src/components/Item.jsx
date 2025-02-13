import React from 'react'

const item = ({item}) => {
  return (
    <div>
        <ul>
            <li> {item.name} </li>
            <li> {item.price} </li>
        </ul>

    </div>
  )
}

export default item
