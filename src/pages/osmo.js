import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Grid from "../components/Grid"
import GridSection from "../components/GridSection"

import sw from "../images/sw.svg"
import max from "../images/3ds.png"
import pro from "../images/pro.png"

import drawing from '../images/osmo/Sketch_renders.jpeg'
import render4 from '../images/osmo/box-image.jpg'
import render2 from '../images/osmo/Render 2.jpg'

import render5 from '../images/osmo/render 5.jpg'
import render6 from '../images/osmo/render 6.jpg'



import "../styles/globals.scss"
import styles from "../styles/ProjectPage.module.scss"
export default () => (
  <React.Fragment>
    <NavBar />
    <main>
      <Grid gridType="gridProjectUpperSmall">
        <GridSection gridsectionclass="longBoi">
        <img src={render4} alt="render of the osmo" data-object-fit="cover" />

        </GridSection>
        <GridSection gridsectionclass="upperBoi">
          <h1  className={styles.title}>DJI OSMO redesign</h1>
          <p className={styles.software}>Technologies Used:</p>
          <ul className={styles.softwareList}>
            <li><img src={sw} alt="solidworks logo" className={styles.icon}></img></li>
            <li><img src={max} alt="3ds max logo"  className={styles.icon}></img></li>
            <li><img src={pro} alt="procreate logo"  className={styles.icon}></img></li>
          </ul>
        </GridSection>
        <GridSection gridsectionclass="lowerBoi">
          <h2>
            <strong>Purpose</strong>
          </h2>
          <p>Usage Values - First Year Project</p>

          <h3>
            <strong>Brief</strong>
          </h3>
          <p>
            Redesign a hand-held prduct that currently exists, in a way that it
            has Anthropometric and Ergonomic Considerations, with a way to
            visually display the system status and switches or knobs to control
            it, as well as being well designed for use.
          </p>

          <h4>
            <strong>About</strong>
          </h4>
          <p>
            The redesign of a DJI Osmo was chosen for the handheld product, with
            the aim of better suiting customer and anthropometric needs,
            established through primary market research that details the
            ergonomic considerations and into what visual technologies can be
            deployed into the handheld device.
          </p>
        </GridSection>
      </Grid>
      <Grid gridType="fullWidth">
        <GridSection gridsectionclass="longBoi">
        <img src={render5} alt="render of the osmo redesign from the back" data-object-fit="cover" />

</GridSection>
        <GridSection gridsectionclass="upperBoi">
        <img src={drawing} alt="sketches of the redesign" data-object-fit="cover" />
      
        </GridSection>

        <GridSection gridsectionclass="lowerBoi" >
        <img src={render6} alt="render of the osmo lying down" data-object-fit="cover" />

        </GridSection>
      </Grid>
      <Grid gridType="single">
        <GridSection gridsectionclass="upperBoi">
        <img src={render2} alt="large render of the osmo from the front" data-object-fit="cover" />

        </GridSection>
      </Grid>
    </main>

    <Footer />
  </React.Fragment>
)
