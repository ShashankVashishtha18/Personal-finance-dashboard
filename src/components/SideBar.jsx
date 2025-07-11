import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  Wallet,
  PiggyBank,
  Settings,
  LogOut,
  User2,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  HandCoins,
} from "lucide-react";


const mainNav = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Transactions", icon: Wallet, path: "/transactions" },
  { label: "Budgets", icon: PiggyBank, path: "/budgets" },
  { label: "Borrow/Lend", icon: HandCoins, path: "/borrow-lend" },
  { label: "Settings", icon: Settings, path: "/settings" },
];

const extraNav = [
  { label: "Profile", icon: User2, path: "/profile" },
  { label: "Support", icon: HelpCircle, path: "/support" },
  { label: "Logout", icon: LogOut, path: "/logout" },
];

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate(); // ✅ Hook from react-router-dom

  const handleNavigation = (label, path) => {
    setActive(label);
    navigate(path);
  };

  return (
    <aside
      className={`${collapsed ? "w-20" : "w-72"
        } h-full bg-black/90 backdrop-blur-md text-gray-200 shadow-2xl rounded overflow-hidden animate-fadeIn flex flex-col justify-between transition-all duration-500`}
    >
      {/* Brand / Toggle */}
      <div className="h-16 flex items-center justify-between px-6  border-gray-900 bg-black ">
        <h1 className="text-2xl font-bold text-gray-200 whitespace-nowrap"> 
          {collapsed ? "💸" : " 💸FinancePro"}
        </h1>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-white transition"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Main nav */}
      <nav className="flex-1 py-6 space-y-2">
        {mainNav.map((item, index) => {
          const Icon = item.icon;
          const isActive = active === item.label;

          return (
            <div
              key={index}
              onClick={() => handleNavigation(item.label, item.path)}
              className={`group relative flex items-center gap-4 px-6 py-3 cursor-pointer rounded-lg transition-all duration-300 ${isActive
                  ? "bg-gradient-to-r from-purple-700 to-indigo-700 text-white shadow-inner"
                  : "hover:bg-gray-800 hover:text-white"
                }`}
            >
              {isActive && (
                <span className="absolute left-0 h-full w-1 bg-indigo-500 rounded-r-sm animate-pulse"></span>
              )}
              <Icon
                size={20}
                className="text-gray-400 group-hover:text-white"
              />
              {!collapsed && (
                <span className="text-sm font-medium">{item.label}</span>
              )}
            </div>
          );
        })}
      </nav>

      {/* Bottom nav */}
      <div className="py-4 border-t border-gray-800 space-y-1">
        {/* User Avatar */}
        <div className="flex items-center gap-3 px-6 py-3">
          <div className="relative group transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img
              src="https://i.pravatar.cc/300?img=3"
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-gray-600"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-black rounded-full group-hover:scale-110 transition-transform"></span>
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-medium">Shashank</span>
              <span className="text-xs text-gray-400">Online</span>
            </div>
          )}
        </div>

        {extraNav.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              onClick={() => {    
                if (item.path) { // Only navigate if there's a path
                  handleNavigation(item.label, item.path);
                } else {
                  console.log(`${item.label} clicked (no navigation)`);
                }
              }}
              className="flex items-center gap-4 px-6 py-2 hover:bg-gray-800 transition-all duration-300 cursor-pointer"
            >
              <Icon size={18} className="text-gray-400" />
              {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
