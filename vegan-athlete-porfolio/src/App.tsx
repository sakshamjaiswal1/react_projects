import { About } from './components/About'
import { Brands } from './components/Brands'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Hyrox } from './components/Hyrox'
import { Navbar } from './components/Navbar'
import { Places } from './components/Places'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-svh bg-[var(--bg)] text-[var(--fg)]">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Hyrox />
        <Places />
        <Gallery />
        <Brands />
      </main>
      <Footer />
    </div>
  )
}
