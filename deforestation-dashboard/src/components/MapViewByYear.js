import React, {useState, useEffect} from "react";
import axios from "axios";

import Maps from "./Maps.js";

function MapViewByYear(){

    const [year, setYear] = useState(2019);
    
    const years = [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];

    const changeHandler = (event) => {

        setYear(event.target.value);
    }

    const clickHandler = (event) => {

        setYear(event.target.value);
    }

    return (

        <div className = "map-view-div">

            <div className = "search-form-div">
                        
                <form className = "search-form">  
                
                    <select className = "select-year" onChange={changeHandler}>

                        {years.map(year => {
                            return <option key={year} year={year}>{year}</option>
                        })}

                    </select>

                    <button className = "search-form-button" onClick = {clickHandler} type="submit"> Predictions </button>

                </form>

            </div>

            <Maps year={year}/>

        </div>

    );

}

export default MapViewByYear;

