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
    </div>
  </>
  )

}

export default SelectedCard