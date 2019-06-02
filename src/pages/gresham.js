import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Grid from "../components/Grid"
import GridSection from "../components/GridSection"

import sw from "../images/sw.svg"
import max from "../images/3ds.png"
import pro from "../images/pro.png"
import cura from "../images/cura.png"

import proto from "../images/gresham/prototype.jpeg"
import drawing from "../images/gresham/drawing.jpeg"
import gedraw from "../images/gresham/ge-draw.jpg"
import office from "../images/gresham/office-2.jpg"
import tricolor from "../images/gresham/Render 10.jpg"


import "../styles/globals.scss"
import styles from "../styles/ProjectPage.module.scss"

export default () => (
  <React.Fragment>
    <NavBar />
    <main>
      <Grid gridType="gridProjectUpperSmall">
        <GridSection gridsectionclass="longBoi">
          <img src={proto} alt="3D printed model of the chair" data-object-fit="cover" />
        </GridSection>
        <GridSection gridsectionclass="upperBoi">
          <h1 className={styles.title}>Gresham 'Anywhere Chair' Concept</h1>
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
            <li>
              <img src={cura} alt="cura logo" className={styles.icon} />
            </li>
          </ul>
        </GridSection>
        <GridSection gridsectionclass="lowerBoi">
          <h2>
            <strong>Purpose</strong>
          </h2>
          <p>Advanced Design Communication – Final Year Industry Task</p>

          <h3>
            <strong>Brief</strong>
          </h3>
          <p>
            Design an ‘Anywhere Chair’ infitting with Gresham’s current premium
            range, taking into account their manufacturing capabilities and
            facilities.
          </p>

          <h4>
            <strong>About</strong>
          </h4>
          <p>
            The anywhere chair is a type of seating that fits in with the
            concept of activity-based working, in that there’s a sense of
            flexibility in how and where you work. Thereby eliminating the
            traditional ergonomic desk chair and allowing the chair to become
            more of a statement piece in the office environment. This chair must
            be a feasible design, with established manufacturing practices that
            are within the remit of Gresham Office Furniture and be able to be
            produced with adequate enough space in their manufacturing facility,
            with a focus on the environmental story, transportation
            considerations, and multi-functionality of the product.
           </p>
           <p>
            The scale prototype was made by 3D printing the design using ABS plastic, and was then finished off by chemical smoothing using an acetone vapour bath and sanding, followed by priming the piece for painting and then painting and finishing the piece with varnish and soft-furnishings.
          </p>
        </GridSection>
      </Grid>
      <Grid gridType="fullWidth">
        <GridSection gridsectionclass="longBoi">
        <img src={drawing} alt="drawing of the chair with a man sat in it" data-object-fit="cover" />
</GridSection>
        <GridSection gridsectionclass="upperBoi">
          <img src={tricolor} alt="render of the chair in three different colours" data-object-fit="cover" />
        </GridSection>

        <GridSection gridsectionclass="lowerBoi" >
        <img src={office} alt="in situ render of the chair" data-object-fit="cover" />

        </GridSection>
      </Grid>
      <Grid gridType="single">
        <GridSection gridsectionclass="upperBoi">
          <img src={gedraw} alt="general arrangement drawing for the chair" data-object-fit="cover" />
        </GridSection>
      </Grid>
    </main>

    <Footer />
  </React.Fragment>
)
