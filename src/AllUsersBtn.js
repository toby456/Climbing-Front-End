import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AllUsers from './AllUsers.js';

class AllUsersBtn extends Component {

  functionAllUsers() {
  ReactDOM.render(<AllUsers/>,document.getElementById('table'));
}
  render() {
    return (
      <div>
      <button className="btn btn-danger btn-lg" onClick={this.functionAllUsers}>See All Users </button>
      </div>
    );
  }


}
  export default AllUsersBtn;
