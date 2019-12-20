
import React from "react";
import "./style.css";

const Header = props => (

    <div className="header">

        <div className="title">{props.children}</div>
        
        <div className="high-score">
            High Score: {props.highscore}
        </div>
        
        <div className="score">
            Score: {props.score}
        </div>

    </div>

);

export default Header;