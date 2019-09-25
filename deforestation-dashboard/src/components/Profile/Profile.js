import React, { useEffect, useState } from "react";
import axios from "axios";
import MapsCard from './MapsCard';

export default function Profile (props) {

    const [user, setUser] = useState([]);
    const [activeID] = useState(localStorage.userID);

    useEffect(() => {

    // const id = localStorage.getItem('userId');
    // const idtwo = id.toString();
    // console.log('id port', id);

    // var number = 3;

    axios
        .get(`https://deforestation.herokuapp.com/api/users/`)


        .then(response => {
            console.log('right here', response.data);
            setUser(response.data);
        })

        .catch(error => {
            console.log('User data was not returned', error);
        });

    }, []);

    return (
        <section  className ='trial'>
            {console.log('map', user)}
            {user ? user.map (item => (
                <ProfileInfo key={item.id} item={item} />
            )):
            null}

        </section>
    )
}

    
function ProfileInfo ({item}) {
    console.log('item obj', item);

    const {id, first_name, last_name, email} = item;
    
    return (
            <div className="character-list " key={id}>
                <h3 className="personalInfo">Name: {first_name}</h3>
                <h3 className="personalInfo">Last Name: {last_name}</h3>
                <h3 className="personalInfo">Email: {email}</h3>
            </div>
            );
    }

