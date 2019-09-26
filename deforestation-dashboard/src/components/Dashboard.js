import React, { useState, useEffect } from "react";
import { Button, Modal } from "semantic-ui-react";
import "semantic-ui-css/semantic.css";
import "semantic-ui-css/semantic.min.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Route } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import LoginScreen from "./LoginScreen";
import Profile from './Profile/Profile';

export default function Dashboard(props) {
  const [user, setUser] = useState({});

  
  return (
    /*main container for the dashboard elements */
    <div className="dashboard-container">

      <DashboardHeader />
     
      {/*<Profile />   */}
     
      {/* <DashboardFooter /> */}
    
    </div>
  );
}
