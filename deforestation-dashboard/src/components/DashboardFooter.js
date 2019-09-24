import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "./Dashboard";
const FooterDiv = styled.div``;
const BackToTop = styled.div``;

const DashboardFooter = () => {
  return (
    <footer>
      <FooterDiv>
        <BackToTop>
          <NavLink to="#page-top"> Back To Top</NavLink>
        </BackToTop>
        <div>
          <NavLink to="/RegisterScreen" className="nav-link">
            Register
          </NavLink>
          <NavLink to="/register" className="nav-link">
            Login
          </NavLink>
        </div>
      </FooterDiv>
    </footer>
  );
};

export default DashboardFooter;
