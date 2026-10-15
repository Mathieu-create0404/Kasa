import { NavLink } from 'react-router-dom'
import logo from '../../assets/LOGO.png'
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div>
                <img src={logo} alt="Logo Kasa" />
            </div>
            <nav>
                <NavLink to="/" end className="nav-link">Accueil</NavLink>
                <NavLink to="/a-propos" className="nav-link">A propos</NavLink>
            </nav>
        </header>
    )
}

export default Header