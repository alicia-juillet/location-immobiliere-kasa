import "./Cards.scss"

const Card = ({ title, picture }) => {
  return (
    <div className="cards">
      <img src={picture} alt="Location" />
      <span>{title}</span>
    </div>
  )
}

export default Card
