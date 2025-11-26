import { useState } from "react";

export default function CreateAuction() {
  const [itemName, setItemName] = useState("");
  const [message, setMessage] = useState("");

  const handleCreate = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/auction/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ item_name: itemName })
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(`Аукцион "${data.item_name}" создан с id ${data.id}`);
        setItemName(""); // очистка поля
      } else {
        setMessage(data.detail || "Ошибка создания аукциона");
      }
    } catch (err) {
      console.error(err);
      setMessage("Ошибка сервера");
    }
  };

  return (
    <div className="create-auction">
      <h2>Создать аукцион</h2>
      <input
        type="text"
        placeholder="Название предмета"
        value={itemName}
        onChange={e => setItemName(e.target.value)}
      />
      <button onClick={handleCreate}>Создать</button>
      {message && <p>{message}</p>}
    </div>
  );
}
