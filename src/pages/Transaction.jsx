import React from "react";

const recentTransactions = [
  {
    id: 1,
    name: "Salary",
    amount: 50000,
    date: "2025-05-01",
    category: "Income",
    type: "Income",
    icon: "💼",
  },
  {
    id: 2,
    name: "Groceries",
    amount: -3500,
    date: "2025-05-02",
    category: "Food",
    type: "Expense",
    icon: "🛒",
  },
  {
    id: 3,
    name: "Electricity Bill",
    amount: -2200,
    date: "2025-05-03",
    category: "Utilities",
    type: "Expense",
    icon: "💡",
  },
];


export default function TransactionsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-white">All Transactions</h1>
      <div className="space-y-4">
        {recentTransactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between p-4 rounded-lg bg-black/30 backdrop-blur-md hover:bg-black/50 transition-all duration-300 border border-gray-800 shadow-sm"
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
          </div>
        ))}
      </div>
    </div>
  );
}
 