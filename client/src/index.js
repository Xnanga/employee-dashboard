import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import MainBodyLayout from "./components/layout/MainBodyLayout";

import EmployeeId from "./routes/employee-id";
import EmployeeIdEdit from "./routes/employee-id?edit";
import AddEmployee from "./routes/add-employee";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainBodyLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          {/* Below is a test route for later */}
          <Route path="add-employee" element={<AddEmployee />} />
          <Route path="employee-id" element={<EmployeeId />} />
          <Route path="employee-id?edit" element={<EmployeeIdEdit />} />
        </Routes>
      </BrowserRouter>
    </MainBodyLayout>
  </React.StrictMode>
);
