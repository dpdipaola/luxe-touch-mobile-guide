
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the welcome screen
    navigate("/");
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-luxe-dark text-white">
      <div className="text-center">
        <h1 className="text-4xl font-serif font-bold mb-4">Global Luxe Concierge</h1>
        <p className="text-xl text-gray-300">Loading your exclusive experience...</p>
      </div>
    </div>
  );
};

export default Index;
