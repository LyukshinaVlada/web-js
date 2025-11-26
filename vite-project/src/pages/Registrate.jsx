import { useState } from "react";
import "./Registrate.css";

export default function Registrate() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // user или business
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(`Пользователь ${data.email} успешно зарегистрирован!`);
      } else {
        setMessage(data.detail || "Ошибка регистрации");
      }
    } catch (err) {
      console.error(err);
      setMessage("Ошибка сервера");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} />
      <select value={role} onChange={e => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="business">Business</option>
      </select>
      <button onClick={handleRegister}>Зарегистрироваться</button>
      <p className="register-message">{message}</p>
    </div>
  );
}
