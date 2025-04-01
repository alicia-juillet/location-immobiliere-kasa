import "./Error.scss"
import errorImg from "../../assets/Logo/error.png"
import { NavLink } from "react-router"

function Error() {
  return (
    <div className="error">
      <img src={errorImg} alt="error" className="error-img"></img>
      <h1>
        <span>Oups! La page que </span>
        <span>vous demandez n'existe pas</span>
      </h1>
      <nav>
        <NavLink to="/" className="home-link">
          Retourner sur la page d'accueil
        </NavLink>
      </nav>
    </div>
  )
}

export default Error
