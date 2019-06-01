import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Grid from "../components/Grid"
import GridSection from "../components/GridSection"

import sw from '../images/sw.svg'
import max from '../images/3ds.png'
import pro from '../images/pro.png'
import cura from '../images/cura.png'

import "../styles/globals.scss"
import styles from "../styles/ProjectPage.module.scss"

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
        ><h1>Gresham 'Anywhere Chair' Concept</h1>
                  <p className={styles.software}>Technologies Used:</p>
          <ul className={styles.softwareList}>
            <li><img src={sw} alt="solidworks logo" className={styles.icon}></img></li>
            <li><img src={max} alt="3ds max logo"  className={styles.icon}></img></li>
            <li><img src={pro} alt="procreate logo"  className={styles.icon}></img></li>
            <li><img src={cura} alt="cura logo"  className={styles.icon}></img></li>


          </ul>
        </GridSection>
        <GridSection
          gridsectionclass="lowerBoi">
                      <h2><strong>Purpose</strong></h2>
          <p>Advanced Design Communication – Final Year Industry Task</p>

          <h3><strong>Brief</strong></h3>
          <p>Design an ‘Anywhere Chair’ infitting with Gresham’s current premium range, taking into account their manufacturing capabilities and facilities.</p>
        
          <h4><strong>About</strong></h4>
          <p>The anywhere chair is a type of seating that fits in with the concept of activity-based working, in that there’s a sense of flexibility in how and where you work. Thereby eliminating the traditional ergonomic desk chair and allowing the chair to become more of a statement piece in the office environment. This chair must be a feasible design, with established manufacturing practices that are within the remit of Gresham Office Furniture and be able to be produced with adequate enough space in their manufacturing facility, with a focus on the environmental story, transportation considerations, and multi-functionality of the product.</p>
          </GridSection>
      </Grid>
    </main>

    <Footer />
  </React.Fragment>
)
