import React, { Component } from 'react';
import MaterialTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Table extends Component {
  constructor(props) {
    super(props)
    this.render=this.render.bind(this);

    this.state = {
      data: props.data
    }
    console.log(props.data)
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <MaterialTable aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Valor</TableCell>
              <TableCell align="right">Tipo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.data.map(row => (
              <TableRow key={row.Id}>
                <TableCell align="right">{row.Value}</TableCell>
                <TableCell align="right">{row.Operation == 1 ? "Debito" : "Credito"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MaterialTable>
      </TableContainer>
    );
  }
}
export default Table;