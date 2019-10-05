import React from "react";
import ReactDOM from "react-dom";
import Iframe from "react-iframe";

function InteractiveMap(){

    return (
        <Iframe url="https://deforestation-prediction-map.netlify.com/"        
        id="myId"
        className="interactive-map"
        display="initial"
        />


    );

    

}

export default InteractiveMap;