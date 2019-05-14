import React from "react"
import logo from "../images/logo.png"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: true }

    // This binding is necessary to make `this` work in the callback
    this.handleClickBurger = this.handleClickBurger.bind(this)
  }

  handleClickBurger() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
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
          <FontAwesomeIcon icon={faBars} />
        </span>
        <img src={logo} height="70" />
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
            <Link to="/" className="nav-links">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-links">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-links">
              Download Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
