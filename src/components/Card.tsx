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
        <div className="column is-3">
          <div className="card-image">
            <figure className="image is-2by2">
              <Link to={`/all-cards/${id}`}>
                <img src={image} />
              </Link>
            </figure>
          </div>
        </div>
  )
}

export default Card