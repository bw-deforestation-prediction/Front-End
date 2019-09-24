import React, {useState} from "react";
import axios from "axios";

import Maps from "./Maps.js";

function MapViewByYear(){

    const [year, setYear] = useState(1990);
    
    const years = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000];

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