import React, { Component } from 'react';
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import ReactDOM from 'react-dom';

class RouteForm extends Component {

  createRoute = () => {

axios.post('http://localhost:8082/Climbing/rest/Route/createRoute', {
  climbStatus: document.getElementById('climbStatus').value,
  difficulty: document.getElementById('difficulty').value,
  routeName: document.getElementById('routeName').value,
  location: document.getElementById('location').value,
  typeOfClimb: document.getElementById('typeOfClimb').value,
  climbDescription: document.getElementById('climbDescription').value,
  crux: document.getElementById('crux').value
})

  }
render() {
  return (
    <div>
    Climb Status
    <br/>
    <input   type = "text" id = "climbStatus" placeholder = "For Example: Completed or In Progress" />
    <br/>
    Climb Grade
    <br/>
    <input type = "text" id = "difficulty" placeholder = "For Example: V5 or 7a+" />
    <br/>
    Route Name
    <br/>
    <input type = "text" id = "routeName" placeholder = "Enter the name of the route" />
    <br/>
    Location of Route
    <br/>
    <input type = "text" id = "location" placeholder = "Enter where the route is located" />
    <br/>
    Type of Climb
    <br/>
    <input type = "text" id = "typeOfClimb" placeholder = "For Example: Boulder or Trad" />
    <br/>
    Climb Description
    <br/>
    <input type = "text" id = "climbDescription" placeholder = "Enter any noteworthy moves or betas" />
    <br/>
    Crux
    <br/>
    <input type = "text" id = "crux" placeholder = "Enter any crux moves on the climb" />
    <br/>

    Please enter your unique ID number, if you do not have one please click <a href="www.google.com">here</a> to create an account
    <br/>
    <input type ="number" id ="idOfUserAddingRoute" placeholder = "ID number" />
    <br/>
    <button className="btn tbn-primary" onClick={this.createRoute}>Add Route</button>
    </div>
  );
}
}

export default RouteForm;
