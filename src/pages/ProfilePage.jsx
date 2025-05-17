import React, { useState } from "react";
import { Save, Camera } from "lucide-react";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "Shashank",
    email: "shashank@example.com",
    phone: "+91 9876543210",
    currency: "₹",
    joinDate: "January 2024",
    profileImage: "https://i.pravatar.cc/300?img=3", // Default image
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profile);
  const [selectedImage, setSelectedImage] = useState(null); // New state for selected image file
  const [profilePictureURL, setProfilePictureURL] = useState(profile.profileImage); //  URL for preview

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newProfileData = { ...formData };
    if (selectedImage) {
      newProfileData.profileImage = profilePictureURL;
    }

    setProfile(newProfileData);
    setIsEditing(false);
    setSelectedImage(null); // Clear selected image after "upload"
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setProfilePictureURL(URL.createObjectURL(file)); //  Create preview URL
    }
  };

  // Statistics data - in a real app this would come from your transactions
  const statistics = {
    totalTransactions: 42,
    averageSpending: "₹2,500",
    savingsRate: "24%",
    budgetAdherence: "89%",
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-6">👤 Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-black/40 backdrop-blur-md rounded-xl border border-gray-800 shadow-lg p-6 flex flex-col items-center">
          <div className="relative group">
            <img
              src={profilePictureURL} // Use profilePictureURL for display
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-indigo-600 mb-4"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <label htmlFor="image-upload">
                <Camera size={24} className="text-white" />
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }} // Hide the actual input
                />
              </label>
            </div>
          </div>

          <h2 className="text-xl font-bold">{profile.name}</h2>
          <p className="text-gray-400 text-sm">{profile.email}</p>
          <p className="text-indigo-400 mt-2">Member since {profile.joinDate}</p>

          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
          >
            Edit Profile
          </button>
        </div>

        {/* Profile Details/Edit Form */}
        <div className="bg-black/40 backdrop-blur-md rounded-xl border border-gray-800 shadow-lg p-6 lg:col-span-2">
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Preferred Currency
                  </label>
                  <select
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="₹">Indian Rupee (₹)</option>
                    <option value="$">US Dollar ($)</option>
                    <option value="€">Euro (€)</option>
                    <option value="£">British Pound (£)</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Save size={16} />
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            <div>
              <h3 className="text-lg font-semibold mb-4">Profile Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400">Full Name</p>
                  <p className="font-medium">{profile.name}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">{profile.email}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">Phone Number</p>
                  <p className="font-medium">{profile.phone}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Preferred Currency
                  </p>
                  <p className="font-medium">{profile.currency}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Financial Statistics */}
        <div className="bg-black/40 backdrop-blur-md rounded-xl border border-gray-800 shadow-lg p-6 lg:col-span-3">
          <h3 className="text-lg font-semibold mb-4">
            Your Financial Statistics
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <p className="text-sm text-gray-400">Total Transactions</p>
              <p className="text-xl font-bold text-indigo-400">
                {statistics.totalTransactions}
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <p className="text-sm text-gray-400">
                Average Monthly Spending
              </p>
              <p className="text-xl font-bold text-red-400">
                {statistics.averageSpending}
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <p className="text-sm text-gray-400">Savings Rate</p>
              <p className="text-xl font-bold text-green-400">
                {statistics.savingsRate}
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <p className="text-sm text-gray-400">Budget Adherence</p>
              <p className="text-xl font-bold text-yellow-400">
                {statistics.budgetAdherence}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;