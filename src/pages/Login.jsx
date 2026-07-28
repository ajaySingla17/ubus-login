import { useState } from "react";
import { FiLock, FiUser } from "react-icons/fi";
import { Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext.jsx";
import styles from "./Login.module.css";

export default function Login() {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotice("");

    if (login(username.trim(), password)) {
      navigate("/", { replace: true });
      return;
    }

    setError("Invalid Username or Password");
  };

  const handleForgot = () => {
    setError("");
    setNotice("Please contact campus transport office.");
  };

  return (
    <main className={styles.screen}>
      <motion.form
        className={styles.panel}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
      >
        <div className={styles.uMark}>U</div>
        <h1>BUS</h1>
        <p>PUNJAB CAMPUS</p>

        <label className={styles.field}>
          <FiUser />
          <input
            autoComplete="username"
            inputMode="numeric"
            onChange={(event) => {
              setUsername(event.target.value);
              setError("");
            }}
            placeholder="Username"
            value={username}
          />
        </label>

        <label className={styles.field}>
          <FiLock />
          <input
            autoComplete="current-password"
            onChange={(event) => {
              setPassword(event.target.value);
              setError("");
            }}
            placeholder="Password"
            type="password"
            value={password}
          />
        </label>

        {error && <div className={styles.error}>{error}</div>}
        {notice && <div className={styles.notice}>{notice}</div>}

        <button className={styles.signIn} type="submit">
          Sign In
        </button>
        <button className={styles.forgot} type="button" onClick={handleForgot}>
          Forgot your password? Click here
        </button>
      </motion.form>
    </main>
  );
}
