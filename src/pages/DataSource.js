import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Table, Button, Pagination, FormControl } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./DataSource.css";
import "../components/Box.css";

const data = [
  {
    name: "gangseo_traffic",
    vendor: "PostgreSQL",
    size: "14 GB",
    status: "Connected",
    date: "2024.08.27",
    user: "gn",
  },
  {
    name: "gangnam_traffic",
    vendor: "MySQL",
    size: "231 KB",
    status: "Connected",
    date: "2024.08.27",
    user: "sk",
  },
  {
    name: "alphacon",
    vendor: "PostgreSQL",
    size: "32 MB",
    status: "Connected",
    date: "2024.08.25",
    user: "gn",
  },
  {
    name: "kanary",
    vendor: "MySQL",
    size: "783 KB",
    status: "Connected",
    date: "2024.08.11",
    user: "sk",
  },
  {
    name: "kubert",
    vendor: "MySQL",
    size: "27 GB",
    status: "Disconnected",
    date: "2024.08.10",
    user: "sk",
  },
  {
    name: "freya",
    vendor: "PostgreSQL",
    size: "518 MB",
    status: "Disconnected",
    date: "2024.07.29",
    user: "sk",
  },
  {
    name: "asgard",
    vendor: "MySQL",
    size: "1.2 GB",
    status: "Connected",
    date: "2024.07.28",
    user: "gn",
  },
  {
    name: "raon_data",
    vendor: "MySQL",
    size: "240 GB",
    status: "Connected",
    date: "2024.07.28",
    user: "nh",
  },
  {
    name: "woden",
    vendor: "MySQL",
    size: "37 MB",
    status: "Connected",
    date: "2024.07.28",
    user: "yn",
  },
  {
    name: "marmot",
    vendor: "PostgreSQL",
    size: "67 GB",
    status: "Disconnected",
    date: "2024.07.28",
    user: "hk",
  },
  {
    name: "groot",
    vendor: "MySQL",
    size: "597 MB",
    status: "Connected",
    date: "2024.07.27",
    user: "sk",
  },
  {
    name: "bifrost",
    vendor: "MySQL",
    size: "652 MB",
    status: "Disconnected",
    date: "2024.07.20",
    user: "gn",
  },
];

const statusColors = {
  Disconnected: "badge-disconnected",
  Connected: "badge-connected",
};

const typeColors = {
  MySQL: "badge-mysql",
  PostgreSQL: "badge-postgresql",
};

export const DataSource = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const itemsPerPage = 10; // 페이지당 아이템 수
  const navigate = useNavigate();

  // 검색 필터링
  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.date.includes(searchTerm) ||
      item.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 검색어가 변경될 때마다 페이지를 1로 초기화
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // 검색 시 페이지를 초기화
  };

  // 페이지네이션 로직
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  // 행 클릭 이벤트 핸들러
  const handleRowClick = (item) => {
    navigate("/data-source/detail", { state: { selectedItem: item } });
  };

  // 페이지네이션 버튼 생성 로직
  const renderPaginationItems = () => {
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (endPage - startPage < 4) {
      if (startPage === 1) {
        endPage = Math.min(startPage + 4, totalPages);
      } else {
        startPage = Math.max(endPage - 4, 1);
      }
    }

    const paginationItems = [];
    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
    return paginationItems;
  };

  return (
    <div className="d-flex E">
      <div>
        <Sidebar />
      </div>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflowY: "hidden",
        }}
      >
        <Navbar />
        <div className="event-content">
          <div className="content-box-vertical">
            <div className="search-container d-flex justify-content-end">
              <FormControl
                type="search"
                placeholder="Search"
                className="search-input"
                value={searchTerm}
                onChange={handleSearchChange} // 변경된 핸들러로 검색 기능 개선
              />
            </div>
            <div
              className="event-header"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Vendor</th>
                    <th>Size</th>
                    <th>Status</th>
                    <th>Date Uploaded</th>
                    <th>Uploaded By</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((item, index) => (
                    <tr
                      key={index}
                      onClick={() => handleRowClick(item)}
                      style={{ cursor: "pointer" }}
                    >
                      <td>{item.name}</td>
                      <td>
                        <span className={`badge ${typeColors[item.vendor]}`}>
                          {item.vendor}
                        </span>
                      </td>
                      <td>{item.size}</td>
                      <td>
                        <span className={`badge ${statusColors[item.status]}`}>
                          {item.status}
                        </span>
                      </td>
                      <td>{item.date}</td>
                      <td>{item.user}</td>
                      <td onClick={(e) => e.stopPropagation()}>
                        <Button variant="outline-secondary" size="sm">
                          <FaEdit />
                        </Button>{" "}
                        <Button variant="outline-danger" size="sm">
                          <FaTrash />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <Pagination className="justify-content-center mt-4">
              <Pagination.Prev
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              />
              {renderPaginationItems()}
              <Pagination.Next
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
              />
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};
