// src/context/AuthContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { httpClient } from './httpClient';


interface Permissions {
    username: string;
    password: string;
};


interface AuthContextProps {
  isAuthenticated: boolean;
  getPermissions: (username: string, password: string) => Permissions;
  login: (username: string, password: string) => void;
  logout: () => void;
};


const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<ReactNode> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (username: string, password: string) => {
    httpClient("login", {
        method: 'POST',
        body: JSON.stringify({email: username, password: password}),
    }).then(res => {
        localStorage.setItem("token", res.json.token);
        localStorage.setItem("permissions", JSON.stringify(res.json.permissions));
        setIsAuthenticated(true);
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("permissions");
    setIsAuthenticated(false);
  };

  const getPermissions = () => {
    const rawPermissions = localStorage.getItem('permissions');
	const permissions = JSON.parse(rawPermissions);
	return permissions;
  };

  return <AuthContext.Provider value={{ isAuthenticated, getPermissions, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
