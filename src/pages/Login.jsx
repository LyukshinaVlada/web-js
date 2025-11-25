import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

export default function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });

    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(form.password !== form.confirm){
            alert("Пароли не совпадают!");
            return;
        }
        // Тут можно добавить отправку данных на сервер
        alert(`Регистрация успешна для ${form.name}`);
        navigate('/Main');
    }

    return (
        <div className="register-page">
            <h1>Регистрация</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Имя" value={form.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Пароль" value={form.password} onChange={handleChange} required />
                <input type="password" name="confirm" placeholder="Повторите пароль" value={form.confirm} onChange={handleChange} required />
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    )
}
