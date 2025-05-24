import { Link } from 'react-router-dom'
import { useState } from 'react'
import './index.css'
import Hamburger from '../../icons/hamburger'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const checkReload = (pathname: String) => {
    setIsOpen(false);

    if (window.location.pathname == `/${pathname}`) {
      window.location.reload();
    }
  }

  return (
    <>
      <div className="container">
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
          <div className="navbar-logo">
            <Link to="/" onClick={() => checkReload('')}>
              <img src="/mky-logo.png" alt="Logo" />
              Mario Kart Yale
            </Link>
          </div>
          <ul className="navbar-links">
            <li>
              <Link to="/leaderboard" onClick={() => checkReload('leaderboard')}>
                leaderboard
              </Link>
            </li>
            <li>
              <Link to="/events" onClick={() => checkReload('events')}>
                events
              </Link>
            </li>
            <li>
              <Link to="/archive" onClick={() => checkReload('archive')}>
                archive
              </Link>
            </li>
          </ul>

          <div className="hamburger" onClick={toggleMenu}>
            <Hamburger/>
          </div>
        </nav>
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <ul className="menu-links">
            <li>
              <Link to="/leaderboard" onClick={() => checkReload('leaderboard')}>
                leaderboard
              </Link>
            </li>
            <li>
              <Link to="/events" onClick={() => checkReload('events')}>
                events
              </Link>
            </li>
            <li>
              <Link to="/archive" onClick={() => checkReload('archive')}>
                archive
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => checkReload('')}>
                home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar