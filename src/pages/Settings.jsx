import React, { useState } from "react"; 

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [currency, setCurrency] = useState("₹"); // Default currency
  const [autoSave, setAutoSave] = useState(true);

  const handleNotificationToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleDarkModeToggle = () => {
    setDarkModeEnabled(!darkModeEnabled);
    //  In a real app, you'd likely toggle a class on the body or use a context
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

    const handleAutoSaveToggle = () => {
        setAutoSave(!autoSave);
    };

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* Account Settings */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Account</h2>
        <div className="bg-black/40 backdrop-blur-md rounded-xl border border-gray-800 shadow-lg p-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-700">
            <div>
              <h3 className="font-medium">Notifications</h3>
              <p className="text-sm text-gray-400">
                Control when you receive alerts.
              </p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={notificationsEnabled}
                onChange={handleNotificationToggle}
              />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-700">
            <div>
              <h3 className="font-medium">Dark Mode</h3>
              <p className="text-sm text-gray-400">
                Toggle dark mode for the app.
              </p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={darkModeEnabled}
                onChange={handleDarkModeToggle}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="flex items-center justify-between py-3">
              <div>
                  <h3 className="font-medium">Auto Save</h3>
                  <p className="text-sm text-gray-400">
                      Automatically save changes.
                  </p>
              </div>
              <label className="switch">
                  <input
                      type="checkbox"
                      checked={autoSave}
                      onChange={handleAutoSaveToggle}
                  />
                  <span className="slider round"></span>
              </label>
          </div>
        </div>
      </section>

      {/* Preferences Settings */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Preferences</h2>
        <div className="bg-black/40 backdrop-blur-md rounded-xl border border-gray-800 shadow-lg p-4">
          <div className="py-3">
            <label
              htmlFor="currency"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Currency
            </label>
            <select
              id="currency"
              value={currency}
              onChange={handleCurrencyChange}
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:outline-none"
            >
              <option value="₹">Indian Rupee (₹)</option>
              <option value="$">US Dollar ($)</option>
              <option value="€">Euro (€)</option>
              <option value="£">British Pound (£)</option>
            </select>
          </div>
        </div>
      </section>

      {/* Add more sections as needed (e.g., Security, Data Privacy) */}
    </div>
  );
};

export default Settings;