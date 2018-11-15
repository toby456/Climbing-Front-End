import React, { Component } from 'react';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';
import axios from 'axios'



class AllRoutes extends Component {

  constructor(props) {
    super(props);
    this.state = {
    allroutes: this.props.array
    }
  }

getAllRoutes = () => {
  axios.get('http://localhost:8082/Climbing/rest/Route/getAllRoutes').then(response =>{
    this.setState({
    allroutes: response.data
  });
});
}



  componentDidMount() {
    this.getAllRoutes();
  }

  render() {
      return (
        <div>
          <BootstrapTable data={this.state.allroutes}
          striped
          expandableRow={ this.isExpandableRow }
          expandComponent={ this.expandComponent }
          search>

            <TableHeaderColumn Column width={'5%'} dataField='ID' isKey>ID</TableHeaderColumn>
            <TableHeaderColumn Column width={'8%'}dataField='climbStatus'>Climb Status</TableHeaderColumn>
            <TableHeaderColumn Column width={'5%'}dataField='difficulty'>Grade</TableHeaderColumn>
            <TableHeaderColumn Column width={'9%'}dataField='routeName'>Route Name</TableHeaderColumn>
            <TableHeaderColumn Column width={'14%'}dataField='location'>Location</TableHeaderColumn>
            <TableHeaderColumn Column width={'7%'}dataField='typeOfClimb'>Type of Climb</TableHeaderColumn>
            <TableHeaderColumn Column width={'26%'}dataField='climbDescription'>Climb Description</TableHeaderColumn>
            <TableHeaderColumn Column width={'26%'}dataField='crux'>Crux</TableHeaderColumn>
          </BootstrapTable>
        </div>
      );
    }
  }


export default AllRoutes;
