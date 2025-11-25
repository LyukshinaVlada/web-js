import React from "react"
import './Make.css'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'

export default function Make({ children }) {
    return (
        <>
            {/* Для управления выездом меню */}
            <input type="checkbox" id="nav-toggle" hidden />

            <Nav />

            <div className="page">
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}
