import React from "react";
import "./index.css";
import Sidebar from "./components/SideBar";
import Header from "./components/Header";
import Dashboard from "./pages/DashBoard";
import Transactions from "./pages/Transaction";
import Budget from "./pages/Budget";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import SupportPage from "./pages/SupportPage";
import LogoutPage from "./pages/LogoutPage";
import BorrowLendPage from "./pages/BorrowLendPage";


const Homepage = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white" >Hello</div>
  )
}


function App() {
  return (
      <div className="flex h-screen bg-gray-900 text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden bg-gray-900">
          <Header />
          <div/>
          <main className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/budgets" element={<Budget />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/logout" element={<LogoutPage />} />
              <Route path="/borrow-lend" element={<BorrowLendPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/support" element={<SupportPage />} />
            </Routes>
          </main>
        </div>
      </div>
  );
}

export default App;
