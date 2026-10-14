import './Rating.scss'

const Rating = ({ rating }) => {

    const ratingBoard = [1, 2, 3, 4, 5]

    return (
        <div className="rating">
            {ratingBoard.map((star) => (
               <span key={star}>
                    <i className={`fa-solid fa-star ${star <= rating ? "active" : ""}`}
                    ></i>
               </span> 
            ))}
        </div>
    )
}

export default Rating