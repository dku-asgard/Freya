import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataVendorSelect } from "./pages/DataVendorSelect";
import { DataConnections } from "./pages/DataConnections";
import { DataSource } from "./pages/DataSource";
import { DataSourceDetail } from "./pages/DataSourceDetail";
import { DataMigration } from "./pages/DataMigration";
const Freya = () => {

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<DataVendorSelect />} />
          <Route path="/data-connections" element={<DataConnections />} />
          <Route path="/data-source" element={<DataSource />} />
          <Route path="/data-source/detail" element={<DataSourceDetail />} />
          <Route path="/data-migration" element={<DataMigration />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default Freya;
