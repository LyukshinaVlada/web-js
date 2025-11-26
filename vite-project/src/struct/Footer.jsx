import React from "react";
import './Footer.css';

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="contacts">
                    <h3>Контакты</h3>
                    <p>Email: support@vinilhub.com</p>
                    <p>Телефон: +7 123 456 78 90</p>
                </div>
                <div className="socials">
                    <h3>Мы в соцсетях</h3>
                    <p><a href="#">Instagram</a></p>
                    <p><a href="#">Telegram</a></p>
                    <p><a href="#">VK</a></p>
                </div>
                <div className="info">
                    <h3>Информация</h3>
                    <p><a href="/Main">Главная</a></p>
                    <p><a href="/For_p">Аукцион для людей</a></p>
                    <p><a href="/For_b">Аукцион для бизнеса</a></p>
                </div>
            </div>
            <p className="copy">© 2025 VinilHub. Все права защищены.</p>
        </footer>
    )
}
