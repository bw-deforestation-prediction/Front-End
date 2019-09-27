import React from 'react';
import ReactDOM from 'react-dom';

function Maps({year}) {

  
  return(

    <div class = "maps-div">

      <img className="prediction-map" src={require(`../maps/forest_coverage_${year}.png`)} width= "1000px" height = "auto"/>

    </div>
    
  );  

  
}


export default Maps;



