import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"

export default function App() {
  return (
    <main className="main">
      <Navbar/>
      <Hero/>
      <Projects/>
      <Newsletter/>
      <Footer/>
    </main>
  )
}
