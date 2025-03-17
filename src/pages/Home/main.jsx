import Banner from "../../components/Banner/main"
import imgHome from "../../assets/img/img-accueil.png"

function Home() {
  return (
    <>
      <Banner>
        <div className="banner-style">
          <img src={imgHome} alt="plage" className="img-banner" />
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </Banner>
    </>
  )
}

export default Home
