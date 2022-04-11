import * as React from 'react';
import {useState, useEffect} from "react";
import {getUserlogDetails} from "../api/components/services";



// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];


export default function DataTable() {

const [user, setUser] = useState([])
const result = user.data;


useEffect(() => {
  // fetchUserLogs() 
  fetchData()
  // console.log(result,"tableData")
  // console.log(rows,"rows");
}, []);

const fetchData = () => {
  fetch("https://stg-backend.catersmart.in/api/userlogs_details")
    .then(response => {
      return response.json()
    })
    .then(res => {
      setUser(res);
      console.log(user,"userslog");
      // console.log(user.data,"message");
      // console.log(result,"result")
 
      
    })
};


// const fetchUserLogs = () => {
//   getUserlogDetails()
//     .then(response => {
//       return response.json()
//     })
//     .then(res => {
//       setUser(res);
//       console.log(user,"users");
//       // console.log(user.data,"message");
//       // console.log(result,"result")

      
//     })
// };



  return (
    <div className='tablearea'>
           <table className="table table-striped" >
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Email Address</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Action</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
          
            <tbody>
            { result.map((result) => ( 
                <tr key={result._id} >
                <th scope="result">{result.name}</th>
                <td>{result.email}</td>
                <td> {result.phone}</td>
                <td>{result.action}</td>
                <td>{result.time}</td>
               
                </tr>
                ))}   
            </tbody>
          
    
            </table>



            {/* AIzaSyD7aYWqLiSHg_-bhg50HW5qIS6E1-ukTG0 */}

       
            {/* <table className="table table-striped" >
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Email Address</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Active</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
           
            <tbody> */}
          
            {/* {user && user.map((users) => ( 
                <tr   key={users.data._id} >
                <th >{users.data.name}</th>
                <td>{users.data.email}</td>
                <td> {users.data.phone}</td>
                <td>{users.data.action}</td>
                <td>20</td>
                </tr>
                      ))}    */}
            {/* </tbody>
          
    
            </table> */}
           
    </div>
  );
}
