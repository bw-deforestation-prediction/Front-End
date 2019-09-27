import React, {useState, useEffect} from "react";
import axios from "axios";
import CountryCard from "./CountryCard.js";
import { Link } from "react-router-dom";
import DashboardHeader from "./DashboardHeader.js";
import SearchCard from "./SearchCard.js";

import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 
import styled from 'styled-components';
import { Grid, Form, Input, TextArea, Button, Select, Modal } from "semantic-ui-react";



const FriendsDiv = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;    
    align-content: flex-start;
    margin-top: 25px;
    width: 100%;
    height: auto;       
     

`;

function Search(props){

    const [unfilteredCountriesArray, setUnfilteredCountriesArray] = useState({}); 
    const [country, setCountry] = useState("Aruba");
    let countriesArray = []; 

    const [unfilteredYearsArray, setUnfilteredYearsArray] = useState({});
    const [year, setYear] = useState("1990");
    let yearsArray = [];   
    
    const [results, setResults] = useState(2.33);
    let resultsArray = [];
    let resultsArray1 = [];
    
    let resultsString = "";

    let test;
       

    useEffect( () => {
        axios.get("https://ftable-server.herokuapp.com/countries")
        .then ( res => {
            console.log("heroku app countries", res.data.cname);
            setUnfilteredCountriesArray(res.data.cname);
        })

    }, [])   

          

    for (const prop in unfilteredCountriesArray) {
        countriesArray.push(unfilteredCountriesArray[prop]);
    } 
        
    

    console.log("filtered countries array", countriesArray); 

    
    const countryHandler = (event) => {
        event.preventDefault();
        setCountry(event.target.value);
        
    }

    useEffect( () => {
        axios.get("https://ftable-server.herokuapp.com/years")
        .then ( res => {
            console.log("heroku app years", res.data.years);
            setUnfilteredYearsArray(res.data.years);
        })

    }, [])   

    for (const prop in unfilteredYearsArray) {
        yearsArray.push(unfilteredYearsArray[prop]);
    }

    console.log("filtered years array", yearsArray); 

    const yearHandler = (event) => {
        event.preventDefault();
        setYear(event.target.value);
        
    }

    let forestCoverage=[];

    const clickHandler = (event) => {
        event.preventDefault();

        axios.get(`https://ftable-server.herokuapp.com/reception?country=${country}&year=${year}`)
        .then(res => {
            console.log("country and year query", res.data);
           //forestCoverage.push(res.data);
           test2(res.data);
           console.log("forest coverrage", forestCoverage);
           
            
        })  
        .catch(err => {
            console.log(err.response);
        })          

        console.log("filtered search results 1", resultsArray);     
       
    } 
    
    console.log("forest coverrage outside", forestCoverage);

    function test2(obj){
        console.log("x", obj)  
        
        Object.keys(obj).map(number => {
            console.log("number", number)

            console.log("obj number", obj[number])
            setResults(obj[number]);

           
        })

    }

    console.log("filtered search results 2", results);  

    return (        

        <div className = "search-view-div">    
       
            <div className = "search-form-div">

                <form className = "search-form">                    
                        
                        <select className = "select-country" onChange={countryHandler}>

                            {countriesArray.map(country => {
                                return <option key={country} country={country}> {country} </option>
                            })}

                        </select>                                     
                        
                        <select className = "select-year" onChange={yearHandler}>

                            {yearsArray.map(year => {
                                return <option key={year} year={year}> {year} </option>
                            })}

                        </select>                    

                    <button className = "search-form-button" onClick = {clickHandler} type="submit"> Search </button>

                </form>

            </div>           
                   
                    

                    <FriendsDiv>                      
                                                                         

                        <SearchCard                           
                            year = {year}
                            country = {country}
                            forestCoveragePercent = {results}
                            
                        />                                    
                        

                    </FriendsDiv>   

            
        
        </div>

    );

}

export default Search;

