import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{ display: "flex", height: "100%", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#1e2838">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            <img
              src="/images/logo.png" // 로고 이미지 경로
              alt="Freya Logo"
              style={{ width: "150px", height: "auto", marginRight: "0px" }} // 로고 스타일
            />
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="tachometer-alt">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/dataconnections" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plug">Data Connections</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/datasource" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="database">Data Source</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/exploratorydataanalysis" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-bar">Exploratory Data Analysis</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/autoinsight" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="lightbulb">Auto Insight</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter className="sidebar-footer">
          <CDBSidebarContent>
            <NavLink exact to="/settings" activeClassName="activeClicked" style={{ textDecoration: "none", color: "inherit" }}>
              <CDBSidebarMenuItem icon="cog">Settings</CDBSidebarMenuItem>
            </NavLink>
            <a href="https://github.com/dku-asgard" 
               target="_blank" 
               rel="noopener noreferrer" 
               style={{ textDecoration: "none", color: "inherit" }}>
               <CDBSidebarMenuItem icon="question-circle">Help</CDBSidebarMenuItem>
            </a>
            <NavLink exact to="/logout" activeClassName="activeClicked" style={{ textDecoration: "none", color: "inherit" }}>
              <CDBSidebarMenuItem icon="sign-out-alt">Log Out</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarContent>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
