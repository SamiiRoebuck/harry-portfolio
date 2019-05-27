import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Grid from "../components/Grid"
import GridSection from "../components/GridSection"

import "../styles/globals.scss"
import "../styles/ProjectPage.module.scss"

export default () => (
  <React.Fragment>
    <NavBar />
    <main>
      <Grid
      gridType="gridUpperSmall"
      >
        <GridSection
          gridsectionclass="longBoi"
        />
        <GridSection
          gridsectionclass="upperBoi"
        ><h1>Whisk</h1></GridSection>
        <GridSection
          gridsectionclass="lowerBoi"
        />
      </Grid>
    </main>

    <Footer />
  </React.Fragment>
)
