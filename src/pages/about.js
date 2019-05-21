import React from "react"
import NavBar from "../components/NavBar"
import PageBorder from "../components/PageBorder"
import TypedHeader from "../components/TypedHeader"
import about from "../images/about.jpg"
import Footer from "../components/Footer"

import "../styles/globals.scss"

export default () => (
  <React.Fragment>
    <NavBar />
    <PageBorder />
    <main>
      <div className="grid-container-about">
        <div className="long-boi"><img src={about} alt="harry york"/></div>
        <div className="upper-boi">
          <TypedHeader />
        </div>
        <div className="lower-boi"></div>
      </div>
    </main>
    <Footer />
  </React.Fragment>
)
