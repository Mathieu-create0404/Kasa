import './Banner.scss'

const Banner = ({ image, children }) => {

    return (
        <section className="banner" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})` }}>
            {children}
        </section>
    )
}

export default Banner