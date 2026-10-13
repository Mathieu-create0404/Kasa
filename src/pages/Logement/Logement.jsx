import { useParams, Navigate } from 'react-router-dom'
import Logements from '../../data/logements.json'
import Error from '../Error/Error.jsx'

const Logement = () => {
   
    const { id } = useParams()

    const logementId = Logements.find((logement) => 
        logement.id === id 
    )

    if (!logementId) {
        return <Error />
    }
   
    return (
        <div>
        </div>
    )
}

export default Logement