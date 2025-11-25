import React from "react";
import './For_p.css';

export default function For_p() {
    const mockData = [
        { name: 'Наклейка “Flame”', price: 10 },
        { name: 'Наклейка “Skull”', price: 15 },
        { name: 'Наклейка “Racing”', price: 20 },
    ];

    return (
        <div className="for-p">
            <h1>Аукцион для людей</h1>
            <div className="cards">
                {mockData.map((item, idx) => (
                    <div className="card" key={idx}>
                        <h3>{item.name}</h3>
                        <p>Стартовая цена: ${item.price}</p>
                        <button>Сделать ставку</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
