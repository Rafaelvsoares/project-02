import React from "react";
import CardPack from "./CardPack";
import MyCards from "./MyCards";

function ShowCards(){
  const [myCards, setMyCards] = React.useState([])
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
    return <div className="container"><button>OPEN</button></div>
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
      const randomCard = {
        name: cards[randomIndex].name,
        image: cards[randomIndex].card_images[0].image_url,
        rarity: cards[randomIndex].card_sets ?
        cards[randomIndex].card_sets[0].set_rarity : 'none',
        id: String(count)
      }
      cardListCopy.push(randomCard)
    }
    setCardlist(cardListCopy)
  }

  function acceptCards(e: any){
    const chosenCard = cardList.filter((name: any) => {
      return name.id === e.currentTarget.alt
    })
    const card = {
      name: chosenCard[0].name,
      image: chosenCard[0].image,
      rarity: chosenCard[0].rarity,
      id: chosenCard[0].id
    }
    const myCardsCopy = structuredClone(myCards)
    myCardsCopy.push(card)
    setMyCards(myCardsCopy)
  }

  return ( <>
    <div>
      {myCards.map((card: any) => {
        return <MyCards 
          name = {card.name}
          image = {card.image}
          rarity = {card.rarity}
          id = {card.id}
        />  
      })}
      </div>
    <div className="container">
      <button onClick={() => openPack() }>OPEN</button>
      {cardList.map((card: any) => {
        return (
          <div key={card.id} className={`card-pack ${card.name}`}>
            <p>id: {card.id}</p>
            <p>Name:{card.name}</p>
            <p>Rarity:{card.rarity}</p>
            <img onClick={acceptCards} src={card.image} alt={card.id} />
            <div className="card-single">
              <p>Name:{card.name}</p>
              <img src={card.image} alt={card.name} />
            </div>
          </div>
      )})}
      
    </div>
    </>
  )
}

export default ShowCards