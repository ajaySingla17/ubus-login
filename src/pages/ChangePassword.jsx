import { useState } from "react";
import BottomNavigation from "../components/BottomNavigation.jsx";
import Header from "../components/Header.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import styles from "./ChangePassword.module.css";

export default function ChangePassword() {
  const { changePassword } = useAuth();
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setMessage("");
    setType("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.newPassword || form.newPassword !== form.confirmPassword) {
      setType("error");
      setMessage("New password and confirm password must match");
      return;
    }

    const result = changePassword(form.currentPassword, form.newPassword);
    setType(result.ok ? "success" : "error");
    setMessage(result.message);

    if (result.ok) {
      setForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
    }
  };

  return (
    <div className={styles.shell}>
      <Header />
      <main className={styles.content}>
        <ProfileCard />
        <form className={styles.card} onSubmit={handleSubmit}>
          <PasswordField
            label="Current password"
            placeholder="Enter your current password"
            onChange={(value) => updateField("currentPassword", value)}
            value={form.currentPassword}
          />
          <PasswordField
            label="New password"
            placeholder="Enter your new password"
            onChange={(value) => updateField("newPassword", value)}
            value={form.newPassword}
          />
          <PasswordField
            label="Confirm new password"
            placeholder="Confirm new password"
            onChange={(value) => updateField("confirmPassword", value)}
            value={form.confirmPassword}
          />

          {message && (
            <div className={type === "success" ? styles.success : styles.error}>
              {message}
            </div>
          )}

          <button className={styles.submit} type="submit">
            Submit
          </button>
        </form>
      </main>
      <BottomNavigation />
    </div>
  );
}

function PasswordField({ label, placeholder, value, onChange }) {
  return (
    <label className={styles.field}>
      <span>{label}</span>
      <div>
        <input
          autoComplete="new-password"
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          type="password"
          value={value}
        />
      </div>
    </label>
  );
}
