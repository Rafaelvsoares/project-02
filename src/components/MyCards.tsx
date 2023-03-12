import React from "react";

function MyCards({name, image, rarity, id}: any){

  return(
    <>
      <p>id: {id}</p>
      <p>Name:{name}</p>
      <p>Rarity:{rarity}</p>
      <img src={image} alt={name} />
      <div className="card-single">
        <p>Name:{name}</p>
        <img src={image} alt={name} />
      </div>
    </>
  )
}

export default MyCards