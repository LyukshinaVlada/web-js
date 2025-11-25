import React from "react";
import './Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header(){
    const navigate = useNavigate();

    return(
        <header className="header">
            <h1 className="header_title">VinilHub</h1>

            <button 
                className="login-btn"
                onClick={() => navigate('/Login')}
            >
                Login
            </button>
        </header>
    )
}
