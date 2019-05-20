import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <footer>
      <div>
        <a src="https://www.instagram.com/harryyork97/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} className="border-icon" />
        </a>
        <a src="https://www.linkedin.com/in/harry-york/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="border-icon" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
