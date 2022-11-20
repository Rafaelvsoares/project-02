import React from "react"

import { useParams } from 'react-router-dom'

function SelectedCard(){
  const [card, setCard] = React.useState(null) as any
  const { id } = useParams()

  React.useEffect(() => {
    async function fetchCards(){
      const resp = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
      const data = await resp.json()
      setCard(data)
    }
    fetchCards()
  }, [id])

  if(!card){
    return <p>Loading</p>
  }
  
  return( <>
    <div className="container">
      <div>
        <img src={card.data[0].card_images[0].image_url} alt={card.data[0].name} />
      </div>
      <div className="info">
        <p><strong>Name:</strong> {card.data[0].name}</p>
        <p><strong>Type:</strong> {card.data[0].type}</p>
        <p><strong>Race:</strong> {card.data[0].race}</p>
        <p><strong>Archetype:</strong> {card.data[0].archetype}</p>
        <p><strong>Rarity:</strong> {card.data[0].card_sets[0].set_rarity}</p>
        <p><strong>Description:</strong> {card.data[0].desc}</p>

      </div>
      <div className="info">
        <p><strong>Price: £</strong>{card.data[0].card_sets[0].set_price}</p>
        <input className="quantity" type="number" />
        <button>Add to Basket</button>
      </div>
    </div>
  </>
  )

}

export default SelectedCard