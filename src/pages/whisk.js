import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Grid from "../components/Grid"
import GridSection from "../components/GridSection"

import sw from "../images/sw.svg"
import max from "../images/3ds.png"
import pro from "../images/pro.png"

import front from "../images/whisk/front.jpg"
import close from "../images/whisk/close.jpg"
import ga from "../images/whisk/ga.jpg"
import wood from "../images/whisk/wood.jpg"
import box from "../images/whisk/box-image.jpg"


import "../styles/globals.scss"
import styles from "../styles/ProjectPage.module.scss"

export default () => (
  <React.Fragment>
    <NavBar />
    <main>
      <Grid gridType="gridProjectUpperSmall">
        <GridSection gridsectionclass="longBoi">
        <img src={box} alt="render of the whisk on a table" data-object-fit="cover" />

        </GridSection>
        <GridSection gridsectionclass="upperBoi">
          <h1 className={styles.title}>Whisk</h1>
          <p className={styles.software}>Technologies Used:</p>
          <ul className={styles.softwareList}>
            <li>
              <img src={sw} alt="solidworks logo" className={styles.icon} />
            </li>
            <li>
              <img src={max} alt="3ds max logo" className={styles.icon} />
            </li>
            <li>
              <img src={pro} alt="procreate logo" className={styles.icon} />
            </li>
          </ul>
        </GridSection>
        <GridSection gridsectionclass="lowerBoi">
          <h2>
            <strong>Purpose</strong>
          </h2>
          <p>Applied Engineering Principles - Second Year Project</p>

          <h3>
            <strong>Brief</strong>
          </h3>
          <p>
            Rethink a product to use a mechanism in a different way than it
            currently does.
          </p>

          <h4>
            <strong>About</strong>
          </h4>
          <p>
            The whisk was chosen as it is a device that can be mechanical
            already, but can be used in a different way when a new mechanism is
            implemented. If this project, instead of using bevel gears, with a
            rotary crank this product uses crank arms with a spring return
            system to open the arms again, which in turn rotates the whisk
            heads.
          </p>
        </GridSection>
      </Grid>
      <Grid gridType="fullWidth">
        <GridSection gridsectionclass="longBoi">
          <img src={close} alt="close up of the whisk mechanism" data-object-fit="cover" />
        </GridSection>
        <GridSection gridsectionclass="upperBoi">
          <img src={front} alt="front on render of the whisk" data-object-fit="cover" />
        </GridSection>

        <GridSection gridsectionclass="lowerBoi">
          <img src={wood} alt="large render of the whisk on a table" data-object-fit="cover" />
        </GridSection>
      </Grid>
      <Grid gridType="single">
        <GridSection gridsectionclass="upperBoi">
          <img src={ga} alt="general arrangement drawing for the whisk" data-object-fit="cover" />
        </GridSection>
      </Grid>
    </main>

    <Footer />
  </React.Fragment>
)
