import React from "react"

import NavBar from "../components/NavBar"
import TypedHeader from "../components/TypedHeader"
import Footer from "../components/Footer"
import Grid from "../components/Grid"
import GridSection from "../components/GridSection"

import about from "../images/about.jpg"

import "../styles/globals.scss"
import { Link } from "gatsby"

import objectFitImages from 'object-fit-images';

objectFitImages();

export default () => (
  <React.Fragment>
    <NavBar />
    <main>
      <Grid gridType="gridUpperSmall">
        <GridSection gridsectionclass="longBoi">
          <img src={about} alt="harry york" id="aboutImage" data-object-fit="cover" />
        </GridSection>
        <GridSection gridsectionclass="upperBoi">
          <TypedHeader />
        </GridSection>
        <GridSection gridsectionclass="lowerBoi">
          <h2>Hey There!</h2>
          <p>
            I'm Harry, I'm a passionate product designer/design enginneer with a
            love for all things eco-friendly!
          </p>
          <p>
            I'm a professionally certified SolidWorks user and a proficient user
            of Fusion 360, 3DSMAX, and Adobe Creative Cloud 
          </p>
          <p>
            I have interests in furniture and prop making, eco-design, packaging
            design and 3D modelling.
          </p>
          <br/>
          <h3 className="text-center">Want to chat about working together?</h3>
          <Link to="/contact" className="btn">
            Contact me here
          </Link>
        </GridSection>
      </Grid>
    </main>
    <Footer />
  </React.Fragment>
)
