import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="container mt-5 text-center">
        <h2>Find Blood Donors Easily</h2>
        <p>Connect with nearby donors instantly</p>
      </div>

      <Footer />
    </>
  )
}

export default Home