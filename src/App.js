import React, { Component } from 'react';
import AllRoutes from './AllRoutes'
import RouteForm from './RouteForm'



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the climbing app!</h1>
        <RouteForm/>
        <p className="Table-header">All Routes</p>
        <AllRoutes/>
      </div>
    );
  }
}

export default App;
