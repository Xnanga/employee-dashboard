import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import MainBodyLayout from './components/layout/MainBodyLayout';

import EmployeeIdEdit from './routes/:employeeId';
import AddEmployee from './routes/add-employee';
import NotFoundPage from './routes/404-not-found';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainBodyLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          // Why does this dynamic path not work?
          <Route path="/employees/:employeeId" element={<EmployeeIdEdit />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </MainBodyLayout>
  </React.StrictMode>
);
