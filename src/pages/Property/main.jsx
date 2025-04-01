import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Slideshow from "../../components/Slideshow/main"
import Collapse from "../../components/Collapse/main"
import Star from "../../assets/Logo/star.png"
import EmptyStar from "../../assets/Logo/empty-star.png"
import "./Property.scss"
import "../../components/Collapse/Collapse.scss"

function Property() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [location, setLocation] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/logements.json")
        const data = await response.json()

        const selectedLocation = data.find((loc) => loc.id === id)
        if (!selectedLocation) {
          navigate("/404", { replace: true })
        } else {
          setLocation(selectedLocation)
        }
      } catch (error) {
        console.error("Une erreur est survenue", error)
      }
    }

    fetchData()
  }, [id, navigate])

  if (!location) return null

  const renderStars = (rating) => {
    const maxStars = 5
    const starsArray = [...Array(maxStars)]

    return starsArray.map((_, index) => (
      <img
        key={index}
        src={index < rating ? Star : EmptyStar}
        alt={index < rating ? "Star" : "Empty Star"}
        className="property-star"
      />
    ))
  }

  return (
    <section className="carousel-container">
      <Slideshow title={location.title} pictures={location.pictures} />
      <div className="property-header">
        <div className="property-infos">
          <h1 className="property-title">{location.title}</h1>
          <h2 className="property-location">{location.location}</h2>
          <div className="property-tags">
            {location.tags.map((tag, index) => (
              <span key={index} className="property-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="property-host">
          <div className="property-host-info">
            <div className="property-name">
              {location.host.name.split(" ").map((part, index) => (
                <div key={index}>{part}</div>
              ))}
            </div>
            <img
              src={location.host.picture}
              alt={location.host.name}
              className="property-picture"
            />
          </div>
          <div className="property-rating">
            {renderStars(parseInt(location.rating))}
          </div>
        </div>
      </div>

      <div className="collapse-container">
        <Collapse title="Description">
          <p>{location.description}</p>
        </Collapse>
        <Collapse title="Equipements">
          <p>
            {location.equipments.map((equipment, index) => (
              <span key={index}>
                {equipment}
                <br />
              </span>
            ))}
          </p>
        </Collapse>
      </div>
    </section>
  )
}

export default Property
