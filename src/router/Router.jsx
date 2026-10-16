import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout.jsx'
import Home from '../pages/Home/Home.jsx'
import Logement from '../pages/Logement/Logement.jsx'
import About from '../pages/About/About.jsx'
import Error from '../pages/Error/Error.jsx'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/a-propos" element={<About />} />
                    <Route path="/logement/:id" element={<Logement />} />
                    <Route path="/404" element={<Error />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router