import React, { useEffect, useState } from "react";
import './For_p.css';

export default function For_p() {
  const [auctions, setAuctions] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    // заглушка, позже можно заменить на fetch с бекенда
    setAuctions([
      { id: 1, item_name: 'Наклейка “Flame”', winner_id: null },
      { id: 2, item_name: 'Наклейка “Skull”', winner_id: null },
      { id: 3, item_name: 'Наклейка “Racing”', winner_id: null },
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
      // Обновить локальный список
      setAuctions(prev => prev.map(a => a.id === auctionId ? { ...a, winner_id: currentUser.user_id } : a));
    } catch (err) {
      console.error(err);
      alert("Ошибка при ставке");
    }
  };

  return (
    <div className="for-p">
      <h1>Аукцион для людей</h1>
      <div className="cards">
        {auctions.map(item => (
          <div className="card" key={item.id}>
            <h3>{item.item_name}</h3>
            <p>Победитель: {item.winner_id ? currentUser.email : "Нет"}</p>
            <button onClick={() => handleBid(item.id)}>Сделать ставку</button>
          </div>
        ))}
      </div>
    </div>
  );
}
