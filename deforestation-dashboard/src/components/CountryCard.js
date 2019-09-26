import React, { useContext } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";


function CountryCard(props) {   
  
  const useStyles = makeStyles(theme => ({
    root: {    
      '&:nth-of-type(odd)': {
        backgroundColor: "grey",
      }, 
      width: "40%",
      margin: "0 auto",     
      overflowY: "auto",
      overflowX: "auto"
    },    
    head: {
      backgroundColor: "dodgerblue"
    }   
    
  }));

  const createData = name => {
    return { name };
  };

  const rows = [createData("Forest Cover")];

  const classes = useStyles();  

    return (
    
    

    <Card /*className = "material-card"*/>
      <CardContent>
        <Paper className={classes.root}>
          <Table  className={classes.table}>
            <TableHead className={classes.head}>
              <TableRow>
                <TableCell
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold"                    
                  }}
                >
                 
                   {props.name} 

                </TableCell>
                {props.yearArray.map(year => {
                  return (
                    <TableCell align="right" style={{ fontSize: "1rem" }} key={year[0]}>
                      {year[0]}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ fontSize: "1.5rem", minWidth: "220px" }}
                  >
                    {/***************SAVE BUTTON********************/}
                    
                    <button onClick = { () => props.saveCharts( props["name"], props["id"] ) }> Save </button>

                  </TableCell>
                  {props.yearArray.map(year => {
                    return (
                      <TableCell align="right" style={{ fontSize: "1rem" }}>
                        {Math.round(year[1])} km<sup>2</sup>
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        
      </CardContent>
    </Card>

    
  );
}

export default CountryCard;