import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Slideshow from "../../components/Slideshow/main"

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
      <h1>{location.title}</h1>
      <p>{location.description}</p>
    </section>
  )
}

export default Property
