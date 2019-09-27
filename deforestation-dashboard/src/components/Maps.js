import React from 'react';
import ReactDOM from 'react-dom';

class Maps extends React.Component {

  constructor(props){
    super(props);
    
    

  }

  render(){
    return(

      <div class = "maps-div">

        <img className="prediction-map" src={require(`../maps/forest_coverage_${this.props.year}.png`)} width= "1000px" height = "auto"/>

      </div>


    );

  }

}

export default Maps;

/*function Maps({year}) {

  
  return(

    <div class = "maps-div">

      <img className="prediction-map" src={require(`../maps/forest_coverage_${year}.png`)} width= "1000px" height = "auto"/>

    </div>
    
  );  

  
}


export default Maps;*/



