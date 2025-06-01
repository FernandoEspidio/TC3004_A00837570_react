import { useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState("");

  const login = async (user) => {
    try {
      const result = await fetch(`${API_URL}/login/`, {
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await result.json();
      
      setToken(data.token);
      setIsLogin(data.isLogin);
      
      return data.isLogin;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    setIsLogin(false);
    setToken("");
  };

  return {
    isLogin,
    token,
    login,
    logout
  };
};

export default useAuth;