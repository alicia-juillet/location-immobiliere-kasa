import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Home from "./pages/Home/main"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/main"
import About from "./pages/About/main"
import Footer from "./components/Footer/main"
import "./styles/main.scss"
import Error from "./pages/Error/main"
import Property from "./pages/Property/main"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/property/:id" element={<Property />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </StrictMode>
)
