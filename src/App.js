import React, { Component } from 'react';
import Table from './components/Table';
import Button from '@material-ui/core/Button';
import './App.css';
import _ from 'lodash';
import MaterialTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class App extends Component {
  constructor (props) {
    super(props)
    this.render=this.render.bind(this);
    this.state = {
      baseUrl: 'http://localhost:7070/v1/account'
    }
  }

  componentDidMount () {
    this.getHistoryData()
  }

  getHistoryData () {

    const { baseUrl } = this.state

    fetch(baseUrl)
      .then(response => response.json())
      .then(historicalData => this.setState({historicalData}))
      .catch(e => e)
  }

  render() {
    if (this.state.historicalData) {
      console.log(this.state.historicalData)
      return (
        <div className="app">

      <Button variant="contained" onClick={()=>{ this.getHistoryData() }} >Refresh</Button>
      <Table data={this.state.historicalData}></Table>
        </div>
      )
    }

    return null
  }
}

export default App;
