import React, { Component } from 'react';
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import ReactDOM from 'react-dom';
import {urlPort} from './Config.js'
import './App.css'

class CreateUserForm extends Component {

  createUser = (event) => {
    event.preventDefault();
    var data={
      userName: document.getElementById('userName').value
    }
    axios.post('http://localhost:' + urlPort + '/Climbing/rest/User/createUser', data)
      .then((response) => {
        window.location.reload();
      });
  }



render() {
  return (
    <div>
    <br/>
    <br/>
    <form className = "formUser" style = {{backgroundColor: "white"}}>
    <label style= {{color: "black"}}>
    User Name:
    <br/>
    <input className = "inputBox"  type = "text" id = "userName" placeholder = "Enter User Name" />
    </label>
    <button className="btn btn-primary" onClick={this.createUser}>Create User</button>

    </form>
    <br/>
    <br/>
    </div>
  );
}
}

export default CreateUserForm;
