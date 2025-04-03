
import { Navigate } from "react-router-dom";

// This file redirects to the root route where WelcomeScreen is rendered
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
