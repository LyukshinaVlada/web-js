import React, { useEffect, useState } from "react";
import './For_b.css';

export default function For_b() {
  const [auctions, setAuctions] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    setAuctions([
      { id: 101, item_name: 'BMW X5', winner_id: null },
      { id: 102, item_name: 'Audi Q7', winner_id: null },
      { id: 103, item_name: 'Mercedes GLC', winner_id: null },
    ]);
  }, []);

  const handleBid = async (auctionId) => {
    if (!currentUser) return alert("Сначала войдите");

    try {
      const res = await fetch(`http://127.0.0.1:8000/auction/bid/${auctionId}/${currentUser.user_id}`, {
        method: "POST"
      });

      const data = await res.json();
      alert(data.message || "Ставка принята");

      setAuctions(prev => prev.map(a => a.id === auctionId ? { ...a, winner_id: currentUser.user_id } : a));
    } catch (err) {
      console.error(err);
      alert("Ошибка при ставке");
    }
  };

  return (
    <div className="for-b">
      <h1>Аукцион для бизнеса</h1>
      <div className="cards">
        {auctions.map(car => (
          <div className="card" key={car.id}>
            <h3>{car.item_name}</h3>
            <p>Победитель: {car.winner_id ? currentUser.email : "Нет"}</p>
            <button onClick={() => handleBid(car.id)}>Сделать ставку</button>
          </div>
        ))}
      </div>
    </div>
  );
}
