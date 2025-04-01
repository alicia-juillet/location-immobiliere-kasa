import logo from "../../assets/Logo/logo-white.png"
import "./Footer.scss"

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="Kasa" className="kasa-logo" />
      <p>
        <span>© 2020 Kasa, All</span>
        <span> rights reserved</span>
      </p>
    </div>
  )
}

export default Footer
