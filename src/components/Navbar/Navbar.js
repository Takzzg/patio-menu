import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './Navbar.sass'

function Navbar() {
    let location = useLocation()
    useEffect(() => {
        if (location.pathname === '/')
            document
                .getElementById('navbar')
                .getElementsByClassName('navbar-link')
                .item(0)
                .classList.add('active')
        else
            document
                .getElementById('navbar')
                .getElementsByClassName('navbar-link')
                .item(1)
                .classList.add('active')
    })

    const updateButton = (e) => {
        let links = document
            .getElementById('navbar')
            .getElementsByClassName('navbar-link')
        Array.from(links).forEach((link) => link.classList.remove('active'))
        e.target.classList.add('active')
    }

    return (
        <nav id="navbar">
            <Link onClick={updateButton} className="navbar-link" to="/">
                Inicio
            </Link>
            <Link onClick={updateButton} className="navbar-link" to="/carritos">
                Carritos
            </Link>
        </nav>
    )
}

export default Navbar
