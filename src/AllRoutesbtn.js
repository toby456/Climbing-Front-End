import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AllRoutes from './AllRoutes.js';

class AllRoutesbtn extends Component {

  functionAllRoutes() {

  ReactDOM.render(<AllRoutes/>,document.getElementById('table'));
}
  render() {
    return (
      <div>
      <button className="btn btn-info btn-lg"  onClick={this.functionAllRoutes}>See All Routes</button>
      </div>
    );
  }


}
  export default AllRoutesbtn;
