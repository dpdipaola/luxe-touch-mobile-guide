
import { Navigate } from "react-router-dom";

// This file now simply redirects to the root route
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
