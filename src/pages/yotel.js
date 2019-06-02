import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Grid from "../components/Grid"
import GridSection from "../components/GridSection"

import sw from "../images/sw.svg"
import pro from "../images/pro.png"

import box from '../images/yotel/box-image.jpg'
import floor from '../images/yotel/floorplan.jpg'
import ga1 from '../images/yotel/ga1.jpg'
import render1 from '../images/yotel/render1.jpg'
import render2 from '../images/yotel/render2.jpg'



import "../styles/globals.scss"
import styles from "../styles/ProjectPage.module.scss"

export default () => (
  <React.Fragment>
    <NavBar />
    <main>
      <Grid gridType="gridProjectUpperSmall">
        <GridSection gridsectionclass="longBoi">
        <img src={box} alt="render of the bed" data-object-fit="cover" />

        </GridSection>
        <GridSection gridsectionclass="upperBoi">
          <h1  className={styles.title}>Yotel</h1>
          <p className={styles.software}>Technologies Used:</p>
          <ul className={styles.softwareList}>
            <li>
              <img src={sw} alt="solidworks logo" className={styles.icon} />
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
          <p>Usage Values - First Year Project</p>

          <h3>
            <strong>Brief</strong>
          </h3>
          <p>
            Create a piece of furniture that fits into a long-stay
            apartment-hotel room that is designed to be compact but able to
            comfortably lived in.
          </p>

          <h4>
            <strong>About</strong>
          </h4>
          <p>
            The project requirements were defined by Yotel and the entire room
            was designed with Yotel's branding in mind to ensure a cohesive look
            across the various hotels. This project was done in coordination
            with three other designers as a group project, the furniture
            designed included a dining table and stairs, kitchen workspace,
            wardrobe, and the bed that can be seen here.
          </p>
        </GridSection>
      </Grid>
      <Grid gridType="fullWidth">
        <GridSection gridsectionclass="longBoi">
          <img src={render1} alt="close up of the whisk mechanism" data-object-fit="cover" />
        </GridSection>
        <GridSection gridsectionclass="upperBoi">
          <img src={floor} alt="floor plan of the room" data-object-fit="cover" />
        </GridSection>

        <GridSection gridsectionclass="lowerBoi">
          <img src={render2} alt="large render of the whisk on a table" data-object-fit="cover" />
        </GridSection>
      </Grid>
      <Grid gridType="single">
        <GridSection gridsectionclass="upperBoi">
          <img src={ga1} alt="general arrangement drawing for the whisk" data-object-fit="cover" />
        </GridSection>
      </Grid>
    </main>

    <Footer />
  </React.Fragment>
)
