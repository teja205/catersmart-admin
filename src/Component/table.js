import * as React from "react";
import { useState, useEffect } from "react";
import { getUserlogDetails } from "../api/components/services";
export default function DataTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://stg-backend.catersmart.in/api/userlogs_details"
    );
    const data = await response.json();
    setUsers(data.data);
  };

  return (
    <div className="tablearea">
      <table className="table table-striped">
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
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="user">{user.name}</th>
              <td>{user.email}</td>
              <td> {user.phone}</td>
              <td>{user.action}</td>
              <td>{user.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}