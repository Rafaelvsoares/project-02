import React from "react";
import CardPack from "./CardPack";
import cardBack from '../assets/card-back.png'
import MyCards from "./MyCards";

type RandomCard = null | string

interface ICard {
  name: string
  image: string
  rarity: string
}

function YourCards(){

  const [cardPackPopUp, setCardPackPopUp] = React.useState(false)

  return(
    <main>
      <div className="container">
        <div className="card-pack-one" onClick={() => setCardPackPopUp(true)}>
          <img src={cardBack} alt="cardpack" />
        </div>
      </div>
      <div className="pack-popup">
          {<CardPack 
            trigger = {cardPackPopUp}
            setTrigger = {setCardPackPopUp}
          />}
      </div>
    </main>
    
  )
}

export default YourCards