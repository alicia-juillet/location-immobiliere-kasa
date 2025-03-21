import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Slideshow from "../../components/Slideshow/main"
import Collapse from "../../components/Collapse/main"
import "./Property.scss"

function Property() {
  const { id } = useParams()
  const [location, setLocation] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/logements.json")
        const data = await response.json()

        const selectedLocation = data.find((loc) => loc.id === id)
        setLocation(selectedLocation)
      } catch (error) {
        console.error("Une erreur est survenue", error)
      }
    }

    fetchData()
  }, [id])

  if (!location) {
    return <h2>Propriété non trouvée</h2>
  }

  return (
    <section className="carousel-container">
      <Slideshow title={location.title} pictures={location.pictures} />
      <h1 className="property-title">{location.title}</h1>
      <h2 className="property-location">{location.location}</h2>
      <p className="property-name">{location.host.name}</p>
      <p className="property-picture-name">{location.host.picture}</p>
      <p className="property-tags">{location.tags}</p>
      <p className="property-rating">{location.rating}</p>
      <Collapse title="Description">
        <p>{location.description}</p>
      </Collapse>
      <Collapse title="Equipements">
        <p>{location.equipments}</p>
      </Collapse>
    </section>
  )
}

export default Property
