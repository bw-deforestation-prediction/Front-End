import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 
//import "../styling/App.css";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import AddExpenseForm from "./AddExpenseForm";
import ExpenseDetails from "./ExpenseDetails.js";
import DashboardHeader from "./DashboardHeader.js";

export default function Dashboard (props) {

    const [user, setUser] = useState({});

    //keeps track of queries
    const [expenses, setExpenses] = useState([]);

    //calculates how much your friends owe you
    let grandTotal = 0;
    let totalPeople = 0;
    let owedTotal = 0;
    let count = 0;

    if (expenses.length > 0) {

        expenses.forEach( expense => {

            grandTotal += expense.split_sum;
            totalPeople += expense.split_people_count;
            count = count + 1;       

        });

        owedTotal = ((grandTotal/totalPeople)*(totalPeople-count)).toFixed(2); 

    }//end if

    useEffect(() => {
        // get user details and set them to state "user"
        axiosWithAuth().get(`https://build-split-the-bill.herokuapp.com/api/users/${localStorage.getItem('userId')}`)
            .then(res => {
                console.log(res);
                setUser(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        //then get all the queries for the user and set to the state queries
        // then get all bills for the user and set them to state "expenses"
        axiosWithAuth().get(`https://build-split-the-bill.herokuapp.com/api/users/${localStorage.getItem('userId')}/bills`)
            .then(res => {
                console.log(res);
                setExpenses(res.data);
                console.log("list of bills for the user when the app loads", res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    // console.log(user);

    
    
    //add a query to the queries array when the save button is clicked
    //adds an expense to the expenses array when the calculate button on the add expense form is clicked
    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    }

    //THE SERVER RETURNS THE ENTIRE LIST OF BILLS WHEN THE APP LOADS
    //OR THE SCREEN IS REFRESHED SO WHEN CALCULATE IS CLICKED ON THE EDIT EXPENSE FORM YOU COULD REFRESH THE SCREEN
    //BY NOT USING event.preventDefault (INSEAD OF USING AN editExpense FUNCTION AND THE UPDATED BILL WILL BE DISPLAYED. AFTER A BILL IS EDITED THE SERVER
    //RETURNS A SUCCESS MESSAGE AND NOT ACTUAL DATA

    const editExpense = (editedExpense) => {
       
        //create an array called expensesCopy and spread in the contents of the expenses array
        const expensesCopy = [...expenses];
        
        //find the index in the expensesCopy array where the id of the bill at that index equals to the id of the 
        //bill passed down from the editExpenseForm (submitHandler function) 
        const expenseIndex = expensesCopy.findIndex(expense => expense.id === editedExpense.id);

        //when a match is found, replace the expense at the matched index with the bill passed down (editedExpense)
        //from the EditExpenseForm
        expensesCopy[expenseIndex] = editedExpense;
        
        //after making the switch, replace the expenses array with the expensesCopy array 
        setExpenses (expensesCopy);
    }   
    
    
    //const initialExpense = expenses.find(expense => expense.id.toString() === props.match.params.id);


    // fire on logout button, clears token and pushes user back to login page
    const logout = (e) => {
        e.preventDefault();
        localStorage.clear();
        props.history.push('/');
    }


    return (

        /*main container for the dashboard elements */
        <div className = "dashboard-container">

            <DashboardHeader />

            {/* logo and log out button 
            <div className = "navbar">                    

                                        
    
            </div>*/}

            {/* dashboard*/}
            <div className = "dashboard-div">

                {/* dashboard*/}
                <div className = "dashboard-header-div">

                <Modal trigger = {

                <Button>Add Expense</Button>               
                } closeIcon>

                <Modal.Header>Add Expense</Modal.Header>

                <AddExpenseForm addExpense = {addExpense}/>                                     

                </Modal>

                {/*{  
                    expenses.length > 0 ?
                    <Modal trigger = {

                        <Button>Add Expense</Button>               
                        } closeIcon>

                        <Modal.Header>Add Expense</Modal.Header>

                        <AddExpenseForm addExpense = {addExpense}/>                                     
           
                    </Modal>
                    :
                    null 
                    }*/}

                        <h1>Welcome {user.firstname} </h1>

                    <Button onClick={logout}> Log Out </Button>                    
        
                   
        
                </div>
                
                {/* DISPLAYS THE OWED AND OWES RUNNING TOTALS */}
                <div className="totals-summary-div">
                    

                    <div className = "total-div">                    
                        Your Friends Owe You
                        <p className = "owedTotal"> ${owedTotal} </p> {/* update the totals here */}

                    </div>
                </div>
                
                {/* LIST OF BILLS HISTORY */}
                <div className = "bills-list-div">  
                   
                    {
                        expenses.length > 0 ? 
                        <ExpenseDetails setExpenses={setExpenses} expenses = {expenses} addExpense = {addExpense} editExpense = {editExpense}/> 
                        : 
                        <Modal trigger = {

                            <Button>Add An Expense To Start Splitting</Button>               
                            } closeIcon>
    
                            <Modal.Header>Add an Expense</Modal.Header>
    
                            <AddExpenseForm addExpense = {addExpense} />                                     
               
                        </Modal>
                    }                
                       
                        
                                   
                    
                </div>  {/*end bills-list-div */}

            </div> {/*end dashboard div */}
        
        </div> /*end container div */
    
    );//end return

}//end function

/************************************TO DISPLAY RECEIVED NOTIFICATIONS***************************/
/*
const [receivedNotifications, setReceivedNotifications] = useState([]);

//put this inside the useEffect()
 axiosWithAuth().get(`https://build-split-the-bill.herokuapp.com/api/notifications`)
            .then(res => {
              console.log("you have notifications", res.data.notifications);
              setReceivedNotifications(res.data.notifications);
            })
            .catch(err => {
              console.log(err);
            })

//put this in the <div className = "navbar">
 <div className = "notifications-received-display">

            <div className = "notification-title">

            <h3>Outstanding Bills</h3>

            </div>

            <div className = "notification-alerts">

            {receivedNotifications.map( (notification, index) => 

            <p className = "alerts">{`${notification.email} `}</p>               

                
            )}

</div>




*/