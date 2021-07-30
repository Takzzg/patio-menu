import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
    return (
        <nav className="Navbar">
            <div className="logo-container">
                <Link to="/">Home</Link>
            </div>
            <div className="links">
                <Link to="/carritos">Carritos</Link>
                <Link to="/contacto">Contacto</Link>
            </div>

            <div className="buscar">
                <button className="buscar">asd</button>
            </div>
        </nav>
    )
}

export default Navbar
