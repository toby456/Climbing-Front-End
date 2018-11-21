import React, { Component } from 'react';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';
import axios from 'axios'
import ReactDOM from 'react-dom';
import {urlPort} from './Config.js'




class AllRoutes extends Component {

  constructor(props) {
    super(props);
    this.state = {
    allroutes: this.props.array
    }
  }

getAllRoutes = () => {
  axios.get('http://localhost:' + urlPort + '/Climbing/rest/Route/getAllRoutes').then(response =>{
    this.setState({
    allroutes: response.data
  });
});
}


createDeleteButton =(cell,row) => {
      return <button id={row.routeID} className="btn btn-danger" onClick={() => this.deleteRoute(row.routeID)}>Delete Route</button>;
    }

deleteRoute = (event) => {
  axios.delete('http://localhost:' + urlPort + '/Climbing/rest/Route/deleteRoute/' + event).then((response) => {
    // this.forceUpdate();
    // console.log(event);
    // this.state.allroutes =   this.state.allroutes.filter(a => a.routeID != event.id);
    this.setState({
    allroutes: this.state.allroutes.filter(a => a.routeID != event.id)
  });

  });
    }


  componentDidMount() {
    this.getAllRoutes();
  }

  render() {
      return (
        <div>
          <BootstrapTable className= "table-dark"
          data={this.state.allroutes}
          striped
          search
          >
            <TableHeaderColumn  style= {{color: "black"}} tdStyle={{ whiteSpace: 'unset' }}  Column width={'5%'} dataField='routeID' isKey>ID</TableHeaderColumn>
            <TableHeaderColumn  style= {{color: "white"}} tdStyle={{ whiteSpace: 'unset' }}  Column width={'7%'} dataField='climbStatus'>Climb Status</TableHeaderColumn>
            <TableHeaderColumn  style= {{color: "white"}} tdStyle={{ whiteSpace: 'unset' }}  Column width={'5%'} dataField='difficulty'>Grade</TableHeaderColumn>
            <TableHeaderColumn  style= {{color: "white"}} tdStyle={{ whiteSpace: 'unset' }}  Column width={'9%'} dataField='routeName'>Route Name</TableHeaderColumn>
            <TableHeaderColumn  style= {{color: "white"}} tdStyle={{ whiteSpace: 'unset' }}  Column width={'9%'} dataField='location'>Location</TableHeaderColumn>
            <TableHeaderColumn  style= {{color: "white"}} tdStyle={{ whiteSpace: 'unset' }}  Column width={'7%'} dataField='typeOfClimb'>Type of Climb</TableHeaderColumn>
            <TableHeaderColumn  style= {{color: "white"}} searchable={ false } tdStyle={{ whiteSpace: 'unset'}} Column width={'25%'} dataField='climbDescription'>Climb Description</TableHeaderColumn>
            <TableHeaderColumn  style= {{color: "white"}} searchable={ false } tdStyle={{ whiteSpace: 'unset' }} Column width={'25%'} dataField='crux'>Crux</TableHeaderColumn>
            <TableHeaderColumn dataField='button' Column width={'8%'} dataFormat={this.createDeleteButton}>Delete</TableHeaderColumn>
          </BootstrapTable>
          <br/>
          <br/>
        </div>
      );
    }
  }


export default AllRoutes;
