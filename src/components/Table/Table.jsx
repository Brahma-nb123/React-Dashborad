import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'

function createData(
  name, trackingId, date, status
) {
  return { name, trackingId, date, status  };
}

const rows = [
  createData('Brahmananda', 112159, 6.0,'Approve' ,24, 4.0),
  createData('Susant', 231247, 9.0,'Pending',37, 4.3),
  createData('Surya', 264322, 16.0,'Delever',24, 6.0),
  createData('Himanshu', 323405, 3.7,'Approve', 67, 4.3),
  createData('Lisha', 351236, 16.0,'Approve', 49, 3.9),
];


const makeStyles=(status)=>{
  if(status==='Approve'){
    return {
      background : 'rgb(145 245 159 / 47%)',
      color: 'green'
    }
  }
  else if(status==='Pending'){
    return {
      background : '#fffada8f',
      color:'red'
    }
  }
  else{
    return {
      background : '#fffada8f',
      color:'black'
    }
  }
}



export default function BasicTable() {
  return (
    <div className='Table'>
        <h3>Recent Order</h3>
   
    <TableContainer component={Paper}
      style={{ boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.35)'}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell align="left">TrackingId</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">..</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
            <span className='status' style={makeStyles(row.status)}>{row.status}</span>

              </TableCell>
              <TableCell align="left" className='Details'>Detall</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
