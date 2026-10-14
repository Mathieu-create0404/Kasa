import { useState } from 'react'
import Vector from '../../assets/Vector.png'
import './Collapse.scss'

const Collapse = ({ children, title, description }) => {

    const [isOpen, setOpen] = useState(false)
    const [hasInteracted, setHasInteracted] = useState(false)

    return (
        <div className="collapse">
            <h2>
                <button 
                type="button" 
                className="collapseButton">
                    {title}
                    <span 
                    className={isOpen ? "chevron open" : "chevron"}
                    onClick={() => {
                    setOpen(!isOpen)
                    setHasInteracted(true)
                    }}>
                        <img src={Vector} alt="" />
                    </span>
                </button>
            </h2>
            <div className={ !hasInteracted ? "contentInitial" : isOpen ? "contentOpen" : "contentClose" }>
                <div className="collapseContent">{children}</div>
            </div>
        </div>
    )
}

export default Collapse