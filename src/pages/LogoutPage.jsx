import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase"; 

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const PerformLogout = async () => {
      try{
        await signOut(auth);
        setTimeout(() => {
          navigate("/Login");
        }, 1000);
      }
      catch(error){
        console.error("Logout failed:", error);
      }
    }
    PerformLogout();
  }, [navigate]);

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">🚪 Logging out...</h1>
    </div>
  );
};

export default LogoutPage;
