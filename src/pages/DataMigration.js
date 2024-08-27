import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import ProgressBar from "../components/ProgressBar.js";
import "./DataMigration.css";
import { FaArrowRight } from "react-icons/fa";

const data = [
  { name: "gangseo_traffic", vendor: "PostgreSQL" },
  { name: "gangnam_traffic", vendor: "MySQL" },
  { name: "alphacon", vendor: "PostgreSQL" },
  { name: "kanary", vendor: "MySQL" },
  { name: "kubert", vendor: "MySQL" },
  { name: "freya", vendor: "PostgreSQL" },
  { name: "asgard", vendor: "MySQL" },
  { name: "raon_data", vendor: "MySQL" },
  { name: "woden", vendor: "MySQL" },
  { name: "marmot", vendor: "PostgreSQL" },
  { name: "groot", vendor: "MySQL" },
  { name: "bifrost", vendor: "MySQL" },
];

export const DataMigration = () => {
  // Extract DB names from the 'data' array and prepend "Select"
  const dbOptions = ["Select", ...data.map((item) => item.name)];
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

  const sourceItem = data.find(item => item.name === sourceDB);
  const targetItem = data.find(item => item.name === targetDB);
  const sourceImgSrc = sourceItem?.vendor === "PostgreSQL" ? "/images/elephant.png" : "/images/mysql-logo.png";
  const targetImgSrc = targetItem?.vendor === "MySQL" ? "/images/mysql-logo.png" : "/images/elephant.png";

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
                    src={sourceDB === "Select" ? "/images/default-db.png" : sourceImgSrc}
                    alt="Source Database Logo"
                  />
                  <p>
                    {sourceDB === "Select" ? "Source" : sourceDB}
                    <br />
                    {sourceDB === "Select" ? "Database" : sourceItem?.vendor }
                  </p>
                </div>
                <span className="arrow">
                  <FaArrowRight />
                </span>
                <div className="db">
                  <img
                    className="imgs"
                    src={targetDB === "Select" ? "/images/default-db.png" : targetImgSrc}
                    alt="Target Database Logo"
                  />
                  <p>
                    {targetDB === "Select" ? "Target" : targetDB}
                    <br />
                    {targetDB === "Select" ? "Database" : targetItem?.vendor}
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
