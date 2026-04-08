import './App.css'
import Header from './components/Header'
import About from './components/About'

function App() {
  return (
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
    </div>
  )
}

export default App