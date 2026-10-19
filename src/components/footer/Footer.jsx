import logo from '../../assets/LOGO.png'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerImg">
                <img src={logo} alt="logo Kasa" />
            </div>
            <p>© 2020 Kasa. All <br className="mobileBreak" /> rights reserved</p>
        </footer>
    )
}

export default Footer