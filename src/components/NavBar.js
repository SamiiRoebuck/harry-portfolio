import React from "react"
import logo from "../images/logo.png"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

import styles from "../styles/NavBar.module.scss"

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: true, icon: faBars }

    // This binding is necessary to make `this` work in the callback
    this.handleClickBurger = this.handleClickBurger.bind(this)
  }

  handleClickBurger() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
      icon: state.icon === faTimes ? faBars : faTimes
    }))

  }
  
  render() {
    return (
      <nav className={styles.navbar}>
        <span
          className={styles.navbarToggle}
          id={styles.jsNavbarToggle}
          onClick={this.handleClickBurger}
        >
          <FontAwesomeIcon icon={this.state.icon} />
        </span>
        <Link to="/">
        <img src={logo} height="50" alt='logo'/>
        </Link>
        <ul
          className={`${styles.mainNav} ${
            this.state.isToggleOn ? `${styles.notActive}` :  `${styles.active}`
          }`}
          id="js-menu"

          onClick={this.handleClickNav}
        >
          <li>
            <Link to="/" className={styles.navLinks} activeClassName={styles.activeLink}>
              Work
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.navLinks} activeClassName={styles.activeLink}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className={styles.navLinks} activeClassName={styles.activeLink}>
              Contact
            </Link>
          </li>
          <li> 
            <a href="https://docs.google.com/document/d/1Q2SPrZtmOcyH8h51dm0H5JdfXU2_vDeTnGE2Ime0rZc/export?format=pdf" target="_blank" rel="noopener noreferrer" className={styles.navLinks}>
              Download Portfolio
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
