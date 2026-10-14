import { useParams } from 'react-router-dom'
import Logements from '../../data/logements.json'
import Error from '../Error/Error.jsx'
import Collapse from '../../components/Collapse/Collapse.jsx'
import SlideShow from '../../components/SlideShow/SlideShow.jsx'
import Rating from '../../components/Rating/Rating.jsx'
import './Logement.scss'

const Logement = () => {
   
    const { id } = useParams()

    const logement = Logements.find((logement) => 
        logement.id === id 
    )

    if (!logement) {
        return <Error />
    }
   
    return (
        <section className="logement">
            <SlideShow pictures={logement.pictures}/>
            <div className="logementContent">
                <div className="logementInfo">
                    <h2>{logement.title}</h2>
                    <p>{logement.location}</p>
                    <div className="flexTag">
                        {logement.tags.map((tag) => (
                            <p key={tag}>
                                {tag}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="logementHost">
                    <div className="hostInfo">
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt="Portrait de l'hôte" />
                    </div>
                    <Rating rating={logement.rating} />
                </div>
            </div>
            <div className="collapseLogement">
                <Collapse title="Description">
                    <p>{logement.description}</p>
                </Collapse>
                <Collapse title="Equipements">
                    <ul>
                        {logement.equipments.map((equipement) => (
                            <li key={equipement}>
                                {equipement}
                            </li>
                        ))}
                    </ul>
                </Collapse>
            </div>
            
        </section>
    )
}

export default Logement