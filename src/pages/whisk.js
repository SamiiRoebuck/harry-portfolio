import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Grid from "../components/Grid"
import GridSection from "../components/GridSection"

import sw from "../images/sw.svg"
import max from "../images/3ds.png"
import pro from "../images/pro.png"

import "../styles/globals.scss"
import styles from "../styles/ProjectPage.module.scss"

export default () => (
  <React.Fragment>
    <NavBar />
    <main>
      <Grid gridType="gridUpperSmall">
        <GridSection gridsectionclass="longBoi" />
        <GridSection gridsectionclass="upperBoi">
          <h1>Whisk</h1>
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
          Rethink a product to use a mechanism in a different way than it currently does.
          </p>

          <h4>
            <strong>About</strong>
          </h4>
          <p>
          The whisk was chosen as it is a device that can be mechanical already, but can be used in a different way when a new mechanism is implemented. If this project, instead of using bevel gears, rack and pinion gears were used to turn spur gears.
          </p>
        </GridSection>
      </Grid>
    </main>

    <Footer />
  </React.Fragment>
)
