import React from "react"
import './Make.css'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'


export default function Make({children}){
    return(
        <>
        <Nav />
        <main>
            <article>
                <Header />
                <section>
                    {children}
                </section>
                <Footer />
            </article>
        </main>
        </>
    )
}