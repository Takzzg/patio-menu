import { Link } from 'react-router-dom'
import './Navbar.sass'

function Navbar() {
    return (
        <nav className="Navbar">
            <Link to="/">Home</Link>
            <Link to="/carritos">Carritos</Link>
        </nav>
    )
}

export default Navbar
