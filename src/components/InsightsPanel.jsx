import React from "react";

const InsightsPanel = ({ transactions }) => {
  const income = transactions
    .filter((tx) => tx.amount > 0)
    .reduce((sum, tx) => sum + tx.amount, 0);

  const expenses = transactions
    .filter((tx) => tx.amount < 0)
    .reduce((sum, tx) => sum + tx.amount, 0);

  const savings = income + expenses;

  const categoryTotals = {};
  transactions.forEach((tx) => {
    if (tx.amount < 0) {
      categoryTotals[tx.category] =
        (categoryTotals[tx.category] || 0) + Math.abs(tx.amount);
    }
  });

  const topCategory =
    Object.entries(categoryTotals).sort((a, b) => b[1] - a[1])[0]?.[0] || "-";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
      <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-gray-800 shadow">
        <h4 className="text-sm text-gray-400">Total Income</h4>
        <p className="text-green-400 font-bold text-xl">₹{income}</p>
      </div>

      <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-gray-800 shadow">
        <h4 className="text-sm text-gray-400">Total Expenses</h4>
        <p className="text-red-400 font-bold text-xl">₹{Math.abs(expenses)}</p>
      </div>

      <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-gray-800 shadow">
        <h4 className="text-sm text-gray-400">Savings</h4>
        <p className="text-yellow-400 font-bold text-xl">₹{savings}</p>
      </div>

      <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-gray-800 shadow">
        <h4 className="text-sm text-gray-400">Top Spending Category</h4>
        <p className="text-indigo-400 font-bold text-lg">{topCategory}</p>
      </div>

      <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-gray-800 shadow">
        <h4 className="text-sm text-gray-400">Month</h4>
        <p className="text-cyan-400 font-bold text-lg">
          {new Date().toLocaleString("default", { month: "long", year: "numeric" })}
        </p>
      </div>
    </div>
  );
};

export default InsightsPanel;
