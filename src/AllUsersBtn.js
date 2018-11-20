import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AllUsers from './AllUsers.js';

class AllUsersBtn extends Component {

  functionAllUsers() {
  ReactDOM.render(<AllUsers/>,document.getElementById('stuff'));
}
  render() {
    return (
      <div>
      <button className="btn btn-success btn-lg btn-block" onClick={this.functionAllUsers}>See All Users</button>
      </div>
    );
  }


}
  export default AllUsersBtn;
