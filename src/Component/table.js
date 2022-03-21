import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 100 },
//   { field: 'firstName', headerName: 'First name', width: 250 },
//   { field: 'lastName', headerName: 'Last name', width: 250 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 100,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 250,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  return (
    <div className='tablearea'>
           <table className="table table-striped" >
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Email Address</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Active</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
            { rows.map((rows) => ( 
                <tr   key={rows.id} >
                <th scope="row">{rows.lastName}</th>
                <td>{rows.firstName}</td>
                <td> {rows.lastName}</td>
                <td>Active</td>
                <td>{rows.age}</td>
               
                </tr>
                      ))}   
            </tbody>
    
            </table>
    </div>
  );
}
