import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    alert("Вы вышли из аккаунта");
  };

  return (
    <div className="header">
      {currentUser ? (
        <>
          <p>
            Вошёл: {currentUser.role === "person" ? "Пользователь" : "Бизнес"} — {currentUser.message.split(', ')[1]}
          </p>
          <button onClick={handleLogout}>Выйти</button>
        </>
      ) : (
        <>
          <p>Вы не вошли</p>
          <Link to="/Login"><button>Войти</button></Link>
          <Link to="/Registrate"><button>Регистрация</button></Link>
        </>
      )}
    </div>
  );
}
