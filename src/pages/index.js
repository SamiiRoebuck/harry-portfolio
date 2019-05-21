import React from "react"
import NavBar from "../components/NavBar"
import PageBorder from "../components/PageBorder"
import Footer from "../components/Footer"

import "../styles/globals.scss"

export default () => (
  <React.Fragment>
    <NavBar />
    <main>
      <div className="grid-container">
        <div className="long-boi" />
        <div className="upper-boi" />
        <div className="lower-boi" />
      </div>
    </main>
    
    <Footer />
  </React.Fragment>
)
