import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <CDBSidebar textColor='#fff' backgroundColor='#333'>
      <CDBSidebarHeader prefix={<i class='fas fa-hat-cowboy'></i>}>
        <a
          href='/'
          className='text-decoration-none'
          style={{ color: "inherit" }}
        >
          HackMate
        </a>
      </CDBSidebarHeader>

      <CDBSidebarContent className='sidebar-content'>
        <CDBSidebarMenu>
          <NavLink exact to='/tutorials' activeClassName='activeClicked'>
            <CDBSidebarMenuItem icon='columns'>Tutorials</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to='/apis' activeClassName='activeClicked'>
            <CDBSidebarMenuItem icon='table'>APIs</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to='/frameworks' activeClassName='activeClicked'>
            <CDBSidebarMenuItem icon='user'>Frameworks</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to='/analytics' activeClassName='activeClicked'>
            <CDBSidebarMenuItem icon='chart-line'>Analytics</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to='/colors' activeClassName='activeClicked'>
            <CDBSidebarMenuItem icon='exclamation-circle'>
              Colors
            </CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to='/starter-kits' activeClassName='activeClicked'>
            <CDBSidebarMenuItem icon='columns'>Starter Kits</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to='/assets' activeClassName='activeClicked'>
            <CDBSidebarMenuItem icon='table'>Assets</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to='/winning-projects' activeClassName='activeClicked'>
            <CDBSidebarMenuItem icon='user'>
              Winning Projects
            </CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to='/hosting' activeClassName='activeClicked'>
            <CDBSidebarMenuItem icon='exclamation-circle'>
              Hosting
            </CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to='/prototyping' activeClassName='activeClicked'>
            <CDBSidebarMenuItem icon='chart-line'>
              Prototyping
            </CDBSidebarMenuItem>
          </NavLink>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "20px 5px",
          }}
        >
          Your Hackathon Buddy!
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};

export default Sidebar;
