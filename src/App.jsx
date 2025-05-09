import React from "react";
import "./index.css";
import Sidebar from "./components/SideBar";
import Header from "./components/Header";
import Dashboard from "./pages/DashBoard";
import Transactions from "./pages/Transaction";
import Budgets from "./pages/Budget";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import SupportPage from "./pages/SupportPage";
import LogoutPage from "./pages/LogoutPage";

function App() {
  return (
      <div className="flex h-screen bg-gray-900 text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <div/> {/* This div was unclosed */}
          <main className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/budgets" element={<Budgets />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/logout" element={<LogoutPage />} />
              {/* Add other routes as needed */}
            </Routes>
          </main>
        </div>
      </div>
  );
}

export default App;
