import React from "react"
import NavBar from "../components/NavBar"
import TypedHeader from "../components/TypedHeader"
import Footer from "../components/Footer"

import about from "../images/about.jpg"

import "../styles/globals.scss"

export default () => (
  <React.Fragment>
    <NavBar />
    <main>
      <div className="grid-container-about">
        <div className="long-boi">
          <img src={about} alt="harry york" />
        </div>
        <div className="upper-boi">
          <TypedHeader />
        </div>
        <div className="lower-boi">
          <h2>Hey There!</h2>
          <p>
            I'm Harry, I'm a passionate product designer/design enginneer with a
            love for all thing eco-friendly!
            </p>
            <p>
             I'm a professionally certified SolidWorks user and a proficient user of Fusion 360, 3DSMAX, and Adobe Creative Cloud.
          </p>
          <p>
            I have interests in furniture and prop design, eco-design, packaging design and 3D modelling.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </React.Fragment>
)
