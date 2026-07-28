import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

const USERNAME = "2510987006";
const DEFAULT_PASSWORD = "2510987006";

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [password, setPassword] = useState(
    () => localStorage.getItem("password") || DEFAULT_PASSWORD,
  );

  const login = () => {
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    setIsAuthenticated(true);
  };

  const changePassword = (_currentPassword, newPassword) => {
    localStorage.setItem("password", newPassword);
    setPassword(newPassword);
    return { ok: true, message: "Password Updated Successfully" };
  };

  const value = useMemo(
    () => ({
      username: USERNAME,
      password,
      isAuthenticated,
      login,
      logout,
      changePassword,
    }),
    [isAuthenticated, password],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
