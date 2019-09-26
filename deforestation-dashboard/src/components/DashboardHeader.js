import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import treeiconwhite from "../treeiconwhite.png";

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
@media screen and (max-width: 1000px) {
  height: 35px;
  padding: 0;
  
}
@media screen and (max-width: 650px) {
  flex-direction: column;
  height: 65px;
  padding-bottom: 5px;
}




  img {
    width: 8%;
  }

img {
  width: 8%;
  @media screen and (max-width: 1000px) {
    width: 5%;
  }
  @media screen and (max-width: 650px){
    width: 7%;
  }
  
}
img, b {
  filter: drop-shadow(0 0 1px rgba(0,0,0,.5));
}

b {
  @media screen and (max-width: 1000px){
    font-size: 1.5rem;
  }
  @media screen and (max-width: 650px) {
    font-size: 2rem;
  }
}
`;

const Links = styled.div `
width: 50%;
display: flex;
justify-content: space-around;
@media screen and (max-width: 1000px) {
  width: 60%;
}
@media screen and (max-width: 650px) {
  width: 100%;
}

a{
  color:white;
  font-size: 1.2rem;
  font-weight:bold;
  transition: color 0.2s linear;
  -webkit-transition: color 0.2s linear;
  -moz-transition: color 0.2s linear;
  filter: drop-shadow(0 0 2px rgba(0,0,0,.5));
  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }
  
}
a:hover {
  
  color: #c96b00;
}
img{
  width:15px;
  margin-right: 3px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
  @media screen and (max-width: 650px) {
    display: unset;
  }
}

`;

const HeaderText = styled.h1``;

const DashboardHeader = () => {
  return (
    <NavBar className="navigation" id="page-top">
      <div className="logo">
        <HeaderText>
          <img src={treeiconwhite} />
          <b>Deforestation Dashboard</b>
        </HeaderText>
      </div>
      <Links>
        <a className="nav-links" href="https://deforectationui.herokuapp.com/#">
          <img src={treeiconwhite} />
          Home
        </a>

        <a
          className="nav-links"
          href="https://deforectationui.herokuapp.com/about.html"
        >
          <img src={treeiconwhite} />
          About
        </a>

        <NavLink className="nav-links" to="/dashboard/profile">
          <img src={treeiconwhite} />
          My Profile
        </NavLink>

        <NavLink className="nav-links" to="/dashboard/databycountry">
          <img src={treeiconwhite} />
          Data By Country
        </NavLink>

        <NavLink to="/">
          <img src={treeiconwhite} />
          Log Out
        </NavLink>
      </Links>
    </NavBar>
  );
};

export default DashboardHeader;
