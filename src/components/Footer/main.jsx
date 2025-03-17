import logo from "../../assets/Logo/logo-white.png"
import "./Footer.scss"

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="Kasa" className="kasa-logo" />
      <p>© 2020 Kasa, All rights reserved</p>
    </div>
  )
}

export default Footer
