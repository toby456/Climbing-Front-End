import React, { Component } from 'react';
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import ReactDOM from 'react-dom';

class CreateUserForm extends Component {

  createUser = (event) => {
    event.preventDefault();
    var data={
      userName: document.getElementById('username').value
    }
    axios.post('http://localhost:8082/Climbing/rest/User/createUser', data)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      });
  }



render() {
  return (
    <div>
    <br/>
    User Name
    <br/>
    <input   type = "text" id = "userName" placeholder = "Enter desired User Name" />
    <br/>
    <button className="btn btn-primary" onClick={this.createUser}>Create User</button>
    </div>
  );
}
}

export default CreateUserForm;
