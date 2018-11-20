import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CreateUserForm from './CreateUserForm'



class CreateUserBtn extends Component {

  functionCreateUser() {
  ReactDOM.render(<CreateUserForm/>,document.getElementById('forms'));
}
  render() {
    return (
      <div>
      <button className="btn btn-primary btn-lg" onClick={this.functionCreateUser}>Create User</button>
      </div>
    );
  }


}
  export default CreateUserBtn;
