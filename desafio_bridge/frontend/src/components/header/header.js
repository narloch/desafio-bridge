import "./styles.css"
import React from "react";
import { Link } from 'react-router-dom'

function Header(props) {    
    return (
        <div>
        <header className="header">
        <h1>Desafio Bridge</h1>
        <Link to="/">Home</Link>   
        <Link to="/repo">Repositório</Link>
        </header>
        </div>
    );
}

export default Header
