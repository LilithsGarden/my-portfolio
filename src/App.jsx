import './App.css'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <section>
          <h2>About Me</h2>
          <p>I am a passionate software engineer with experience in building web applications, Data Analysis, Video Editing and Graphics.</p>
        </section>

        <section>
          <h2>Projects</h2>
          <p>Here are some of my projects:</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>Feel free to reach out to me!
            <br />Email: chummie2005@gmail.com
          </p>
        </section>
      </main>
    </div>
  )
}

export default App