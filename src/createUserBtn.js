import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CreateUserForm from './createUserForm'



class CreateUserBtn extends Component {

  functionCreateUser() {
  ReactDOM.render(<CreateUserForm/>,document.getElementById('stuff'));
}
  render() {
    return (
      <div>
      <button className="btn btn-danger btn-lg" onClick={this.functionCreateUser}>Create User</button>
      </div>
    );
  }


}
  export default CreateUserBtn;
