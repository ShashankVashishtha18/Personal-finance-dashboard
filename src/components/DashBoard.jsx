import React from "react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
        <h3 className="text-sm text-gray-300">Total Balance</h3>
        <p className="text-2xl font-bold mt-2 text-white">₹1,24,500</p>
      </div>

      {/* Card 2 */}
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
        <h3 className="text-sm text-gray-300">Total Income</h3>
        <p className="text-2xl font-bold mt-2 text-white">₹75,000</p>
      </div>

      {/* Card 3 */}
      <div className="bg-gradient-to-br from-rose-600 to-pink-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
        <h3 className="text-sm text-gray-300">Total Expenses</h3>
        <p className="text-2xl font-bold mt-2 text-white">₹32,500</p>
      </div>

      {/* Card 4 */}
      <div className="bg-gradient-to-br from-yellow-500 to-amber-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
        <h3 className="text-sm text-gray-300">Remaining Budget</h3>
        <p className="text-2xl font-bold mt-2 text-white">₹17,000</p>
      </div>
    </div>
  );
};

export default Dashboard;
