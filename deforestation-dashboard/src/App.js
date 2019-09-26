import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from './components/LoginScreen';
import PrivateRoute from './components/PrivateRoute';
import AppHeader from './components/AppHeader';
import RegisterScreen from './components/RegisterScreen';
import Dashboard from "./components/Dashboard.js";
import Navbar from "./components/Navbar";
import SavedCharts from "./components/SavedCharts.js";
import MapViewByYear from "./components/MapViewByYear.js";
import DataByCountry from "./components/DataByCountry.js";
import CountryCard from "./components/CountryCard.js";
import InteractiveMap from "./components/InteractiveMap.js";
import Profile from "./components/Profile/Profile.js";


function App() {  
  
  const [savedCharts, setSavedCharts] = useState(localStorage.getItem("savedCharts") ? JSON.parse(localStorage.getItem("savedCharts")) : []);

  useEffect(() => {
		localStorage.setItem("savedCharts", JSON.stringify(savedCharts));

	}, [savedCharts]); 
  

  const saveCharts = ( nameIn ) => {        

    setSavedCharts([...savedCharts, nameIn]);   
    
  }

  const deleteSavedChart = (chartIn) => {

    
    setSavedCharts(savedCharts.filter (newList => newList !== chartIn ))

    console.log("chart In", chartIn);
    console.log("new list", savedCharts);

  }

  
  return (
    // app wrapped in a router, starts by default with login page
    // will route users to dashboard once signed in or registered
    <Router>

      <div className="App">
        
        {/* <Switch> */}
      
          <Route exact path="/" component={LoginScreen} />

          <Route path ="/register" component={RegisterScreen} /> 

          <PrivateRoute path="/dashboard" component={Dashboard} />      

          <PrivateRoute path="/dashboard/profile" component={Profile} />  

          <Route path ="/dashboard/profile" render={props => {
          return <SavedCharts {...props} deleteSavedChart ={deleteSavedChart} savedCharts = {savedCharts} /> }} />

          <Route path ="/dashboard/maps" component={InteractiveMap} />         
          
          <Route path ="/dashboard/databycountry" render={props => {
          return <DataByCountry {...props} saveCharts = {saveCharts} />  }} /> 

          <Route path="/dashboard/databycountry/:name" render={props => { 
          return <CountryCard {...props} />
        }}
      />   

        {/*</Switch>*/}            
                  
        
      </div>

    </Router>
  );
}

export default App;
