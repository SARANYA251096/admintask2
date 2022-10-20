import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/sb-admin-2.css";
import Dashboard from "./Dashboard";
import Usercreate from "./Usercreate";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./User";
import "./css/fontawesome-free/css/all.min.css";
import Viewuser from "./Viewuser";
import Edituser from "./Edituser";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flexflex-column">
          <div id="content">
            <Topbar />
            <Routes>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/users" element={<User/>}/> 
              <Route path="/user_create" element={<Usercreate/>}/> 
              <Route path="/users/:id" element={<Viewuser/>}/> 
              <Route path="/edit/:id" element={<Edituser/>}/> 


            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
