import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Grid from "../components/Grid"
import GridSection from "../components/GridSection"

import sw from "../images/sw.svg"
import max from "../images/3ds.png"
import pro from "../images/pro.png"

import box from '../images/pump/box-image.jpg'
import render1 from '../images/pump/render1.jpg'
import render2 from '../images/pump/render2.jpg'
import sketch from '../images/pump/sketch.jpg'
import ga from '../images/pump/ga.jpg'


import "../styles/globals.scss"
import styles from "../styles/ProjectPage.module.scss"

export default () => (
  <React.Fragment>
    <NavBar />
    <main>
      <Grid
      gridType="gridProjectUpperSmall"
      >
        <GridSection
          gridsectionclass="longBoi"
        >
          <img src={box} alt="close up of the pump" data-object-fit="cover" />
        </GridSection>
        <GridSection
          gridsectionclass="upperBoi"
        ><h1  className={styles.title}>Foot Pump</h1>
                  <p className={styles.software}>Technologies Used:</p>
          <ul className={styles.softwareList}>
            <li><img src={sw} alt="solidworks logo" className={styles.icon}></img></li>
            <li><img src={max} alt="3ds max logo"  className={styles.icon}></img></li>
            <li><img src={pro} alt="procreate logo"  className={styles.icon}></img></li>
          </ul></GridSection>
          <GridSection gridsectionclass="lowerBoi">
          <h2>
            <strong>Purpose</strong>
          </h2>
          <p>Design Communication - Second Year Project</p>

          <h3>
            <strong>Brief</strong>
          </h3>
          <p>
          Create a design for a manual pump that can generate a varying volume and pressure for different applications.
          </p>

          <h4>
            <strong>About</strong>
          </h4>
          <p>
          The CAD was created in Solidworks and uses two different volume cyclinders that can be used in three different configurations to output air at different volumes which can be applied to use in Automotives tires, as well as Mountain and Road bikes. The aim is to reduce the number of pumps that need to be owned by an individual, to create a one size fits all approach.
          </p>
        </GridSection>
      </Grid>
      <Grid gridType="fullWidth">
        <GridSection gridsectionclass="longBoi">
          <img src={ga} alt="ga drawing of the pump" data-object-fit="cover" />
        </GridSection>
        <GridSection gridsectionclass="upperBoi">
          <img src={render2} alt="a render of the pump" data-object-fit="cover" />
        </GridSection>

        <GridSection gridsectionclass="lowerBoi">
          <img src={sketch} alt="a sketch of the pump" data-object-fit="cover" />
        </GridSection>
      </Grid>
      <Grid gridType="single">
        <GridSection gridsectionclass="upperBoi">
          <img src={render1} alt="a render of the pump" data-object-fit="cover" />
        </GridSection>
      </Grid>
    </main>

    <Footer />
  </React.Fragment>
)
