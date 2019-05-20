import React from "react"
import NavBar from "../components/NavBar"
import PageBorder from "../components/PageBorder"
import about from "../images/about.jpg"

import "../styles/globals.scss"

export default () => (
  <React.Fragment>
    <NavBar />
    <PageBorder />
    <main>
      <section className="about-container">
      <div>
        <img src={about} alt="Harry York" />
        </div>
        <div>
          <p>Lorem</p>
        </div>
      </section>
    </main>
  </React.Fragment>
)
