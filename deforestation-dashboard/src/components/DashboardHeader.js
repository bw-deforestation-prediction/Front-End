import React from 'react';
import { NavLink } from 'react-router-dom';
//import treelogo from "../treelogo.png";

const DashboardHeader = () => {

 

  return (
    <div className="app-header">
      
      {/*<img src = {treelogo} width = "100px" height = "70px"/>*/}
      <h2>Deforestation Dashboard</h2>

      <nav>
                <NavLink to="" > MY PROFILE </NavLink>
                <NavLink to="" > MAPS </NavLink>
                <NavLink to="" > DATA BY COUNTRY </NavLink>           
                <NavLink to="/" > LOG OUT </NavLink>            
                
       </nav>



    </div>
  );
}

export default DashboardHeader;