import { useState } from 'react'
import './SlideShow.scss'

const SlideShow = ({ pictures }) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const displayedNumber = `${currentIndex+1} / ${pictures.length}`

    const handlePrevious = () => {
        if (currentIndex === 0) {
            setCurrentIndex(pictures.length-1)
        } else {
            setCurrentIndex(currentIndex-1)}
        }

    const handleNext = () => {
        if (currentIndex === pictures.length-1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex+1)} 
        }
        

    return (
        <div className="carousel">
            <img src={pictures[currentIndex]} alt="Photo d'un logement Kasa" />
            {pictures.length > 1 && (
                <>
                    <p>{displayedNumber}</p>
                    <button className="prev" onClick={handlePrevious}>‹</button>
                    <button className="next" onClick={handleNext}>›</button>
                </>
            )}
        </div>
    )
}

export default SlideShow