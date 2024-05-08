import React from 'react'
import "./LeftMenu.css"
import { Routes, Route, Link } from "react-router-dom";

import { Sidebar, Menu, MenuItem ,SubMenu } from "react-pro-sidebar";
import UserTable from '../Table/UserTable';
import TempTable from './tempTable';
function LeftMenu() {
  return (
    <>
   <div style={{ display: "flex", height: "100vh"}}>
      <Sidebar className="app" style={{backgroundColor:"grey"}}>
        <Menu>
          <MenuItem className="menu1" component={<Link to="/UserTable" className="link" />}></MenuItem>
           
          {/* <MenuItem
           component={<Link to="/UserTable" className="link" />}
          > GetUsers </MenuItem> */}

            <SubMenu label="Users" >
                <MenuItem
           component={<Link to="/UserTable" className="link" />}
          > GetUsers </MenuItem>
            {/* <MenuItem >Bubble Chart</MenuItem> */}
          </SubMenu>
        </Menu>
      </Sidebar>
      <section>
        <Routes>
            {/* <Route path="/" element={<TempTable />} /> */}

          <Route path="/" element={<></>} />
          <Route path="/UserTable" element={<UserTable />} />
        </Routes>
      </section>
    </div>

    </>
  )
}

export default LeftMenu
