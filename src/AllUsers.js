import React, { Component } from 'react';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';
import axios from 'axios'
import ReactDOM from 'react-dom';



class BSTable extends React.Component {

  createDeleteButton =(cell,row) => {
        return <button id={row.routeID} className="btn btn-danger" onClick={() => this.deleteRoute(row.routeID)}>Delete Route</button>;
      }

  deleteRoute = (event) => {
    axios.delete('http://35.234.147.72:8080/Climbing/rest/Route/deleteRoute/' + event).then((response) => {
    window.location.reload();
        });

        }


  render() {
    return (



      <BootstrapTable
      data={ this.props.data }
      options={ { noDataText: 'There are no routes for this user' } }
      >
      <TableHeaderColumn  style= {{color: "black"}} tdStyle={{ whiteSpace: 'unset' }}  Column width={'5%'} dataField='routeID' isKey={ true }>ID</TableHeaderColumn>
      <TableHeaderColumn  tdStyle={{ whiteSpace: 'unset' }}  Column width={'7%'} dataField='climbStatus'>Climb Status</TableHeaderColumn>
      <TableHeaderColumn  tdStyle={{ whiteSpace: 'unset' }}  Column width={'5%'} dataField='difficulty'>Grade</TableHeaderColumn>
      <TableHeaderColumn  tdStyle={{ whiteSpace: 'unset' }}  Column width={'9%'} dataField='routeName'>Route Name</TableHeaderColumn>
      <TableHeaderColumn  tdStyle={{ whiteSpace: 'unset' }}  Column width={'9%'} dataField='location'>Location</TableHeaderColumn>
      <TableHeaderColumn  tdStyle={{ whiteSpace: 'unset' }}  Column width={'7%'} dataField='typeOfClimb'>Type of Climb</TableHeaderColumn>
      <TableHeaderColumn  tdStyle={{ whiteSpace: 'unset'}} Column width={'25%'} dataField='climbDescription'>Climb Description</TableHeaderColumn>
      <TableHeaderColumn  tdStyle={{ whiteSpace: 'unset' }} Column width={'25%'} dataField='crux'>Crux</TableHeaderColumn>
      <TableHeaderColumn dataField='button' Column width={'8%'} dataFormat={this.createDeleteButton}>Delete</TableHeaderColumn>
      </BootstrapTable>

    )
  }

}


export default class AllUsers extends Component {


  constructor(props) {
    super(props);
    this.state = {
    allUsers: this.props.array
    }
  }

getAllUsers = () => {
  axios.get('http://35.234.147.72:8080/Climbing/rest/User/getAllUsers').then(response =>{
    this.setState({
    allUsers: response.data
  });
});
}

isExpandableRow(row) {
  return true
}

expandComponent(row) {
  return (
    <BSTable data={ row.routes } />
  )
}

  componentDidMount() {
    this.getAllUsers();
  }

  render() {
      return (
        <div>
        <div className= "header2">
        <h2>To see a users routes click on their table row</h2>
        </div>
        <br/>
          <BootstrapTable className="table"
          data={this.state.allUsers}
          striped
          search
          expandableRow={ this.isExpandableRow }
          expandComponent={ this.expandComponent}>
            <TableHeaderColumn  tdStyle={{ whiteSpace: 'unset' }}  Column width={'5%'} dataField='userID' isKey={ true }>User ID</TableHeaderColumn>
            <TableHeaderColumn  tdStyle={{ whiteSpace: 'unset' }}  Column width={'12%'} dataField='userName'>User Name</TableHeaderColumn>
          </BootstrapTable>
          <br/>
          <br/>
        </div>
      );
    }
  }
