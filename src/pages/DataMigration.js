import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Dropdown from "../components/Dropdown";
import ProgressBar from "../components/ProgressBar.js";
import "./DataMigration.css";
import { FaArrowRight } from "react-icons/fa";

export const DataMigration = () => {
  const dbOptions = ["Select", "information_schema", "public"];
  const [sourceDB, setSourceDB] = useState("Select");
  const [targetDB, setTargetDB] = useState("Select");
  const [execute, setExecute] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (execute && progress < 100) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prevProgress + 10;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [execute, progress]);

  function handleExecuteClick() {
    if (sourceDB === "Select" || targetDB === "Select") {
      alert("Please select both the source and target databases.");
      return;
    }

    if (progress === 100) {
      reset();
    } else {
      setExecute((prevExecute) => !prevExecute);
    }
  }

  function reset() {
    setSourceDB("Select");
    setTargetDB("Select");
    setProgress(0);
    setExecute(false);
  }

  const sourceImgSrc =
    sourceDB === "Select" ? "/images/default-db.png" : "/images/elephant.png";
  const targetImgSrc =
    targetDB === "Select" ? "/images/default-db.png" : "/images/mysql-logo.png";

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
            <div className="migration-container">
              <div className="dropdown-container">
                <Dropdown
                  options={dbOptions}
                  selected={sourceDB}
                  onChange={(e) => setSourceDB(e.target.value)}
                />
                <span className="arrow">
                  <FaArrowRight />
                </span>
                <Dropdown
                  options={dbOptions}
                  selected={targetDB}
                  onChange={(e) => setTargetDB(e.target.value)}
                />
                <button className="execute-button" onClick={handleExecuteClick}>
                  {progress === 100 ? "Finish" : execute ? "Stop" : "Execute"}
                </button>
              </div>
              <div className="db-logos">
                <div className="db">
                  <img
                    className="imgs"
                    src={sourceImgSrc}
                    alt="Source Database Logo"
                  />
                  <p>
                    DB Name
                    <br />
                    {sourceDB === "Select" ? "Source Database" : "PostgreSQL"}
                  </p>
                </div>
                <span className="arrow">
                  <FaArrowRight />
                </span>
                <div className="db">
                  <img
                    className="imgs"
                    src={targetImgSrc}
                    alt="Target Database Logo"
                  />
                  <p>
                    DB Name
                    <br />
                    {targetDB === "Select" ? "Target Database" : "MySQL"}
                  </p>
                </div>
              </div>
              <div className="prog">
                <ProgressBar progress={progress} className="prog-item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
