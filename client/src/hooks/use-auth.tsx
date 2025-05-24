import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, getStoredAuth, clearStoredAuth } from '@/lib/auth';

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const { isLoggedIn: storedIsLoggedIn, user: storedUser } = getStoredAuth();
    setIsLoggedIn(storedIsLoggedIn);
    setUser(storedUser);
  }, []);

  const login = (user: User) => {
    setIsLoggedIn(true);
    setUser(user);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    clearStoredAuth();
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
