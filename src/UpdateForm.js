import React, { Component } from 'react';
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import ReactDOM from 'react-dom';
import AllRoutes from './AllRoutes'

class UpdateForm extends Component {





  updateRoute = (event) => {
    event.preventDefault();
    var data={
      routeID: document.getElementById('routeID').value,
      climbStatus: document.getElementById('climbStatus').value,
      difficulty: document.getElementById('difficulty').value,
      routeName: document.getElementById('routeName').value,
      location: document.getElementById('location').value,
      typeOfClimb: document.getElementById('typeOfClimb').value,
      climbDescription: document.getElementById('climbDescription').value,
      crux: document.getElementById('crux').value,
      userID: document.getElementById('idOfUserAddingRoute').value
    }
    axios.put('http://localhost:8082/Climbing/rest/Route/updateRoute', data)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      });
    }



render() {
  return (
    <div>
    <br/>
    ID number of route to update
    <br/>
    <input type ="number" id ="routeID" placeholder = "Route ID to Update" />
    <br/>
    Climb Status
    <br/>
    <input   type = "text" id = "climbStatus" placeholder = "E.g. In Progress" />
    <br/>
    Climb Grade
    <br/>
    <input type = "text" id = "difficulty" placeholder = "For Example: V5 or 7a+" />
    <br/>
    Route Name
    <br/>
    <input type = "text" id = "routeName" placeholder = "Enter route name" />
    <br/>
    Location of Route
    <br/>
    <input type = "text" id = "location" placeholder = "Where is the route?" />
    <br/>
    Type of Climb
    <br/>
    <input type = "text" id = "typeOfClimb" placeholder = "E.g. Trad" />
    <br/>
    Climb Description
    <br/>
    <input type = "text" id = "climbDescription" placeholder = "E.g. Moves or Betas" />
    <br/>
    Crux
    <br/>
    <input type = "text" id = "crux" placeholder = "Describe crux moves" />
    <br/>
    User ID
    <br/>
    <input type ="number" id ="idOfUserAddingRoute" placeholder = "User ID number" />
    <br/>
    <br/>
    <button className="btn btn-primary" onClick={this.updateRoute}>Update Route</button>
    </div>
  );
}
}

export default UpdateForm;
