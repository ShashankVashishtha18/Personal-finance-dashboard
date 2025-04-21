import React from "react";
import { Bell, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="h-16 bg-black text-white px-6 flex items-center justify-between border-b border-gray-700 animate-fadeSlideDown">
      {/* Left - Page Title */}
      <h2 className="text-2xl font-semibold tracking-wide">📊 Dashboard</h2>

      {/* Right - Search, Notification, Avatar */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg bg-gray-800 text-sm text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition"
          />
        </div>

        {/* Notification */}
        <button className="relative hover:text-indigo-400 transition-transform hover:scale-110 duration-200">
          <Bell size={22} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
        </button>

        {/* Avatar */}
        <img
          src="https://i.pravatar.cc/300?img=3"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-gray-600 hover:scale-105 transition-transform cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
