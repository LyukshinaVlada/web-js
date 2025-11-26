import React from "react"
import { useNavigate } from "react-router-dom"
import "./Nav.css"

export default function Nav() {
  const navigate = useNavigate()

  return (
    <>
      {/* Кнопка открыть меню */}
      <label htmlFor="nav-toggle" className="menu-btn">☰</label>

      {/* Боковое меню */}
      <nav className="sidebar">
        <label htmlFor="nav-toggle" className="close-btn">✕</label>

        <h2 className="nav-logo">
          <a href="/">VinilHub</a>
        </h2>

        <ul>
          <li><button onClick={() => navigate('/Main')}>Главная</button></li>
          <li><button onClick={() => navigate('/For_b')}>Для бизнеса</button></li>
          <li><button onClick={() => navigate('/For_p')}>Для людей</button></li>
          <li><button onClick={() => navigate('/Application')}>Заявки</button></li>
          <li><button onClick={() => navigate('/CreateAuction')}>Создать</button></li>
        </ul>
      </nav>
    </>
  )
}
