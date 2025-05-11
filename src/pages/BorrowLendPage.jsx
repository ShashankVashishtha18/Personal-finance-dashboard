import React from "react";

// Sample data
const borrowLendData = [
  {
    id: 1,
    name: "Ravi",
    type: "lent",
    amount: 1000,
    dueDate: "2025-05-20",
    note: "Paid dinner bill",
  },
  {
    id: 2,
    name: "Riya",
    type: "borrowed",
    amount: 500,
    dueDate: "2025-05-25",
    note: "Book money",
  },
  {
    id: 3,
    name: "Akash",
    type: "lent",
    amount: 1500,
    dueDate: "2025-06-01",
    note: "Shared cab ride",
  },
];

const BorrowLendPage = () => {
  const borrowed = borrowLendData.filter((entry) => entry.type === "borrowed");
  const lent = borrowLendData.filter((entry) => entry.type === "lent");

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-6">💳 Borrow & Lend Tracker</h1>

      {/* Borrowed Section */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-red-400">💸 Money You Owe</h2>
        {borrowed.length > 0 ? (
          <ul className="space-y-4">
            {borrowed.map((item) => (
              <li
                key={item.id}
                className="bg-red-900/30 border border-red-700 p-4 rounded-lg shadow-sm"
              >
                <div className="flex justify-between">
                  <span className="font-medium">{item.name}</span>
                  <span className="font-semibold text-red-300">₹{item.amount}</span>
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  Due: {item.dueDate} — {item.note}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-sm">You're all clear. No borrowed money.</p>
        )}
      </div>

      {/* Lent Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-green-400">💰 Money Owed to You</h2>
        {lent.length > 0 ? (
          <ul className="space-y-4">
            {lent.map((item) => (
              <li
                key={item.id}
                className="bg-green-900/30 border border-green-700 p-4 rounded-lg shadow-sm"
              >
                <div className="flex justify-between">
                  <span className="font-medium">{item.name}</span>
                  <span className="font-semibold text-green-300">₹{item.amount}</span>
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  Due: {item.dueDate} — {item.note}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-sm">Nobody owes you right now.</p>
        )}
      </div>
    </div>
  );
};

export default BorrowLendPage;
