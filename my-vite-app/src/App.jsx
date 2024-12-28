import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminApp from "./admin/AdminApp";
import ClientApp from "./client/ClientApp";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./client/pages/login";
import Register from "./client/pages/register";

function App() {
  const code = new URLSearchParams(window.location.search).get("code") 
  
  return (
    <BrowserRouter>
      <Routes>
        {/* Route dành cho admin */}
        <Route path="/admin/*" element={<AdminApp />} />

        {/* Route dành cho client */}
        <Route
          path="/*"
          element={code ? <ClientApp code={code} /> : <Login />}
        />
        <Route path="/dangnhap" element={<Login />} />
        <Route path="/dangky" element={<Register />} />
        {/* 404 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
