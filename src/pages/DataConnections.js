import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./DataConnections.css";
import LoadingButton from "../components/loadingButton";
import "../components/Box.css";
import { useLocation } from "react-router-dom";

export const DataConnections = () => {
  const location = useLocation();
  const { vendorType } = location.state || { vendorType: "Unknown" }; // 기본값 설정

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
          <div
            className="event-header"
            style={{ display: "flex", alignItems: "center" }}
          >
            <section className="content-box">
              <form>
                <h3>
                  <strong>
                    Data Vendor Type {">"} {vendorType}
                  </strong>
                </h3>
                <div className="form-group">
                  <label>Connection Name</label>
                  <input type="text" />
                  <span>Type a name for the connection</span>
                  <label>Connection Method</label>
                  <input type="text" />
                  <span>Method to use to connect to the RDBMS</span>
                </div>
                <label className="para">Parameters</label>
                <span>SSL</span>
                <div className="form-groups">
                  <div className="form-group-inner">
                    <label>Host Name</label>
                    <input type="text" placeholder="127.0.0.1" />
                    <span>Name of IP address of the server host</span>
                  </div>
                  <div className="form-group-inner">
                    <label>Port</label>
                    <input type="text" placeholder="3306" />
                    <span>TCP/IP port</span>
                  </div>
                  <div className="form-group-inner">
                    <label>Password</label>
                    <input type="password" />
                    <span>
                      The user's password. Will be requested later if it's not
                      set.
                    </span>
                  </div>
                  <div className="form-group-inner">
                    <label>Default Schema</label>
                    <input type="text" />
                    <span>
                      The schema to use ass default schema. Leave blank to
                      select it later.
                    </span>
                  </div>
                </div>
                <div className="form-buttons">
                  <LoadingButton />
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataConnections;
