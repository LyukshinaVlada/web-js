import React, {useState} from "react"
import './Header.css'
import { useNavigate } from 'react-router-dom'

export default function Head(){
    const navigate = useNavigate();
    return(
        <header>
                <h1 class="header_title">DEMO</h1> 
                <button onClick={()=> navigate='/Login'}>Login</button>
                <h2>test</h2>
            </header>
    )
}