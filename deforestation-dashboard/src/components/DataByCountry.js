import React, {useState, useEffect} from "react";
import axios from "axios";
import {countries} from "../data/data.js";
import CountryCard from "./CountryCard.js";
import { Link } from "react-router-dom";

function DataByCountry(props){

    const [countriesArray, setCountriesArray] = useState([]);

    useEffect( () => {
        setCountriesArray(countries);

    }, []);        
    
    console.log("countries array", countriesArray);

    //const [selectedCountry, setSelectedCountry] = useState(null);
    //const [year, setYear] = useState(1990); 
    
    
    const arrayYear = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007,
                       2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016];

    /*const countryNames = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Aruba",  
                            "Azerbaijan", "Burundi", "Belgium", "Benin", "Burkina Faso", "Bangladesh", "Bulgaria", "Bahrain",
                            "Bahamas", "Bosnia and Herzegovina", "Belarus", "Belize", "Bermuda", "Bolivia", "Brazil",
                            "Barbados", "Brunei Darussalam", "Bhutan", "Botswana", "Central African Republic", "Canada",
                            "Central Europe and the Baltics", "Switzerland", "Channel Islands", "Chile", "China", Cote d'Ivoire",
                            "Cameroon", "Congo, Dem. Rep.", "Congo, Rep.", "Colombia", "Comoros"
                            "Cabo Verde", "Costa Rica", "Caribbean small states", "Cuba", "Curacao", "Cayman Islands"
    "Cyprus"
    "Czech Republic"
    "Germany"
    "Djibouti"
    "Dominica"
    "Denmark"
    "Dominican Republic"
    "Algeria"
    "East Asia & Pacific (excluding high income)"
    "Early-demographic dividend"
    "East Asia & Pacific"
    "Europe & Central Asia (excluding high income)"
    "Europe & Central Asia"
    "Ecuador"
    "Egypt, Arab Rep."
    "Euro area"
    "Eritrea"
    "Spain"
    "Estonia"
    "Ethiopia"
    "European Union"
    "Fragile and conflict affected situations"
    "Finland"
    "Fiji"
    "France"
    "Faroe Islands"
    "Micronesia, Fed. Sts."
    "Gabon"
    "United Kingdom"
    "Georgia"
    "Ghana"
    "Gibraltar"
    "Guinea"
    "Gambia, The"
    "Guinea-Bissau"
    "Equatorial Guinea"
    "Greece"
    "Grenada"
    "Greenland"
    "Guatemala"
    "Guam"
    "Guyana"
    "High income"
    "Hong Kong SAR, China"
    "Honduras"
    "Heavily indebted poor countries (HIPC)"
    "Croatia"
    "Haiti"
    "Hungary"
    "IBRD only"
    "IDA & IBRD total"
    "IDA total"
    "IDA blend"
    "Indonesia"
    "IDA only"
    "Isle of Man"
    "India"
    "Not classified"
    "Ireland"
    "Iran, Islamic Rep."
    "Iraq"
    "Iceland"
    "Israel"
    "Italy"
    "Jamaica"
    "Jordan"
    "Japan"
    118: "Kazakhstan"
    119: "Kenya"
    120: "Kyrgyz Republic"
    121: "Cambodia"
    122: "Kiribati"
    123: "St. Kitts and Nevis"
    124: "Korea, Rep."
    125: "Kuwait"
    126: "Latin America & Caribbean (excluding high income)"
    127: "Lao PDR"
    128: "Lebanon"
    129: "Liberia"
    130: "Libya"
    131: "St. Lucia"
    132: "Latin America & Caribbean"
    133: "Least developed countries: UN classification"
    134: "Low income"
    135: "Liechtenstein"
    136: "Sri Lanka"
    137: "Lower middle income"
    138: "Low & middle income"
    139: "Lesotho"
    140: "Late-demographic dividend"
    141: "Lithuania"
    142: "Luxembourg"
    143: "Latvia"
    144: "Macao SAR, China"
    145: "St. Martin (French part)"
    146: "Morocco"
    147: "Monaco"
    148: "Moldova"
    149: "Madagascar"
    150: "Maldives"
    151: "Middle East & North Africa"
    152: "Mexico"
    153: "Marshall Islands"
    154: "Middle income"
    155: "North Macedonia"
    156: "Mali"
    157: "Malta"
    158: "Myanmar"
    159: "Middle East & North Africa (excluding high income)"
    160: "Montenegro"
    161: "Mongolia"
    162: "Northern Mariana Islands"
    163: "Mozambique"
    164: "Mauritania"
    165: "Mauritius"
    166: "Malawi"
    167: "Malaysia"
    168: "North America"
    169: "Namibia"
    170: "New Caledonia"
    171: "Niger"
    172: "Nigeria"
    173: "Nicaragua"
    174: "Netherlands"
    175: "Norway"
    176: "Nepal"
    177: "Nauru"
    178: "New Zealand"
    179: "OECD members"
    180: "Oman"
    181: "Other small states"
    182: "Pakistan"
    183: "Panama"
    184: "Peru"
    185: "Philippines"
    186: "Palau"
    187: "Papua New Guinea"
    188: "Poland"
    189: "Pre-demographic dividend"
    190: "Puerto Rico"
    191: "Korea, Dem. People’s Rep."
    192: "Portugal"
    193: "Paraguay"
    194: "West Bank and Gaza"
    195: "Pacific island small states"
    196: "Post-demographic dividend"
    197: "French Polynesia"
    198: "Qatar"
    199: "Romania"
    200: "Russian Federation"
    201: "Rwanda"
    202: "South Asia"
    203: "Saudi Arabia"
    204: "Sudan"
    205: "Senegal"
    206: "Singapore"
    207: "Solomon Islands"
    208: "Sierra Leone"
    209: "El Salvador"
    210: "San Marino"
    211: "Somalia"
    212: "Serbia"
    213: "Sub-Saharan Africa (excluding high income)"
    214: "South Sudan"
    215: "Sub-Saharan Africa"
    216: "Small states"
    217: "Sao Tome and Principe"
    218: "Suriname"
    219: "Slovak Republic"
    220: "Slovenia"
    221: "Sweden"
    222: "Eswatini"
    223: "Sint Maarten (Dutch part)"
    224: "Seychelles"
    225: "Syrian Arab Republic"
    226: "Turks and Caicos Islands"
    227: "Chad"
    228: "East Asia & Pacific (IDA & IBRD countries)"
    229: "Europe & Central Asia (IDA & IBRD countries)"
    230: "Togo"
    231: "Thailand"
    232: "Tajikistan"
    233: "Turkmenistan"
    234: "Latin America & the Caribbean (IDA & IBRD countries)"
    235: "Timor-Leste"
    236: "Middle East & North Africa (IDA & IBRD countries)"
    237: "Tonga"
    238: "South Asia (IDA & IBRD)"
    239: "Sub-Saharan Africa (IDA & IBRD countries)"
    240: "Trinidad and Tobago"
    241: "Tunisia"
    242: "Turkey"
    243: "Tuvalu"
    244: "Tanzania"
    245: "Uganda"
    246: "Ukraine"
    247: "Upper middle income"
    248: "Uruguay"
    249: "United States"
    250: "Uzbekistan"
    251: "St. Vincent and the Grenadines"
    252: "Venezuela, RB"
    253: "British Virgin Islands"
    254: "Virgin Islands (U.S.)"
    255: "Vietnam"
    256: "Vanuatu"
    257: "World"
    258: "Samoa"
    259: "Kosovo"
    260: "Yemen, Rep."
    261: "South Africa"
    262: "Zambia"
    263: "Zimbabwe"]; */

    
    const innerArray = (arrayIn) => {
        return Object.entries(arrayIn).filter((subArray) => subArray[0] !== "Country" && subArray[0] !== "Code");
    }

    return (

        <div /*className = "country-view-div"*/>                       
            
            {countriesArray.map((country, index) => {
                const yearArray = innerArray(country);   
                console.log("country array", country);           

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