import { useState } from 'react'
import Vector from '../../assets/Vector.png'
import './Collapse.scss'

const Collapse = ({ children, title }) => {

    const [isOpen, setOpen] = useState(false)

    return (
        <div className="collapse">
            <h2>
                <button 
                type="button" 
                className="collapseButton">
                    {title}
                    <span 
                    className={isOpen ? "chevron open" : "chevron"}
                    onClick={() => setOpen(!isOpen)}>
                        <img src={Vector} alt="" />
                    </span>
                </button>
            </h2>
            <div className={isOpen ? "contentOpen" : "contentClose" }>
                <div className="collapseContent">{children}</div>
            </div>
        </div>
    )
}

export default Collapse