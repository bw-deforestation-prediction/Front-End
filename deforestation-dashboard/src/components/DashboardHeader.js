import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import treeiconwhite from '../treeiconwhite.png';


const NavBar = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding:0 10px;
align-items: center;
background-color: #0a8334;
height: 45px;
color: #c96b00;
box-shadow: 0 0 3px #333;


img {
  width: 8%;
  
}
img, b {
  filter: drop-shadow(0 0 1px rgba(0,0,0,.5));
}
`;

const Links = styled.div `
width: 50%;
display: flex;
justify-content: space-around;

a{
  color:white;
  font-size: 1.2rem;
  font-weight:bold;
  transition: color 0.2s linear;
  -webkit-transition: color 0.2s linear;
  -moz-transition: color 0.2s linear;
  filter: drop-shadow(0 0 2px rgba(0,0,0,.5));
}
a:hover {
  
  color: #c96b00;
}
img{
  width:15px;
  margin-right: 3px;
}
`;

const HeaderText = styled.h1``;

const DashboardHeader = () => {


  return (
    <NavBar className="navigation" id="page-top">
      <div className='logo'> 
   
      <HeaderText>

      <img src={treeiconwhite} />
        <b>Deforestation Dashboard</b>
      </HeaderText>
      </div>
      <Links>

            
        {/* ////////////// Need to add correct href for home and about pages ////////////  */}
        <NavLink className="nav-links" to="/">
        <img src={treeiconwhite} />
          Home
        </NavLink>

        <NavLink className="nav-links" to="about the team page ">
        <img src={treeiconwhite} />
          About
        </NavLink>

        <NavLink className="nav-links" to="/dashboard/profile">  
        <img src={treeiconwhite} />      
          My Profile
        </NavLink>

        <NavLink className="nav-links" to="/dashboard/databycountry">
        <img src={treeiconwhite} />
          Country Data
        </NavLink>    

        <NavLink className="nav-links" to="/dashboard/search">
        <img src={treeiconwhite} />
         Yearly Data
        </NavLink>         
        
        <NavLink to="/"><img src={treeiconwhite} />Log Out</NavLink>

      </Links>

    </NavBar>
  );
}

export default DashboardHeader;