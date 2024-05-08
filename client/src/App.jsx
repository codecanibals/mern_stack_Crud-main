import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Corrected import path for Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Corrected import path for Bootstrap JS
import './App.css';
import UserTable from './Table/UserTable';
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import Deleteusertable from './Component/Deleteusertable';
import LeftMenu from './Component/LeftMenu';
import { Routes, Route, Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
export default function App() {

// const fetchData = async () => {
//     try {
//       const user = await axios.get("http://localhost:8080/api/getUsers");
//       const response = await user.data;
//       setData(response.finalUsers);
//       console.log(data)
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     fetchData();
//   },[]);
 
  return (
    <>
    
    {/* <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app">
        <Menu>
          <MenuItem className="menu1" 
            component={<Link to="/"  state = {{data:data}} className="link" />}
          >
            <h2>Users Data</h2>
          </MenuItem>
          <MenuItem
          
          ><button onClick={()=> fetchData() }> GetUsers</button> </MenuItem>
          <MenuItem> GetDeletedUsers </MenuItem>
          <MenuItem> Charts </MenuItem>
          <MenuItem> Wallets </MenuItem>
          <MenuItem> Transactions </MenuItem>
          <MenuItem> Settings </MenuItem>
          <MenuItem> Logout </MenuItem>
        </Menu>
      </Sidebar>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/" element={<UserTable />} />
        </Routes>
      </section>
    </div> */}
      {/* <UserTable></UserTable> */}
      <Toaster></Toaster>
      <LeftMenu ></LeftMenu>
    </>
  );
}
