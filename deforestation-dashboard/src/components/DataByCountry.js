import React, {useState, useEffect} from "react";
import axios from "axios";
import {countries} from "../data/data.js";
import CountryCard from "./CountryCard.js";
import { Link } from "react-router-dom";

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

    
    
    const changeHandler = (event) => {
        event.preventDefault();
        setQuery({...query, [event.target.name]: event.target.value});
    }

    //var sel = window.getSelection();

    const clickHandler = (event) => {
       event.preventDefault();
       if (window.find(query.search, true)) { 
        document.execCommand("hiliteColor", false, "YellowGreen"); 
        //sel.collapseToEnd(); 
      }

    }

    function findText(text) {
         window.find(text);
    }

    return (

        <div className = "country-view-div">      

         <div className="select-country">

            <form >
                <input type = "text"
                onChange = {changeHandler}
                placeholder = "Country Search..." 
                value={query.search}
                name = "search" 
                />
                <button onClick = {clickHandler} type="submit"> Search </button>
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