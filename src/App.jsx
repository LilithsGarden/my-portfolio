import './App.css'
import Header from './components/Header'
import About from './components/About'
import ThemeToggle from './components/ThemeToggle'
import ThemeIndicator from './components/ThemeIndicator'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />


        <main>
          <About />


          <section>
            <h2>Projects</h2>
            <p>Coming soon so stay tuned...</p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>Coming soon...</p>
          </section>
        </main>

        {/* Theme toggle button */}
        <ThemeToggle />
        <ThemeIndicator />
      </div>
    </ThemeProvider>
  )
}

export default App