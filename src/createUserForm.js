import React, { Component } from 'react';
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import ReactDOM from 'react-dom';
import {urlPort} from './Config.js'

class CreateUserForm extends Component {

  createUser = (event) => {
    event.preventDefault();
    var data={
      userName: document.getElementById('userName').value
    }
    axios.post('http://localhost:' + urlPort + '/Climbing/rest/User/createUser', data)
      .then((response) => {
        console.log(response.data);
        this.state.allroutes.push(response.data);
        window.location.reload();
      });
  }



render() {
  return (
    <div>
    <br/>
    User Name
    <br/>
    <input   type = "text" id = "userName" placeholder = "Enter User Name" />
    <br/>
    <br/>
    <button className="btn btn-primary" onClick={this.createUser}>Create User</button>
    </div>
  );
}
}

export default CreateUserForm;
