import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Navbar.style";
import { CDBNavbar } from "cdbreact";

// 메뉴 제목 결정 함수
const getMenuTitle = (pathname) => {
  switch (pathname) {
    case "/data-connections":
      return "Data Connections";
    case "/data-source":
    case "/data-source/detail":
      return "Data Source";
    case "/data-migration":
      return "Data Migration";
    case "/autoinsight":
      return "Auto Insight";
    default:
      return "Data Connections"; // 기본 메뉴 제목
  }
};

const Navbar = () => {
  const location = useLocation(); // 현재 경로 가져오기
  const menuTitle = getMenuTitle(location.pathname); // 제목 결정

  return (
    <Header>
      <CDBNavbar dark expand="md" scrolling>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "100px", // 상단바 높이 고정
          }}
        >
          <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
            <h2 style={{ margin: 0, fontWeight: "bold" }}>{menuTitle}</h2>
          </div>
        </div>
      </CDBNavbar>
    </Header>
  );
};

export default Navbar;
