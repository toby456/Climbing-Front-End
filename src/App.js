import React, { Component } from 'react';
import AllRoutesbtn from './AllRoutesbtn.js'
import AddRoute from './AddRoute'



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the climbing app!</h1>
        <div>
        <AddRoute/>
        </div>
        <br/>
        <div>
        <AllRoutesbtn/>
      </div>
      <div id= 'routes'></div>
      </div>
    );
  }
}

export default App;
