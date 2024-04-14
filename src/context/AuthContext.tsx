import React, { createContext, useContext, ReactNode } from 'react';
import { httpClient } from './httpClient';


interface Permissions {
    email: string;
    password: string;
};


interface AuthContextProps {
  getPermissions: () => Permissions;
  login: (email: string, password: string) => void;
  logout: () => void;
};


const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<ReactNode> = ({ children }) => {
  const login = (email: string, password: string) => {
    return httpClient({
        method: 'POST',
        url: '/login',
        data: JSON.stringify({email: email, password: password}),
    }).then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("permissions", JSON.stringify(res.data.permissions));
      return { success: true, message: "OK" };
    }).catch(res => {
      return { success: false, message: res.message };
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("permissions");
    return true;
  };

  const getPermissions = () => {
    const rawPermissions = localStorage.getItem('permissions');
    const permissions = JSON.parse(rawPermissions);
    return permissions;
  };

  return <AuthContext.Provider value={{ getPermissions, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
