import React from 'react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 
import { Grid, Form, Input, TextArea, Button, Select, Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";



const SearchCard = (props) => {

 let {forestCoveragePercent} = props;  

    
  return (  

        <Grid.Column>
        <Card>
        <Card.Content>            
            <Card.Header> {props.country} </Card.Header>
            <Card.Description> {`${props.country}'s Forest Coverage Percentage in ${props.year}: ${JSON.stringify(forestCoveragePercent)}`} </Card.Description> 
            <Card.Description>  </Card.Description> 

        </Card.Content>
        </Card>
        </Grid.Column>          
  );

};

export default SearchCard;
