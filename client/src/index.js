import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

import EmployeeId from "./routes/employee-id";
import EmployeeIdEdit from "./routes/employee-id?edit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Below is a test route for later */}
        <Route path="employee-id" element={<EmployeeId />} />
        <Route path="employee-id?edit" element={<EmployeeIdEdit />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
