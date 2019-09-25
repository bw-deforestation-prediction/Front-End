import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from './components/LoginScreen';
import PrivateRoute from './components/PrivateRoute';
import AppHeader from './components/AppHeader';
import RegisterScreen from './components/RegisterScreen';
import Dashboard from "./components/Dashboard.js";
import Navbar from "./components/Navbar";
import SavedMaps from "./components/SavedMaps.js";
import Maps from "./components/Maps.js";
import DataByCountry from "./components/DataByCountry.js";

function App() {

  
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
          <Route path ="/dashboard/savedmaps" component={SavedMaps} /> 
          <Route path ="/dashboard/maps" component={Maps} />
          <Route path ="/dashboard/databycountry" component={DataByCountry} />  

        {/*</Switch>*/}
                        
                  
        
      </div>
    </Router>
  );
}

export default App;
