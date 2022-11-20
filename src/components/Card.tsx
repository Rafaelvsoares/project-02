import React from "react";
import { Link } from 'react-router-dom'

// ! This is the component to map what need from the API
interface CardProps {
  name: string
  image: string
  id: string
  type: string
  race: string
  archetype: string
  rarity: string
  description: string
}

function Card({name, image, id, type, race, archetype, rarity, description}: CardProps){
  return (
    <>
      <div className="card-pack">
        <p>{name}</p>
        <Link to={`/all-cards/${id}`}>
          <img src={image} alt={name} width="200px"/>
        </Link>
        <div className="card-single">
          <img className="card-size"src={image} alt={name} />
          <div className="info">
            <p>{name}</p>
            <p>{type}</p>
            <p>{race}</p>
            <p>{archetype}</p>
            <p>{rarity}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card