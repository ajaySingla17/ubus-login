import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

const USERNAME = "2510987006";
const DEFAULT_PASSWORD = "2510987006";

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("isAuthenticated") === "true",
  );
  const [password, setPassword] = useState(
    () => localStorage.getItem("password") || DEFAULT_PASSWORD,
  );

  useEffect(() => {
    if (!localStorage.getItem("password")) {
      localStorage.setItem("password", DEFAULT_PASSWORD);
    }
  }, []);

  const login = (username, enteredPassword, rememberLogin = true) => {
    const savedPassword = localStorage.getItem("password") || DEFAULT_PASSWORD;
    const valid = username === USERNAME && enteredPassword === savedPassword;

    if (valid) {
      setPassword(savedPassword);
      setIsAuthenticated(true);
      if (rememberLogin) {
        localStorage.setItem("isAuthenticated", "true");
      } else {
        sessionStorage.setItem("isAuthenticated", "true");
      }
    }

    return valid;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("isAuthenticated");
  };

  const changePassword = (currentPassword, newPassword) => {
    const savedPassword = localStorage.getItem("password") || DEFAULT_PASSWORD;
    if (currentPassword !== savedPassword) {
      return { ok: false, message: "Current password is incorrect" };
    }

    localStorage.setItem("password", newPassword);
    setPassword(newPassword);
    return { ok: true, message: "Password Updated Successfully" };
  };

  const value = useMemo(
    () => ({
      username: USERNAME,
      password,
      isAuthenticated:
        isAuthenticated || sessionStorage.getItem("isAuthenticated") === "true",
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
