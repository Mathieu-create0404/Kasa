import Cards from '../Cards/Cards.jsx'
import './Gallery.scss'
import Logements from '../../data/logements.json'

const Gallery = () => {



    return (
        <article className="gallery">
            {Logements.map((logement) => (
                <Cards key={logement.id} image={logement.cover} title={logement.title} />
            ))}
        </article>
    )
}

export default Gallery