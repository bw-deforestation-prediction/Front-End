import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "./Dashboard";
const FooterDiv = styled.div`
// border:1px solid red;
position: fixed;
width: 100%;
display: flex;
justify-content: center;
padding:0 10px;
align-items: center;
background-color: rgba(10,131,52,.8);

a {
  color:white;
  margin:0 10px; 
}
`;

const Links = styled.div `

`;

const DashboardFooter = () => {
  return (
    
      <FooterDiv>
          {/* <Links>
          <div>
          <NavLink to="#page-top"> Back To Top</NavLink>
          </div>
          <NavLink to="/RegisterScreen" className="nav-link">
            Register
          </NavLink>
          <NavLink to="/register" className="nav-link">
            Login
          </NavLink>
          </Links> */}
      </FooterDiv>
    
  );
};

export default DashboardFooter;
