import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Grid from "../components/Grid"
import GridSection from "../components/GridSection"

import sw from '../images/sw.svg'
import max from '../images/3ds.png'
import pro from '../images/pro.png'


import "../styles/globals.scss"
import styles from "../styles/ProjectPage.module.scss"

export default () => (
  <React.Fragment>
    <NavBar />
    <main>
      <Grid gridType="gridUpperSmall">
        <GridSection gridsectionclass="longBoi" />
        <GridSection gridsectionclass="upperBoi">
          <h1>Metrolink Station Redesign Concept</h1>
          <p>Software Used:</p>
          <ul>
            <li><img src={sw} alt="solidworks logo" className={styles.icon}></img></li>
            <li><img src={max} alt="3ds max logo"  className={styles.icon}></img></li>
            <li><img src={pro} alt="procreate logo"  className={styles.icon}></img></li>

          </ul>
        </GridSection>
        <GridSection gridsectionclass="lowerBoi" />
      </Grid>
    </main>

    <Footer />
  </React.Fragment>
)
