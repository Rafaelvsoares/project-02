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
    <div className="custom-container">
      <div className="card-image">
        <figure className="image is-2by2">
          <img src={card.data[0].card_images[0].image_url} alt={card.data[0].name} />
        </figure>
      </div>
      <div className="info">
        <div>
          <p className="card-name">{card.data[0].name}</p>
          <hr className="solid" />
          <table>
            <tr>
              <td>Type</td>
              <td className="split-right">{card.data[0].type}</td>
            </tr>
            <tr>
              <td>Race</td>
              <td className="split-right">{card.data[0].race}</td>
            </tr>
            <tr>
              <td>Archetype</td>
              <td className="split-right">{card.data[0].archetype}</td>
            </tr>
            <tr>
              <td>Rarity</td>
              <td className="split-right">{card.data[0].card_sets[0].set_rarity}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td className="split-right">{card.data[0].desc}</td>
            </tr>
          </table>
          <hr className="solid" />
        </div>
        <div>
          <p><strong>Price: £</strong>{card.data[0].card_sets[0].set_price}</p>
          <input className="quantity" type="number" />
          <button>Add to Basket</button>
        </div>
      </div>
    </div>
  </>
  )

}

export default SelectedCard