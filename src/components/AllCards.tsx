import React, { useEffect } from "react";
import Card from "./Card"
interface ICard {
  data: [{
    id: string
    name: string
    type: string
    desc: string
    race: string
    archetype: string
    card_sets: [{
      set_rarity: string
    }]
    card_images: [{
      image_url: string
      }]
  }]
}

type CardType = null | ICard

function AllCards(){

  const [cards, setCards] = React.useState<CardType>(null)

  React.useEffect(() => {
    async function fetchCards(){
      const resp = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
      const card = await resp.json()
      setCards(card)
    }
    fetchCards()
  }, [])
  

  if(!cards){
    return <p>Loading...</p>
  }

  return(
    <section className="section">
      <div className="container is-fluid">
        <div className="columns is-multiline">
          {cards.data.slice(0, 100).map((card: any) => {
            return <Card
            key={card.name}
            id = {card.id}
            name = {card.name}
            image = {card.card_images[0].image_url}
            type = {card.type}
            race = {card.race}
            archetype = {card.archetype}
            rarity = {""}
            description = {card.desc}
          />
          })}
        </div>
      </div>
    </section>
  )
}

export default AllCards