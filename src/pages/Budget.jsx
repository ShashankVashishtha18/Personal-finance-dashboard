import React, { useState } from "react";

const initialBudgetData = [
  { category: "Rent", budget: 11000, spent: 10000 },
  { category: "Food", budget: 6000, spent: 3400 },
  { category: "Utilities", budget: 4000, spent: 2000 },
  { category: "Transport", budget: 3000, spent: 1000 },
  { category: "Entertainment", budget: 5000, spent: 2500 },
  { category: "Groceries", budget: 4000, spent: 1500 },
  { category: "Health", budget: 3000, spent: 2000 },
  { category: "Miscellaneous", budget: 2000, spent: 1000 },
  { category: "Savings", budget: 5000, spent: 3000 },

];

export default function Budget() {
  const [budgetData, setBudgetData] = useState(initialBudgetData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newBudget, setNewBudget] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalBudget = budgetData.reduce((sum, item) => sum + item.budget, 0);
  const totalSpent = budgetData.reduce((sum, item) => sum + item.spent, 0);
  const totalRemaining = totalBudget - totalSpent;

  const openModal = (category) => {
    setSelectedCategory(category);
    setNewBudget(category.budget);
    setIsModalOpen(true);
  };

  const updateBudget = () => {
    const updated = budgetData.map((item) =>
      item.category === selectedCategory.category
        ? { ...item, budget: parseInt(newBudget) }
        : item
    );
    setBudgetData(updated);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-6">💰 Budgets Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-purple-700 p-4 rounded-lg text-center">
          <h4 className="text-sm text-gray-200">Total Budget</h4>
          <p className="text-2xl font-bold mt-1">₹{totalBudget}</p>
        </div>
        <div className="bg-rose-700 p-4 rounded-lg text-center">
          <h4 className="text-sm text-gray-200">Spent</h4>
          <p className="text-2xl font-bold mt-1">₹{totalSpent}</p>
        </div>
        <div className="bg-emerald-700 p-4 rounded-lg text-center">
          <h4 className="text-sm text-gray-200">Remaining</h4>
          <p className="text-2xl font-bold mt-1">
            ₹{totalRemaining > 0 ? totalRemaining : 0}
          </p>
        </div>
      </div>

      {/* Category Budgets */}

      <div className="space-y-4">
        {budgetData.map((item, index) => {
          const progress = Math.min((item.spent / item.budget) * 100, 100);
          const isOver = item.spent > item.budget;

          let barColor = "bg-green-500"; // default

          if (progress > 80) {
            barColor = "bg-red-500";
          } else if (progress > 50) {
            barColor = "bg-yellow-400";
          }

          return (
            <div
              key={index}
              onClick={() => openModal(item)}
              className="cursor-pointer"
            >
              <div className="flex justify-between mb-1">
                <span className="font-medium text-white">{item.category}</span>
                <span
                  className={`text-sm font-semibold ${
                    isOver ? "text-red-400" : "text-gray-300"
                  }`}
                >
                  ₹{item.spent} / ₹{item.budget}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full ${barColor} rounded-full`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {isModalOpen &&  (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-[90%] max-w-sm shadow-xl">
            <h2 className="text-lg font-bold mb-4">
              Edit Budget for {selectedCategory.category}
            </h2>
            <input
              type="number"
              value={newBudget}
              onChange={(e) => setNewBudget(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white outline-none border border-gray-600 mb-4"
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-1 rounded bg-gray-700 hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={updateBudget}
                className="px-4 py-1 rounded bg-indigo-600 hover:bg-indigo-500"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
