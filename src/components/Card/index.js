
import React from "react";
import "./style.css";

//card component to be replicated for each images object
const Card = props => (

    //trigger call to increase count of a card and flag it as picked previously
    <div className="card" onClick={() => props.clickCount(props.id)}>

        <div className="imgs">

            {/* img source from props */}
            <img alt={props.name} src={props.image} />

        </div>

    </div>

);

export default Card;