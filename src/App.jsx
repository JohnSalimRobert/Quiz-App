import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/QuizNavbar'
import Quiz from './components/Quiz/Quiz'
import RulesModal from './components/Modal/RulesModal'

function App() {
  const [showRules, setShowRules] = useState(true)

const handleStart = () => {
  setShowRules(!showRules)
}
  return (
    <main>
      <Navbar />
      <Quiz />
      <RulesModal open={showRules} handleStart={handleStart} />
    </main>
  )
}

export default App
