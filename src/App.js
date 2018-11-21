import React, { Component } from 'react';
import AllRoutesbtn from './AllRoutesbtn.js'
import AddRoute from './AddRoute.js'
import UpdateBtn from './UpdateBtn.js'
import CreateUserBtn from './createUserBtn.js'
import AllUsersBtn from './AllUsersBtn'
import ClearScreenBtn from './ClearScreenBtn'
import './App.css'








class App extends Component {


  render() {
    return (
      <div className="App bgimg">
        <h1 style= {{color: "red"}} >Welcome to betaBox</h1>
        <div className="btn-group-lg btn-group-vertical">
        <CreateUserBtn/>
        <AllUsersBtn/>
        <AddRoute/>
        <AllRoutesbtn/>
        <UpdateBtn/>
      </div>
      <br/>
      <br/>
      <br/>
      <ClearScreenBtn/>
      <br/>
      <div id = 'forms'></div>
      <div id= 'stuff'></div>
      </div>
    );
  }
}

export default App;
