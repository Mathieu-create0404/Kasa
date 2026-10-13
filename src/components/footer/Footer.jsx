import logo1 from '../../assets/K.png'
import logo2 from '../../assets/house.png'
import logo3 from '../../assets/S.png'
import logo4 from '../../assets/a.png'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerImg">
                <img src={logo1} alt="Lettre K" />
                <img src={logo2} alt="Logo d'une maison" />
                <img src={logo3} alt="Lettre S" />
                <img src={logo4} alt="Lettre a" />
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer