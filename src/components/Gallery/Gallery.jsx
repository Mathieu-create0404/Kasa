import { useState } from 'react'
import Cards from '../Cards/Cards.jsx'
import './Gallery.scss'
import Logements from '../../data/logements.json'


const Gallery = () => {

const [isOpen, setOpen] = useState(false)

    return (
        <>
            <article className="gallery">
                {(isOpen ? Logements : Logements.slice(0, 6)).map((logement, index) => (
                    <Cards className={index >= 6 ? "slideIn" : "" } key={logement.id} image={logement.cover} title={logement.title} />
                ))}
            </article>
            <button className="displayButton" onClick={() => setOpen(!isOpen)}>
                {isOpen ? "Afficher moins"  : "Afficher plus"} 
            </button>
        </>
    )
}

export default Gallery