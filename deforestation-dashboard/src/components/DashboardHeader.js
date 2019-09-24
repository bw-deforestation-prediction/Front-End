import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.div``;

const HeaderText = styled.h1``;

const DashboardHeader = () => {
  return (
    <NavBar className="navigation">
      <HeaderText>
        <b>Deforestaion Dashboard</b>
      </HeaderText>
      <nav>
        <NavLink>Home</NavLink>

        <NavLink>About</NavLink>

        <NavLink>Maps By Country</NavLink>
      </nav>
    </NavBar>
  );
};

export default DashboardHeader;
