import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RouteForm from './RouteForm.js';


class AddRoute extends Component {

  functionAddRoutes() {
  ReactDOM.render(<RouteForm/>,document.getElementById('stuff'));
}
  render() {
    return (
      <div>
      <button className="btn btn-info btn-lg" onClick={this.functionAddRoutes}>Create Route</button>
      </div>
    );
  }


}
  export default AddRoute;
