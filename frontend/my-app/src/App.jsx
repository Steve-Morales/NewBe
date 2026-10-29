import './App.css'

function App() {
  return (
    <>
      <section id="center">
        <h1>Get started</h1>
        <div class="flex">
          <img class="w-14" style={{ filter: 'brightness(0) invert(1)' }} src="https://img.icons8.com/ios/50/000000/github.png" alt="GitHub Icon" />
          <input class="w-64 flex-none" placeholder="Enter Git repository URL" />
        </div>
      </section>
    </>
  )
}

export default App
