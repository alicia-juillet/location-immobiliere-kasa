import { NavLink } from "react-router"
import logo from "../../assets/logo.png"
import "./Header.scss"

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Kasa" className="kasa-logo" />
      <nav className="link">
        <NavLink to="/" end>
          Accueil
        </NavLink>
        <NavLink to="/about" end>
          À propos
        </NavLink>
      </nav>
    </div>
  )
}
export default Header
