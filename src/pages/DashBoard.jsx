import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import InsightsPanel from "../components/InsightsPanel";

const COLORS = [
  "#6366f1",
  "#22c55e",
  "#f43f5e",
  "#f59e0b",
  "#3b82f6",
  "#9333ea",
];

const recentTransactions = [
  {
    id: 1,
    name: "Zomato - Food Delivery",
    amount: -499,
    type: "Expense",
    category: "Food",
    icon: "🍔",
    date: "Apr 22, 2025",
  },
  {
    id: 2,
    name: "Swiggy Instamart",
    amount: -320,
    type: "Expense",
    category: "Grocery",
    icon: "🛒",
    date: "Apr 21, 2025",
  },
  {
    id: 3,
    name: "Salary - April",
    amount: 30000,
    type: "Income",
    category: "Salary",
    icon: "💼",
    date: "Apr 20, 2025",
  },
  {
    id: 4,
    name: "Netflix Subscription",
    amount: -499,
    type: "Expense",
    category: "Entertainment",
    icon: "🎬",
    date: "Apr 19, 2025",
  },
  {
    id: 5,
    name: "Petrol",
    amount: -1200,
    type: "Expense",
    category: "Transport",
    icon: "⛽",
    date: "Apr 18, 2025",
  },
];

const categoryData = [
  { name: "Food", value: 1200 },
  { name: "Grocery", value: 800 },
  { name: "Rent", value: 15000 },
  { name: "Entertainment", value: 2000 },
  { name: "Subscriptions", value: 999 },
  { name: "Transpart", value: 3000 },
];

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

      {/* Insights Panel - Full Width */}
      {/* <div className="col-span-1 sm:col-span-2 lg:col-span-4 mt-4">
        <InsightsPanel />
      </div> */}

      {/* Recent Transactions */}
      {/* <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl shadow-inner border border-gray-700 mt-8">
        <h3 className="text-xl font-semibold mb-4 text-white">
          Recent Transactions
        </h3>
        <ul className="space-y-4">
          {recentTransactions.map((tx) => (
            <li
              key={tx.id}
              className="flex items-center justify-between px-4 py-4 rounded-lg bg-black/30 backdrop-blur-md hover:bg-black/50 transition-all duration-300 border border-gray-800 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{tx.icon}</span>
                <div>
                  <h4 className="font-medium text-white">{tx.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-400">{tx.date}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                        tx.type === "Income"
                          ? "bg-green-800 text-green-300"
                          : "bg-red-800 text-red-300"
                      }`}
                    >
                      {tx.category}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`text-lg font-bold ${
                  tx.amount < 0 ? "text-red-400" : "text-green-400"
                }`}
              >
                {tx.amount < 0 ? `-₹${Math.abs(tx.amount)}` : `+₹${tx.amount}`}
              </div>
            </li>
          ))}
        </ul>
      </div> */}

      {/* Pie Chart Section */}
      <div className="bg-gradient-to-br from-gray-900 to bg-black p-6 rounded-xl shadow-lg mt-8 ">
        <h3 className="text-lg font-semibold mb-4">Spending Breakdown</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
