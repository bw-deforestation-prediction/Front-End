import React from 'react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 
import { Grid, Form, Input, TextArea, Button, Select, Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import treeiconwhite from "../treeiconwhite.png";



const SearchCard = (props) => {

 let {forestCoveragePercent} = props;  

    
  return (  

        <Grid.Column className = "forest-card-grid">
        <Card className = "forest-card">
        <Card.Content>            
            <Card.Header className = "card-header"><img src={treeiconwhite} /> {props.country} </Card.Header>
            <Card.Description className = "card-desc"> {`${JSON.stringify(forestCoveragePercent)}% Forest Coverage in ${props.year}`} </Card.Description> 
            <Card.Description>  </Card.Description> 
        </Card.Content>
        </Card>
        </Grid.Column>          
  );

};

export default SearchCard;
