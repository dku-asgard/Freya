import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import "./DataSourceDetail.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../components/Box.css";

export const DataSourceDetail = () => {
  const location = useLocation();
  const { selectedItem } = location.state || {};
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
          <div className="card mb-4 bg-light">
            <div className="card-body">
              <h5 className="card-title">
                <strong>Storage Detail - {selectedItem.name}</strong>
              </h5>
              <p className="card-text">Vendor: {selectedItem.vendor}</p>
              <p className="card-text">Status: {selectedItem.status}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <strong>Schemas</strong>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-light">
                    <i className="fas fa-database text-secondary"></i> public
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <strong>Tables</strong>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-light">
                    <i className="fas fa-table"></i> django_migrations
                  </li>
                  <li className="list-group-item bg-light">
                    <i className="fas fa-table"></i> django_content_type
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <strong>View - django_migrations</strong>
                </div>
                <div className="card-body card-body-gray">
                  <table className="table table-striped table-view mb-0 bg-white">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>APP</th>
                        <th>NAME</th>
                        <th>APPLIED</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>content_types</td>
                        <td>gangseo_traffic</td>
                        <td>2024-06-16T00:07:09</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>auth</td>
                        <td>gangnam_traffic</td>
                        <td>2024-06-16T00:07:09</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>admin</td>
                        <td>foo_value</td>
                        <td>2024-06-16T00:07:09</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>admin</td>
                        <td>simple_data</td>
                        <td>2024-06-16T00:07:09</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>admin</td>
                        <td>log_data</td>
                        <td>2024-06-16T00:07:09</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>content_types</td>
                        <td>connection_log</td>
                        <td>2024-06-16T00:07:09</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
