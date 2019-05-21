import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import styles from '../styles/Footer.module.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://www.instagram.com/harryyork97/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/harry-york/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
