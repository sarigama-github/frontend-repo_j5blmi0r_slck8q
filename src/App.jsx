import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Doctor from './components/Doctor'
import Booking from './components/Booking'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Doctor />
        <Booking />
      </main>
      <Footer />
    </div>
  )
}

export default App
