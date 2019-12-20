
import React from "react";
import "./style.css";

//wrapper component to contain other components
function Wrapper(props) {

    return <div className="wrapper">{props.children}</div>;

}

export default Wrapper;