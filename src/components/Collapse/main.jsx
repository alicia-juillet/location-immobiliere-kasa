import { useState } from "react"
import "./Collapse.scss"

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <button className="collapse-button" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <i
          className={`fas ${isOpen ? "fa-chevron-down" : "fa-chevron-up"}`}
        ></i>{" "}
        {/* Icône Font Awesome */}
      </button>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  )
}

export default Collapse
