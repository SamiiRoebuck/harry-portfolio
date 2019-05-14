import React from 'react';
import logo from '../images/logo.png'
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (

      <nav className="navbar">
        <span className="navbar-toggle" id="js-navbar-toggle" onClick={this.handleClick}>
        <FontAwesomeIcon icon={faBars} />
        </span>
        <img src={logo} height="40"></img>
        <ul className={`main-nav ${this.state.isToggleOn ? 'not-active' : 'active'}`}  id="js-menu">
          <li>
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li>
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li>
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li>
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li>
            <Link to="/" className="nav-links">Home</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar