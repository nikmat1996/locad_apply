import React from 'react';
import '../styles/navbar.css'

function Navbar() {
  return (
      <section className="navbar_section">
          <nav>
              <div className="nav_logo">
                <img width="160" height="31" src="https://golocad.com/wp-content/uploads/2022/08/LOCAD-LOGO-2022.svg" alt="logo" data-lazy-src="https://golocad.com/wp-content/uploads/2022/08/LOCAD-LOGO-2022.svg" data-ll-status="loaded"></img>
              </div>
              <ul className="nav_links">
                  <li>Services</li>
                  <li>About Us</li>
                  <li>Resources</li>
                  <li>Pricing</li>
                  <li>Support</li>
              </ul>
              <div className="nav_auth">
                  <button className='nav_login'>Log In</button>
                  <button>Sign Up</button>
              </div>
          </nav>
      </section>
  )
}

export default Navbar