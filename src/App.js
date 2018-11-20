import React, { Component } from 'react';
import AllRoutesbtn from './AllRoutesbtn.js'
import AddRoute from './AddRoute.js'
import UpdateBtn from './UpdateBtn.js'
import CreateUserBtn from './CreateUserBtn.js'
import AllUsersBtn from './AllUsersBtn'





class App extends Component {


  render() {
    return (
      <div className="App">
        <h1>Welcome to the climbing app!</h1>
        <div className="btn-group-lg btn-group-vertical">
        <AddRoute/>

        <AllRoutesbtn/>

      <UpdateBtn/>

      <CreateUserBtn/>

      <AllUsersBtn/>
      </div>
      <div id = 'forms'></div>
      <div id= 'stuff'></div>
      </div>
    );
  }
}

export default App;
