import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import avataricon from '../../avataricon.png'
import { NavLink } from "react-router-dom";

//styled component - main page container
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;   
    align-items: center;
      

`;

const Card = styled.div `

// border: 1px solid red;
width: 100%;
padding: 10px;
margin:40px 0;
background-color: #0A8334;
border-radius: 5px;
box-shadow: 0 0 5px #333;
margin-bottom: 50px;

h3{
    margin-top: 10px;
    color: white;
    filter: drop-shadow(0 0 1px rgba(0,0,0,.5));
}
h2, span, img {
    color: #c96b00;
    filter: drop-shadow(0 0 1px rgba(0,0,0,.5));
}

.info-container {
    display: flex;
    justify-content: center;
    width: 100%;

    .personalInfo{
        text-align:left;
    }
    img {
        margin-right: 15px;
    }
}

`;



export default function Profile (props) {

    const [user, setUser] = useState([]);
    // const [activeID] = useState(localStorage.userID);

    useEffect(() => {

    const id = localStorage.getItem('userId');

    axios
        .get(`https://deforestation.herokuapp.com/api/users/${id}`)


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
        <Container>
            <Card>
            <div className="character-list " key={id}>
                <h2>My Profile</h2>
                <div className='info-container'>
                    <img src={avataricon} />
                <div>
                <h3 className="personalInfo">Name: <span>{first_name}</span></h3>
                <h3 className="personalInfo">Last Name: <span>{last_name}</span></h3>
                <h3 className="personalInfo">Email: <span>{email}</span></h3>
                </div></div>
            </div>

            <div className='mapRequest'>
                <h3 className='mapRequest'>Save Countries of Interest to see them below.</h3>
            </div>
            </Card>

            
        </Container>

        );
    }

