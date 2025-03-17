import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Home from "./pages/Home/main"
import { BrowserRouter, Routes, Route } from "react-router"
import Header from "./components/Header/main"
import About from "./pages/About/main"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
)
