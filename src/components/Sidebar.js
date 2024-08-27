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
    <div
      style={{ display: "flex", height: "100%", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="white" backgroundColor="#1e2838">
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
              <CDBSidebarMenuItem icon="plug">
                Data Connections
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/data-source" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="database">
                Data Source
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/data-migration" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exchange-alt">
                Data Migration
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter className="sidebar-footer">
          <CDBSidebarContent>
            <a
              href="https://github.com/dku-asgard"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <CDBSidebarMenuItem icon="question-circle">
                Help
              </CDBSidebarMenuItem>
            </a>
          </CDBSidebarContent>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;

/*
<NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="tachometer-alt">Dashboard</CDBSidebarMenuItem>
            </NavLink>
<NavLink exact to="/exploratorydataanalysis" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-bar">Exploratory Data Analysis</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/autoinsight" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="lightbulb">Auto Insight</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/logout" activeClassName="activeClicked" style={{ textDecoration: "none", color: "white" }}>
              <CDBSidebarMenuItem icon="sign-out-alt">Log Out</CDBSidebarMenuItem>
            </NavLink>


            <NavLink exact to="/settings" activeClassName="activeClicked" style={{ textDecoration: "none", color: "white" }}>
              <CDBSidebarMenuItem icon="cog">Settings</CDBSidebarMenuItem>
            </NavLink>
            */
