import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class createUserBtn extends Component {

  functionCreateUser() {
  ReactDOM.render(<createUserForm/>,document.getElementById('users'));
}
  render() {
    return (
      <div>
      <button className="btn btn-primary" onClick={this.functionCreateUser}>Create User</button>
      </div>
    );
  }


}
  export default createUserBtn;
