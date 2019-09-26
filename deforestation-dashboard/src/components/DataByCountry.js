import React, {useState, useEffect} from "react";
import axios from "axios";
import {countries} from "../data/data.js";
import CountryCard from "./CountryCard.js";
import { Link } from "react-router-dom";
import DashboardHeader from "./DashboardHeader.js";

function DataByCountry(props){

    const [countriesArray, setCountriesArray] = useState([]);    
    const [query, setQuery] = useState({search: ""});

    useEffect( () => {
        setCountriesArray(countries);

    }, []);        
       
    
    let countryArray = [];
    let countryNamesArray = [];
    
    const innerArray = (arrayIn) => {
        return Object.entries(arrayIn).filter((subArray) => subArray[0] !== "Country" && subArray[0] !== "Code");
    }

    const innerCountryArray = (arrayIn) => {
        return Object.entries(arrayIn).filter((subArray) => subArray[0] === "Country");
    }

    //capitalize the first letter of the search string
    const capitalize = (str) => {

        return str.charAt(0).toUpperCase() + str.slice(1);
        
    }
    
    const changeHandler = (event) => {
        event.preventDefault();
        setQuery({...query, [event.target.name]: event.target.value});
    }
    

    const clickHandler = (event) => {
       event.preventDefault();
       const queryValue = query.search;
       //capitalize(queryValue);
       if (window.find(capitalize(queryValue), true)) { 
        document.execCommand("hiliteColor", false, "YellowGreen"); 
        
      }

      else {
          alert(`${query.search} was not found. Please try again.`)
      }

    }

    function findText(text) {
         window.find(text);
    }

    return (        

        <div className = "country-view-div">    
       
        <div className = "search-form-div">

            <form className = "search-form">
                <input type = "text"
                onChange = {changeHandler}
                placeholder = "Country Search..." 
                value={query.search}
                name = "search" 
                />
                <button className = "search-form-button" onClick = {clickHandler} type="submit"> Search </button>
            </form>  

        </div>                   
                

                        
            
            {countriesArray.map((country, index) => {
                const yearArray = innerArray(country);   
                countryArray = innerCountryArray(country);
               
                console.log("inner names array", countryArray);           

                return (                                                 

                    <CountryCard
                        saveCharts = {props.saveCharts}
                        code = {country.Code}
                        name = {country.Country}
                        yearArray = {yearArray}
                        key = {index} 
                        id = {index}  />           
                    
                )

            })}       

        
        </div>

    );

}

export default DataByCountry;

