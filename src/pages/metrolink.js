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
          <h1>Metrolink Station Redesign</h1>
          <p className={styles.software}>Technologies Used:</p>
          <ul className={styles.softwareList}>
            <li><img src={sw} alt="solidworks logo" className={styles.icon}></img></li>
            <li><img src={max} alt="3ds max logo"  className={styles.icon}></img></li>
            <li><img src={pro} alt="procreate logo"  className={styles.icon}></img></li>

          </ul>
        </GridSection>
        <GridSection gridsectionclass="lowerBoi">
          <h2><strong>Purpose</strong></h2>
          <p>Individual Engineering Project – Final Year Dissertation</p>

          <h3><strong>Brief</strong></h3>
          <p>Application of engineering principles and design concepts to improve the quality of life surrounding a chosen product.</p>
        
          <h4><strong>About</strong></h4>
          <p>The Metrolink redesign was conducted to install new structures on the brand-new Trafford Bar line, as well as a gradual roll-out across the rest of the system. This new design aims to reflect Manchester’s cultural heritage with an emphasis on a honeycomb pattern as well as a vision for the way that the tram stop structures influence the surrounding city environments, such as the filtration of air to remove pollutants and particulate matter, and be self-sufficient and give back more than it takes from the space that surrounds it.</p>
        </GridSection>
      </Grid>
    </main>

    <Footer />
  </React.Fragment>
)
