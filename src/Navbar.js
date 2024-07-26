import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Navbar.style";
import { CDBNavbar } from "cdbreact";

// 메뉴 제목 결정 함수
const getMenuTitle = (pathname) => {
  switch (pathname) {
    case '/dataconnections':
      return 'Data Connections';
    case '/datasource':
      return 'Data Source';
    case '/exploratorydataanalysis':
      return 'Exploratory Data Analysis';
    case '/autoinsight':
      return 'Auto Insight';
    default:
      return 'Dashboard'; // 기본 메뉴 제목
  }
};

const Navbar = () => {
  const location = useLocation(); // 현재 경로 가져오기
  const menuTitle = getMenuTitle(location.pathname); // 제목 결정

  return (
    <Header>
      <CDBNavbar dark expand="md" scrolling>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <h2 style={{ margin: 0 }}>{menuTitle}</h2>
          </div>
        </div>
      </CDBNavbar>
    </Header>
  );
}

export default Navbar;
