import React from "react";
import './For_b.css';

export default function For_b() {
    const mockCars = [
        { name: 'BMW X5', start: 500 },
        { name: 'Audi Q7', start: 450 },
        { name: 'Mercedes GLC', start: 480 },
    ];

    return (
        <div className="for-b">
            <h1>Аукцион для бизнеса</h1>
            <div className="cards">
                {mockCars.map((car, idx) => (
                    <div className="card" key={idx}>
                        <h3>{car.name}</h3>
                        <p>Начальная ставка: ${car.start}</p>
                        <button>Сделать ставку</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
