import { Outlet } from 'react-router-dom'
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import './Layout.scss'

const Layout = () => {
    return (
        <div className="layout">
            <Header />

            <main>
                <Outlet />
            </main>
            
            <Footer />

        </div>
    )
}

export default Layout 