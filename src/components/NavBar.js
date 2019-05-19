import React from "react"
import logo from "../images/logo.png"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

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
      icon: state.icon == faTimes ? faBars : faTimes
    }))
  }


  render() {
    return (
      <nav className="navbar">
      <div className="hoverLines"></div>
        <span
          className="navbar-toggle"
          id="js-navbar-toggle"
          onClick={this.handleClickBurger}
        >
          <FontAwesomeIcon icon={this.state.icon} />
        </span>
        <img src={logo} height="70" alt='logo'/>
        <ul
          className={`main-nav ${
            this.state.isToggleOn ? "not-active" : "active"
          }`}
          id="js-menu"

          onClick={this.handleClickNav}
        >
          <li>
            <Link to="/" className="nav-links" activeClassName="active-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-links" activeClassName="active-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-links" activeClassName="active-link">
              Contact
            </Link>
          </li>
          <li>
            <a href="/" className="nav-links">
              Download Portfolio
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
