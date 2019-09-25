import React, {useState, useEffect} from "react";
import axios from "axios";

import Maps from "./Maps.js";

function MapViewByYear(){

    const [countries, setCountries] = useState({});
    const [year, setYear] = useState(1990);

    useEffect( () => {
        axios.get("https://ftable-server.herokuapp.com/countries")
        .then ( res => {
            console.log("heroku app countries", res.data.cname);
            setCountries(res.data.cname);
        })
    }, [])

    
    
    const years = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007,
                   2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016];

    const changeHandler = (event) => {

        setYear(event.target.value);
    }

    return (

        <div className = "map-view-div">
                       
            <div className="select-year">
               
                <select className = "year-select" onChange={changeHandler}>

                    {years.map(year => {
                        return <option key={year} year={year}>{year}</option>
                    })}

                </select>

            </div>

            <Maps year={year}/>

        </div>

    );

}

export default MapViewByYear;

