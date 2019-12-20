
import React from "react";
import "./style.css";

const Card = props => (

  <div className="card" onClick={() => props.clickCount(props.id)}>
    
    <div className="imgs">

      <img alt={props.name} src={props.image} />

    </div>

  </div>

);

export default Card;