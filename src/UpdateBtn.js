import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UpdateForm from './UpdateForm'

class UpdateBtn extends Component {

  functionUpdateRoutes() {
  ReactDOM.render(<UpdateForm/>,document.getElementById('stuff'));
}
  render() {
    return (
      <div>
      <button className="btn btn-info btn-lg" onClick={this.functionUpdateRoutes}>Update Routes</button>
      </div>
    );
  }


}
  export default UpdateBtn;
