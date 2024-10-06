// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/QuizNavbar'
import Quiz from './components/Quiz/Quiz'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <Quiz />
    </main>
  )
}

export default App
