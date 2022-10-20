import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import ReactDOM from 'react-dom';

function User() {
  const [users,setUsers] = useState([]);
  const [isLoading, setLoading] = useState (false)
  useEffect(async () => {
    fetchData()
     },[])

     let fetchData = async() => {
      try{
        setLoading(true)
     const users =  await axios.get("https://634ea79af34e1ed82692802b.mockapi.io/users");
     setUsers(users.data)
     setLoading(false)
      }
      catch(error){
          alert("Error");
      }
    }

 

  let deleteUser = () => {
    const result=window.confirm("Are you sure do you want to delete?")
    if(result){
      alert("Deleted")
    }
  }

  return (
    
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Users</h1>
        <Link
          to={"/user_create"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create User
        </Link>
      </div>
      {
        isLoading ? <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div> : <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>E-mail</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Phone Number</th>
                  <th>DOB</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.Name}</td>
                      <td>{user.Email}</td>
                      <td>{user.Country}</td>
                      <td>{user.State}</td>
                      <td>{user.City}</td>
                      <td>{user.Phone}</td>
                      <td>{user.DOB}</td>
                      <td>{user.Gender}</td>
                      <td>
                        <Link to={`/users/${user.id}`}className="btn btn-warning mr-2">Profile</Link>
                        <Link to={`/edit/${user.id}`}className="btn btn-primary mt-2">Edit Profile</Link>
                        <button onClick={() => deleteUser()} className="btn btn-danger mt-2">Delete</button>
                      </td>
                    </tr>
                    
                  );
                })}
              </tbody>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>E-mail</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Phone Number</th>
                  <th>DOB</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
            </table>
          </div>
        </div>
      </div>
      }
    </div>
  );
}

export default User;
