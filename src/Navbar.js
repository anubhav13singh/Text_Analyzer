import React, { useState }from 'react'
import { NavLink, Link } from 'react-router-dom'
import './navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
    <Link to="/" className="title">
     Text Analyzer
    </Link>
    <div className="menu" onClick={() => setToggle(!toggle)}>
      <MenuIcon/>
    </div>
    <ul className={toggle ? "open" : ""}>
    <li>
        <NavLink to="/" onClick={() => setToggle(false)}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/about" onClick={() => setToggle(false)}>About</NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar

