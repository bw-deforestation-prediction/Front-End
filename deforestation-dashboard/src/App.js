import React, {useState} from 'react';
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


function App() {

  
  const [savedCharts, setSavedCharts] = useState( [] );

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

        {/*<AppHeader />*/}
        {/*<Navbar/>*/}
        
        {/* <Switch> */}
       
          <Route exact path="/" component={LoginScreen} />

          <Route path ="/register" component={RegisterScreen} />     

          <PrivateRoute path="/dashboard" component={Dashboard} />  

          <Route path ="/dashboard/savedmaps" render={props => {
          return <SavedCharts {...props} deleteSavedChart ={deleteSavedChart} savedCharts = {savedCharts} /> }} />

          <Route path ="/dashboard/maps" component={MapViewByYear} />         
          
          <Route path ="/dashboard/databycountry" render={props => {
          return <DataByCountry {...props} saveCharts = {saveCharts} />  }} />    

        {/*</Switch>*/}            
                  
        
      </div>

    </Router>
  );
}

export default App;
