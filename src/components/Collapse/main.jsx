import { useState } from "react"
import "./Collapse.scss"

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <button className="collapse-button">
        {title}
        <i
          onClick={() => setIsOpen(!isOpen)}
          className={`fas ${isOpen ? "fa-chevron-down" : "fa-chevron-up"}`}
        ></i>{" "}
      </button>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  )
}

export default Collapse
