import homeBanner from '../../assets/banner.png'
import Banner from '../../components/Banner/Banner.jsx'
import Gallery from '../../components/Gallery/Gallery.jsx'

const Home = () => {
    
    return (
        <main>
            <Banner image={homeBanner}>
            <h1>Chez vous, partout et ailleurs</h1>
            </Banner>
            <Gallery /> 
        </main>
    )
}

export default Home