import React, { Component } from 'react';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';
import axios from 'axios'
import ReactDOM from 'react-dom';



class AllUsers extends Component {

  constructor(props) {
    super(props);
    this.state = {
    allUsers: this.props.array
    }
  }

getAllUsers = () => {
  axios.get('http://localhost:8082/Climbing/rest/User/getAllUsers').then(response =>{
    this.setState({
    allroutes: response.data
  });
});
}

  showRoutes = (cell, row) => {
  return cell.routes;
}


  componentDidMount() {
    this.getAllUsers();
  }

  render() {
      return (
        <div>
          <BootstrapTable data={this.state.allroutes}
          striped
          search>
            <TableHeaderColumn  tdStyle={{ whiteSpace: 'unset' }}  Column width={'5%'} dataField='userID' isKey>ID</TableHeaderColumn>
            <TableHeaderColumn  tdStyle={{ whiteSpace: 'unset' }}  Column width={'7%'} dataField='userName'>User Name</TableHeaderColumn>
            <TableHeaderColumn  tdStyle={{ whiteSpace: 'unset' }}  Column width={'88%'} dataField='routes' dataFormat={this.showRoutes}>Routes</TableHeaderColumn>
          </BootstrapTable>
        </div>
      );
    }
  }


export default AllUsers;
