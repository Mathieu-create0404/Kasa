import homeBanner from '../../assets/banner.webp'
import Banner from '../../components/Banner/Banner.jsx'
import Gallery from '../../components/Gallery/Gallery.jsx'
import './Home.scss';

const Home = () => {
    
    return (
        <main>
            <Banner image={homeBanner}>
            <h1>Chez vous,<br className="mobileBreak" /> partout et ailleurs</h1>
            </Banner>
            <Gallery /> 
        </main>
    )
}

export default Home