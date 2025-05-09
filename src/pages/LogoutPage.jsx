import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000); // Redirect after logout
  }, [navigate]);

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">🚪 Logging out...</h1>
    </div>
  );
};

export default LogoutPage;
