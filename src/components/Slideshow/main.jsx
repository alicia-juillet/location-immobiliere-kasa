import { useState } from "react"
import "./Slideshow.scss"
import sliderLeft from "../../assets/Logo/left.png"
import sliderRight from "../../assets/Logo/right.png"

const Slideshow = ({ pictures, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    )
  }

  return (
    <article className="carousel">
      <button className="slider prev" onClick={prevSlide}>
        <img src={sliderLeft} alt="left" />
      </button>
      <img
        src={pictures[currentIndex]}
        alt={`${title} - slide ${currentIndex + 1}`}
      />
      <button className="slider next" onClick={nextSlide}>
        <img src={sliderRight} alt="right" />
      </button>
    </article>
  )
}

export default Slideshow
