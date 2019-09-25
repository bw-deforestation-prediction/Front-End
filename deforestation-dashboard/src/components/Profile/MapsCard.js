import React from "react";

const MapsCard = props => {
    return (
    <div className="map-list" key={props.id}>

        <h2>Country: {props.country}</h2>
        <p>{props.description}</p>
        <p>Data Year: {props.year}</p>
    </div>
    );
};
export default MapsCard;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProfileCard from './ProfileCard';

// export default function Profile() {

//     const [user, setUser] = useState([]);
//     const [query, setQuery] = useState('');

//     useEffect(() => {
//     axios
//         .get(`https://deforestation.herokuapp.com/api/users`)

//         .then(response => {
//         const data = response.data;
//         console.log("app users", data);
//         setUser(user);
//         })

//         .catch(error => {
//             console.log('User data was not returned', error);
//         });
//     }, [user]);

//     const handleInputChange = event => {
//     setQuery(event.target.value);
//     };

//     return (
//     <div className="users">
//         <form className="search">
//         <input
//             type="text"
//             onChange={handleInputChange}
//             value={query}
//             name="name"
//             tabIndex="0"
//             className="prompt search-name"
//             placeholder="search by name"
//             autoComplete="off"
//         />
//         </form> 
            
//         <div className="userPersonalData">
//         {user.map(data => {
//             return ( 

//             <div className="character-list " key={data.id}>
//                 <h3 className="personalInfo">Name: {data.first_name}</h3>
//                 <h3 className="personalInfo">Last Name: {data.last_name}</h3>
//                 <h3 className="personalInfo">Email: {data.email}</h3>
//             </div>
//             );
//         })} 
//         </div>
//     </div>
//     );
// }

