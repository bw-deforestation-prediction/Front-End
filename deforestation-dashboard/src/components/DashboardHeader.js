import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route } from "react-router-dom";

const DashboardHeader = () => {   

  return (
    <div className="app-header">
      
     
      <h2>Deforestation Dashboard</h2>

      <nav>
                <NavLink to="/dashboard/savedmaps" > AREAS OF INTEREST </NavLink>
                <NavLink to="/dashboard/maps" > MAPS BY YEAR </NavLink>
                <NavLink to="/dashboard/databycountry" > FOREST COVER BY COUNTRY </NavLink>           
                <NavLink to="/" > LOG OUT </NavLink>            
                
       </nav>
      

    </div>
  );
}

export default DashboardHeader;