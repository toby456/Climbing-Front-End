import React, { Component } from 'react';
import axios from 'axios';

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
    axios.put('http://35.234.147.72:8080/Climbing/rest/Route/updateRoute', data)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      });
    }



render() {
  return (
    <div>
    <form className = "formUser" style = {{backgroundColor: "White"}}>
    <label style= {{color: "black"}}>
    ID number of route to update
    <br/>
    <input className = "inputBox" type ="number" id ="routeID" placeholder = "Route ID to Update" />
    </label>
    <label style= {{color: "black"}}>
    Climb Status
    <br/>
    <input className = "inputBox" type = "text" id = "climbStatus" placeholder = "E.g. In Progress" />
    </label>
    <label style= {{color: "black"}}>
    Climb Grade
    <br/>
    <input className = "inputBox" type = "text" id = "difficulty" placeholder = "For Example: V5 or 7a+" />
    </label>
    <label style= {{color: "black"}}>
    Route Name
    <br/>
    <input className = "inputBox" type = "text" id = "routeName" placeholder = "Enter route name" />
    </label>
    <label style= {{color: "black"}}>
    Location of Route
    <br/>
    <input className = "inputBox" type = "text" id = "location" placeholder = "Where is the route?" />
    </label>
    <label style= {{color: "black"}}>
    Type of Climb
    <br/>
    <input className = "inputBox" type = "text" id = "typeOfClimb" placeholder = "E.g. Trad" />
    </label>
    <label style= {{color: "black"}}>
    Climb Description
    <br/>
    <input className = "inputBox" type = "text" id = "climbDescription" placeholder = "E.g. Moves or Betas" />
    </label>
    <label style= {{color: "black"}}>
    Crux
    <br/>
    <input className = "inputBox" type = "text" id = "crux" placeholder = "Describe crux moves" />
    </label>
    <label style= {{color: "black"}}>
    User ID
    <br/>
    <input className = "inputBox" type ="number" id ="idOfUserAddingRoute" placeholder = "User ID number" />
    </label>
    <br/>
    <button className="btn btn-primary" onClick={this.updateRoute}>Update Route</button>
    </form>
    </div>
  );
}
}

export default UpdateForm;
