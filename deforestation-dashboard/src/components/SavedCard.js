import React from 'react';

import styled from 'styled-components';
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 
import { Grid, Form, Input, TextArea, Button, Select, Card, Icon } from "semantic-ui-react";

const SavedCard = (props) => {

    console.log("saved card props", props);

    const deleteHandler = (event) => {
        props.deleteSavedChart(props.chart);
        //window.location.reload();//refreshes the window 
    }

  
  return (    

        <Grid.Column padded key={props.id}>
        <Card>
        <Card.Content>
            <Card.Header> <Icon className = "edit-icon" name="edit outline" /> {props.chart} <Icon onClick = {deleteHandler} className = "delete-icon" name="delete" /></Card.Header>
            
        </Card.Content>
        </Card>
        </Grid.Column>   
  );

};

export default SavedCard;
