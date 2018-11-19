import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UpdateForm from './UpdateForm'

class UpdateBtn extends Component {

  functionUpdateRoutes() {
  ReactDOM.render(<UpdateForm/>,document.getElementById('forms'));
}
  render() {
    return (
      <div>
      <button className="btn btn-dark" onClick={this.functionUpdateRoutes}>Update Routes</button>
      </div>
    );
  }


}
  export default UpdateBtn;
