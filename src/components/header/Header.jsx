import { NavLink } from 'react-router-dom'
import logo1 from '../../assets/K.png'
import logo2 from '../../assets/house.png'
import logo3 from '../../assets/S.png'
import logo4 from '../../assets/a.png'

const Header = () => {
    return (
        <header className="header">
            <img src={logo1} alt="Lettre K" />
            <img src={logo2} alt="Logo d'une maison" />
            <img src={logo3} alt="Lettre S" />
            <img src={logo4} alt="Lettre a" />
            <nav>
                <NavLink to="/" end className="nav-link">Accueil</NavLink>
                <NavLink to="/a-propos" className="nav-link">A propos</NavLink>
            </nav>
        </header>
    )
}

export default Header