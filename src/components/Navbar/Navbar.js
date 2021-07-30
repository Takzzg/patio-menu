import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/carritos">Carritos</Link>
            <Link to="/contacto">Contacto</Link>
        </nav>
    )
}

export default Navbar
