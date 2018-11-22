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
      <div className="btn-group-lg btn-toolbar btn-toolbars">
      <CreateUserBtn/>
      <AllUsersBtn/>
      <AddRoute/>
      <AllRoutesbtn/>
      <UpdateBtn/>
      <ClearScreenBtn/>
    </div>
    <div className= "centered" id = 'stuff'>
    
    <h1 style= {{color: "red"}} >Welcome to betaBox</h1>
    </div>
    </div>
    );
  }
}

export default App;
