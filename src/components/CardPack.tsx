import { Container } from "@chakra-ui/react";
import React from "react";
import ShowCards from "./ShowCards";

function CardPack(props: any){
  const [open, setOpen] = React.useState(false)

  return (props.trigger) ? (
    <>
      <div className="pack-popup-inner">
        <div className="test2">
          <div className="test">
            <div className="card-pack-one">
            </div>
          </div>
        </div>
        <button className="close-popup-btn" onClick={() => props.setTrigger(false)}>X</button>
        <ShowCards />
      </div>
      
  </>
  ) : <></>
}

export default CardPack