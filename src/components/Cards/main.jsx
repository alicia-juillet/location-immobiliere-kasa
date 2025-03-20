import "./Cards.scss"
import { useNavigate } from "react-router-dom"

const Card = ({ id, cover, title }) => {
  const navigate = useNavigate()

  return (
    <article className="card" onClick={() => navigate(`/property/${id}`)}>
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </article>
  )
}

export default Card
