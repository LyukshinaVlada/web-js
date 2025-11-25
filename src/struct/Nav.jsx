import React from "react"
import { useNavigate } from 'react-router-dom'
import './Nav.css'

export default function Nav(){
  const navigate = useNavigate();
    return(
        <>
        <input type="checkbox" id="nav-toggle" hidden />
      <nav className="nav">
        <label htmlFor="nav-toggle" className="nav-toggle">
          MENU
        </label>
        <h2 className="logo">
          <a href="/">VinilHub</a>
        </h2>
        <ul>
          <li><button onClick={() => navigate('/Main')}>Главная</button></li>
          <li><button onClick={() => navigate('/For_b')}>For_b</button></li>
          <li><button onClick={() => navigate('/For_p')}>For_p</button></li>
          <li><button onClick={() => navigate('/Application')}>Application</button></li>
        </ul>
      </nav>
      </>
    )
}