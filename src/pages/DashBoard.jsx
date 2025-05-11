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
  { name: "Transport", value: 3000 },

];

const categorySpend = {};
recentTransactions.forEach((tx) => {
  if (tx.amount < 0) {
    categorySpend[tx.category] = (categorySpend[tx.category] || 0) + Math.abs(tx.amount);
  }
});


const sortedCategories = Object.entries(categorySpend)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 3);

// Sample budgets ( can replace with real data later)
const budgets = [
  { category: "Food", budget: 500 },
  { category: "Grocery", budget: 1000 },
  { category: "Entertainment", budget: 1500 },
  { category: "Transport", budget: 500 },
];

const budgetBreaches = budgets.filter((b) => {
  const spent = categorySpend[b.category] || 0;
  return spent > b.budget;
});


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

      {/* Pie Chart Section */}
      <div className="bg-gradient-to-br from-gray-900 to bg-black p-6 w-full max-w-full rounded-xl shadow-lg mt-8 ">
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
      {/* Top Spending Categories */}
      <div className="bg-gradient-to-br from-gray-900 to bg-black p-6 w-full max-w-full rounded-xl shadow-lg mt-8">
        <h3 className="text-lg font-semibold mb-3 text-white">
          🔝 Top Spending Categories
        </h3>
        {sortedCategories.map(([cat, amount], idx) => (
          <div
            key={idx}
            className="flex justify-between text-sm text-gray-300 mb-2"
          >
            <span>{cat}</span>
            <span className="font-semibold text-red-400">₹{amount}</span>
          </div>
        ))}
      </div>

      {/* Budget Breach Alerts */}
      {budgetBreaches.length > 0 && (
        <div className="bg-red-800/30 p-6 w-full max-w-full rounded-xl shadow-lg mt-8 text-red-300">
          <h3 className="text-lg font-semibold mb-2">⚠️ Budget Breaches</h3>
          <ul className="space-y-1 text-sm">
            {budgetBreaches.map((b, idx) => (
              <li key={idx} className="flex justify-between">
                <span>{b.category}</span>
                <span>
                  Spent ₹{categorySpend[b.category]} / ₹{b.budget}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
