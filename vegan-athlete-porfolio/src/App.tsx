import { About } from './components/About'
import { Brands } from './components/Brands'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Hyrox } from './components/Hyrox'
import { MobileBottomNav } from './components/MobileBottomNav'
import { Navbar } from './components/Navbar'
import { Places } from './components/Places'

export default function App() {
  return (
    <div className="min-h-svh bg-[var(--bg)] text-[var(--fg)]">
      <Navbar />
      <main className="pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <Hero />
        <About />
        <Hyrox />
        <Places />
        <Gallery />
        <Brands />
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  )
}
