import './Banner.scss'

const Banner = ({ image, children, variant = "home" }) => {

    return (
        <section 
        className={`banner ${variant}`} 
        style={{ backgroundImage: variant === "home" ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`
        : `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`}}>
            {children}
        </section>
    )
}

export default Banner