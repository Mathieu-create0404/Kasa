

const Cards = ({ image, title }) => {

    return (
        <div className="cards">
            <img src={image} alt={title} />
            <h2>{title}</h2>
        </div>
    )
}

export default Cards