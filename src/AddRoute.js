import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RouteForm from './RouteForm.js';


class AddRoute extends Component {

  functionAddRoutes() {
  ReactDOM.render(<RouteForm/>,document.getElementById('routes'));
}
  render() {
    return (
      <div>
      <button className="btn btn-primary" onClick={this.functionAddRoutes}>Create Route</button>
      </div>
    );
  }


}
  export default AddRoute;
