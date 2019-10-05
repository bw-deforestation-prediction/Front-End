import React, {useState, useEffect} from "react";
import axios from "axios";
import {countries} from "../data/data.js";
import CountryCard from "./CountryCard.js";
import { Link } from "react-router-dom";
import { CircleSpinner } from "react-spinners-kit";
import DashboardHeader from "./DashboardHeader.js";

function DataByCountry(props){

    const [countriesArray, setCountriesArray] = useState([]);  
    const [country, setCountry] = useState("Afghanistan"); 
     
    const [query, setQuery] = useState({search: ""});
    
    useEffect( () => {
        setCountriesArray(countries);

    }, []);   
    
    //spinner while page is loading
    if(countriesArray.length === 0){
        return (
         <div className="loading">
             
             <CircleSpinner size={50} color="#f3bb01" />   
                     
         </div>

         
        )
     }
       
    
    let countryArray = [];
    let countryNamesArray = [];
    
    const innerArray = (arrayIn) => {
        return Object.entries(arrayIn).filter((subArray) => subArray[0] !== "Country" && subArray[0] !== "Code");
    }

    const innerCountryArray = (arrayIn) => {
        return Object.entries(arrayIn).filter((subArray) => subArray[0] === "Country");
    }
    
    //each time a country is selected in the drop down list
    const countryHandler = (event) => {
        event.preventDefault();
        setCountry(event.target.value);        
    }   
       

    const clickHandler = (event) => {
       event.preventDefault();
      
       const queryValue = country;
       
       if (window.find(queryValue, true)) { 
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
           
                            
                    <select className = "select-country" onChange={countryHandler}>

                        {countriesArray.map((country, index) => {
                            countryArray = innerCountryArray(country);
                            return <option key={country.Country} country={country.Country}> {country.Country} </option>
                        

                        })}

                    </select>                       
                            

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

