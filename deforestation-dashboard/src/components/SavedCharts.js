import React from "react";
import { Link } from "react-router-dom";
import SavedCard from "./SavedCard.js";
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 
import styled from 'styled-components';
import { Grid, Form, Input, TextArea, Button, Select, Modal } from "semantic-ui-react";
import { useContext } from "react";
import { SavedChartsContext } from "../contexts/SavedChartsContext.js";

//styled component - main page container
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;      

`;

//styled component - div containing the main heading and the cards
const AppContainer = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);    
    background-size: 100% 100%;
    background-repeat: no-repeat;   
    

`;

const FriendsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;    
    align-content: flex-start;    
    width: 100%;
    height: 500px;   
    

`;

function SavedCharts() {

    

    const { savedCharts, deleteSavedChart } = useContext(SavedChartsContext);

    return (

    <Container>

        <AppContainer>

            <FriendsDiv>

                {savedCharts.map((chart, index) => {

                return <SavedCard id = {index} key = {index} chart={chart} deleteSavedChart = {deleteSavedChart}/>

                })}

            </FriendsDiv>

        </AppContainer>
     

     </Container>
       
      

    );
  }

  export default SavedCharts;
  