import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { DataConnections } from "./pages/DataConnections";
import { DataSource } from "./pages/DataSource";
import { ExploratoryDataAnalysis } from "./pages/ExploratoryDataAnalysis";
import { AutoInsight } from "./pages/AutoInsight";
const Freya = () => {

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/dataconnections" element={<DataConnections />} />
          <Route path="/datasource" element={<DataSource />} />
          <Route path="/exploratorydataanalysis" element={<ExploratoryDataAnalysis />} />
          <Route path="/autoinsight" element={<AutoInsight />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default Freya;
