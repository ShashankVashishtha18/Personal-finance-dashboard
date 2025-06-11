import React, { useEffect, useState } from "react";
import { getTransactions } from "../services/firestore";
import { useAuth } from "../contexts/AuthContext";

import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer
} from "recharts";

const COLORS = ["#6366f1", "#22c55e", "#f43f5e", "#f59e0b", "#3b82f6", "#9333ea"];

const Dashboard = () => {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (!user) return;
    const fetchData = async () => {
      const txs = await getTransactions(user.uid);
      setTransactions(txs);
    };
    fetchData();
  }, [user]);

  // Calculate totals
  const income = transactions
    .filter((tx) => tx.amount > 0)
    .reduce((sum, tx) => sum + tx.amount, 0);
  const expenses = transactions
    .filter((tx) => tx.amount < 0)
    .reduce((sum, tx) => sum + tx.amount, 0);
  const balance = income + expenses;

  // Category breakdown
  const categorySpend = {};
  transactions.forEach((tx) => {
    if (tx.amount < 0) {
      categorySpend[tx.category] =
        (categorySpend[tx.category] || 0) + Math.abs(tx.amount);
    }
  });

  const categoryData = Object.entries(categorySpend).map(([key, val]) => ({
    name: key,
    value: val,
  }));

  const sortedCategories = Object.entries(categorySpend)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Cards */}
      <div className="...">₹{balance}</div>
      <div className="...">₹{income}</div>
      <div className="...">₹{Math.abs(expenses)}</div>
      <div className="...">₹{income - Math.abs(expenses)}</div>

      {/* Pie Chart */}
      <div className="...">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={categoryData} dataKey="value" outerRadius={90} label>
              {categoryData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Top Spending & Budget Breach Sections... */}
    </div>
  );
};

export default Dashboard;
