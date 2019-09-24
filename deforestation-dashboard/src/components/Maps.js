import React from 'react';
import ReactDOM from 'react-dom';

function Maps({year}) {

  
  return(

      <div className = "maps-div">
         
         <img src = {require(`../maps/forest_coverage_${year}.png`)} />

      </div>
  ); 

 

  
}


export default Maps;



/*function Maps() {

  //var x = document.getElementById("firstmap");

  
  return(

      <div id = "here">
         
         maps

      </div>
  ); 

  //ReactDOM.render(x, document.getElementById("here"));

  
}


export default Maps;*/