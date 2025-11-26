import React from "react"
import { useNavigate } from "react-router-dom"
import './Main.css'

export default function Main() {
    const navigate = useNavigate();

    return (
        <div className="main-page">
            {/* Hero блок */}
            <section className="hero">
                <h1>VinilHub – Аукционы автомобильных наклеек</h1>
                <p>Выигрывайте наклейки для авто или рекламные автомобили для бизнеса!</p>
                <div className="hero-buttons">
                    <button onClick={() => navigate('/For_p')}>Аукцион для людей</button>
                    <button onClick={() => navigate('/For_b')}>Аукцион для бизнеса</button>
                </div>
            </section>

            {/* Как это работает */}
            <section className="how-it-works">
                <h2>Как это работает</h2>
                <div className="steps">
                    <div className="step">
                        <h3>1. Выберите аукцион</h3>
                        <p>Для людей или для бизнеса</p>
                    </div>
                    <div className="step">
                        <h3>2. Сделайте заявку</h3>
                        <p>Укажите ваши данные и ставку</p>
                    </div>
                    <div className="step">
                        <h3>3. Получите результат</h3>
                        <p>Выиграйте наклейку или автомобиль</p>
                    </div>
                </div>
            </section>

            {/* Активные аукционы */}
            <section className="active-auctions">
                <h2>Активные аукционы</h2>
                <div className="auction-cards">
                    <div className="card">
                        <h3>Наклейка “Flame”</h3>
                        <p>Стартовая цена: $10</p>
                        <button onClick={() => navigate('/For_p')}>Перейти</button>
                    </div>
                    <div className="card">
                        <h3>Автомобиль для рекламы</h3>
                        <p>Начальная ставка: $500</p>
                        <button onClick={() => navigate('/For_b')}>Перейти</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
