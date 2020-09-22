import React from 'react';
import './card.css'

export default (props) => {
  return (
    <div className='card-container'>
      <img alt='monster' src={`https://robohash.org/${props.monster.id}?size=180x180`}></img>
      <h1>{props.monster.name}</h1>
      <h3>{props.monster.email}</h3>
    </div>

  )
}