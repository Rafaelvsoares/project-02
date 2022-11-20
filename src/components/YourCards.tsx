import React from "react";
import CardPack from './CardPack'
import FilterBy from "./FilterBy";

type RandomCard = null | string

interface ICard {
  name: string
  image: string
  rarity: string
}

function YourCards(){

  const [cardList, setCardlist] = React.useState<any>([])
  const [cards, setCards] = React.useState<any>('')

  React.useEffect(() => {
    async function fetchCards(){
      const resp = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
      const card = await resp.json()
      setCards(card.data.slice(0, 10))
    }
    fetchCards()
  }, [])


  if(!cards){
    return <p>Loading...</p>
  }

  function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
  

  function getCardIndex(){
    const cardIndex = Math.floor(Math.random() * cards.length)
    return cardIndex
  } 

  function openPack(){
    const cardListCopy = []
    let count
    for (count = 0; count < 3; count++){
      const randomIndex = getCardIndex()
      console.log(randomIndex)
      const randomCard = {
        name: cards[randomIndex].name,
        image: cards[randomIndex].card_images[0].image_url,
        rarity: cards[randomIndex].card_sets ?
        cards[randomIndex].card_sets[0].set_rarity : 'none'
      }
      cardListCopy.push(randomCard)
      setCardlist(cardListCopy)
    }
    // console.log(cardListCopy)
  }

  return(
    <main>
      <button onClick={openPack}>ROLL</button>
      <div className="container">
        {cardList.map((card: any) => {
          return <CardPack
            key = {uuidv4()}
            name = {card.name}
            image = {card.image}
            rarity = {card.rarity}
          />
        })}
      </div>
    </main>
    
  )
}

export default YourCards