import { NavLink } from 'react-router-dom'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import { SearchBar } from '../index'
import './Navbar.sass'

function Navbar() {
    const toggleSearch = () => {
        document.getElementById('results').classList.toggle('active')
        document.getElementById('searchIcon').classList.toggle('active')
        document.getElementById('searchInput').focus()
    }
    const closeSearch = () => {
        document.getElementById('results').classList.remove('active')
        document.getElementById('searchIcon').classList.remove('active')
    }

    return (
        <>
            <nav id="navbar">
                <NavLink
                    activeClassName="active"
                    className="navbar-link"
                    to="/"
                    exact
                    onClick={closeSearch}
                >
                    <HomeRoundedIcon className="inicio icono" />
                </NavLink>
                <NavLink
                    activeClassName="active"
                    className="navbar-link"
                    to="/carritos"
                    onClick={closeSearch}
                >
                    <span className="carritos">Carritos</span>
                </NavLink>
                <span className="navbar-link">
                    <SearchRoundedIcon
                        className="icono"
                        id="searchIcon"
                        onClick={toggleSearch}
                    />
                </span>
            </nav>
            <SearchBar onNavigate={closeSearch} />
        </>
    )
}

export default Navbar
