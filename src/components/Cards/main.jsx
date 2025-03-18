import "./Cards.scss"

const Card = ({ cover, title }) => {
  return (
    <article className="card">
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </article>
  )
}

export default Card
