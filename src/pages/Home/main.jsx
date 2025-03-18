import Banner from "../../components/Banner/main"
import imgHome from "../../assets/img/img-accueil.png"
import Card from "../../components/Cards/main"
import { useState, useEffect } from "react"

function Home() {
  const [locations, setLocations] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/logements.json")
        const data = await response.json()
        console.log("données récupérées:", data)
        setLocations(data)
      } catch (error) {
        console.error("Une erreur est survenue", error)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <Banner>
        <div>
          <img src={imgHome} alt="plage" className="img-banner" />
          <div className="overlay"></div>
          <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
        </div>
      </Banner>
      <section className="card-container">
        {locations.map((location) => (
          <Card
            key={location.id}
            title={location.title}
            cover={location.cover}
          />
        ))}
      </section>
    </div>
  )
}

export default Home
