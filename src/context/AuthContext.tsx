import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  email: string;
  name?: string;
  role?: 'student' | 'admin';
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// TODO: Replace with Real API URL after deployment
// For now, we can read it from `src/components/utility/ChatBotWidget.tsx` or similar constants
// Since I can't read the deployed URL yet, I will use a placeholder or partial URL
const API_BASE_URL = 'https://xdrowyxya4.execute-api.eu-north-1.amazonaws.com/main'; 

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, pass: string) => {
    try {
      // Manual Auth API Call
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password: pass,
      });

      if (response.data.success) {
        const userData = response.data.user;
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
      } else {
        throw new Error(response.data.error || 'Login failed');
      }
    } catch (err: any) {
      console.error('Login Error:', err);
      // For testing BEFORE deployment finishes, we can simulate success if specific creds are used
      // Remove this block in production
      if (email === 'demo@student.com' && pass === 'password') {
          const fakeUser = { email, name: 'Demo Student', role: 'student' as const };
          setUser(fakeUser);
          localStorage.setItem('user', JSON.stringify(fakeUser));
          return; 
      }
      
      throw new Error(err.response?.data?.error || err.message || 'Login failed');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
