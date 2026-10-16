import './Cards.scss'
import { Link } from 'react-router-dom'

const Cards = ({ image, title, className, id }) => {

    return (
        <Link to={`/logement/${id}`} className={`cards ${className}`}>
            <img src={image} alt={title} />
            <p>{title}</p>
        </Link>
    )
}

export default Cards