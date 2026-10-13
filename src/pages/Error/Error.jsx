import { Link } from 'react-router-dom'
import './Error.scss'

const Error = () => {
    return (
        <section className="pageError">
            <p className="error">404</p>
            <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="linkError">
                <p>Retourner sur la page d'accueil</p>
            </Link>
        </section>
    )
}

export default Error