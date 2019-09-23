import React from 'react';
//import treelogo from "../treelogo.png";

const DashboardHeader = () => {
  return (
    <div className="app-header">
      
      {/*<img src = {treelogo} width = "100px" height = "70px"/>*/}
      <h2>Deforestation Dashboard</h2>

      <nav>
                <a href = "#">MY PROFILE</a>
                <a href = "#">MAPS</a>
                <a href = "#">DATA BY COUNTRY</a>            
                <a href = "#">LOG OUT</a>            
                
       </nav>



    </div>
  );
}

export default DashboardHeader;