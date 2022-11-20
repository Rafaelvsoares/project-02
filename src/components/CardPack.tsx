import React from "react";

function CardPack({name, image, rarity}: any){

  return (
    <>
    <div className="card-pack">
      <div className="card-pack">
        <p>Name:{name}</p>
        <p>Rarity:{rarity}</p>
        <img src={image} alt={name} />
        <div className="card-single">
          <p>Name:{name}</p>
          <img src={image} alt={name} />
        </div>
      </div>
    </div>
      

  </>
  )
}

export default CardPack