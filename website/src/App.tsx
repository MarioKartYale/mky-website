import { Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/navbar'
import Home from './pages/home'
import Events from './pages/events'
import Leaderboard from './pages/leaderboard'
import Archive from './pages/archive'

function App() {
  return (
    <>
      <Navbar/>
      <div className="page">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/leaderboard" element={<Leaderboard/>}/>
          <Route path="/archive" element={<Archive/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
