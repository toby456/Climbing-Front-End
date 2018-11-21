import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class ClearScreenBtn extends Component {

  functionClearScreen() {
  window.location.reload();
}
  render() {
    return (
      <div>
      <button className="btn btn-dark btn-lg" onClick={this.functionClearScreen}>Clear Screen</button>
      </div>
    );
  }


}
  export default ClearScreenBtn;
