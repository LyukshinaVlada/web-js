import React from "react";
import './Application.css';

export default function Application() {
    const mockApplications = [
        { type: 'Наклейка “Flame”', status: 'Активная' },
        { type: 'Автомобиль BMW X5', status: 'Выиграна' },
        { type: 'Наклейка “Skull”', status: 'Завершена' },
    ];

    return (
        <div className="applications">
            <h1>Мои заявки</h1>
            <div className="app-cards">
                {mockApplications.map((app, idx) => (
                    <div className="app-card" key={idx}>
                        <h3>{app.type}</h3>
                        <p>Статус: {app.status}</p>
                        <button>Подробнее</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
