import './Cards.scss'

const Cards = ({ image, title, className }) => {

    return (
        <div className={`cards ${className}`}>
            <img src={image} alt={title} />
            <h2>{title}</h2>
        </div>
    )
}

export default Cards