import { useState } from "react"

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
      <button onClick={prevSlide}>◀</button>
      <img
        src={pictures[currentIndex]}
        alt={`${title} - slide ${currentIndex + 1}`}
      />
      <button onClick={nextSlide}>▶</button>
    </article>
  )
}

export default Slideshow
