import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.div``;

const HeaderText = styled.h1``;

const DashboardHeader = () => {
  return (
    <NavBar className="navigation" id="page-top">
      <HeaderText>
        <b>Deforestaion Dashboard</b>
      </HeaderText>
      <nav>
        {/* ////////////// Need to add corect href for home and about pages ////////////  */}
        <NavLink className="nav-links" to="/">
          Home
        </NavLink>

        <NavLink className="nav-links" to="about the team page ">
          About
        </NavLink>

        <NavLink className="nav-links" to="">
          Maps By Country
        </NavLink>
      </nav>
      <div>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/">Login</NavLink>
      </div>
    </NavBar>
  );
};

export default DashboardHeader;
