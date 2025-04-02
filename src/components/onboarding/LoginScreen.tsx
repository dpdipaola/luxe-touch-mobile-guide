
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { signIn, signUp, user } = useAuth();

  // If user is already logged in, redirect to dashboard
  React.useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (isSignUp) {
        // Handle sign up
        const { error } = await signUp(email, password);
        if (error) throw error;
        toast({
          title: "Account created",
          description: "Please check your email to confirm your account.",
        });
      } else {
        // Handle login
        const { error } = await signIn(email, password);
        if (error) throw error;
        toast({
          title: "Welcome back",
          description: "You've successfully logged in.",
        });
        navigate('/dashboard');
      }
    } catch (error: any) {
      toast({
        title: "Authentication error",
        description: error.message || "An error occurred during authentication.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="p-6">
        <Link to="/" className="flex items-center text-luxe-dark">
          <ArrowLeft size={20} className="mr-2" />
          <span>Back</span>
        </Link>
      </div>
      
      <div className="flex-1 flex flex-col justify-center p-8">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-serif font-semibold mb-2 text-luxe-dark">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p className="text-gray-500 mb-8">
            {isSignUp 
              ? 'Register to access exclusive concierge services' 
              : 'Please log in to access your exclusive services'}
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="luxe-input"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                {!isSignUp && (
                  <Link to="/forgot-password" className="text-sm text-luxe-blue hover:underline">
                    Forgot password?
                  </Link>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="luxe-input pr-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className={`luxe-button w-full flex items-center justify-center ${
                isLoading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {isSignUp ? 'Creating Account...' : 'Logging in...'}
                </>
              ) : (
                isSignUp ? 'Create Account' : 'Login'
              )}
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
              <button 
                onClick={() => setIsSignUp(!isSignUp)} 
                className="text-luxe-blue font-medium hover:underline"
              >
                {isSignUp ? 'Log in' : 'Sign up'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
