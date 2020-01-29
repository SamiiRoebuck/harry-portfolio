import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedin, faTwitter, faFacebookSquare } from "@fortawesome/free-brands-svg-icons"


function Footer() {
  return (
    <footer>
      <div>
        <a href="https://www.instagram.com/harryyorkdesign/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/harry-york/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/harryyorkdesign" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.facebook.com/harryyorkdesign" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
