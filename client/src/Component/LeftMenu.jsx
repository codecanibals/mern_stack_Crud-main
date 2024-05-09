import React from "react";
import "./LeftMenu.css";
import { Routes, Route, Link } from "react-router-dom";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import UserTable from "../Table/UserTable";
import TempTable from "./tempTable";
import Deleteusertable from "./Deleteusertable";
import PostsTable from "./Posts/PostsTable";
function LeftMenu() {
  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar className="app" style={{ backgroundColor: "grey" }}>
          <Menu>
            <MenuItem
              className="menu1"
              component={<Link to="/UserTable" className="link" />}
            ></MenuItem>

            {/* <MenuItem
           component={<Link to="/UserTable" className="link" />}
          > GetUsers </MenuItem> */}

            <SubMenu label="Employees">
              <MenuItem component={<Link to="/UserTable" className="link" />}>
                Get Employees Data
              </MenuItem>
              <MenuItem component={<Link to="/DeletedUsersTable" className="link" />}>
                Deleted Employees Data
              </MenuItem>
              {/* <MenuItem >Bubble Chart</MenuItem> */}
            </SubMenu>

            <SubMenu label="Posts">
              <MenuItem component={<Link to="/EmployeesPosts" className="link" />}>
                Get Posts
              </MenuItem>
              {/* <MenuItem component={<Link to="/DeletedUsersTable" className="link" />}>
                DeleteUsers
              </MenuItem> */}
              {/* <MenuItem >Bubble Chart</MenuItem> */}
            </SubMenu>

          </Menu>
        </Sidebar>
        <section>
          <Routes>
            {/* <Route path="/" element={<TempTable />} /> */}

            <Route path="/" element={<></>} />
            <Route path="/UserTable" element={<UserTable />} />
            <Route path="/DeletedUsersTable" element={<Deleteusertable/>} />
            <Route path="/EmployeesPosts" element={<PostsTable/>} />
          </Routes>
        </section>
      </div>
    </>
  );
}

export default LeftMenu;
