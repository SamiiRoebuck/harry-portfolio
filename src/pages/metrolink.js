import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Grid from "../components/Grid"
import GridSection from "../components/GridSection"

import sw from '../images/sw.svg'
import max from '../images/3ds.png'
import pro from '../images/pro.png'

import model from '../images/metrolink/model.jpg'
import GA from '../images/metrolink/GA.jpg'
import fromAbove from '../images/metrolink/from-above.jpg'
import lineDraw from '../images/metrolink/line-drawing.jpg'
import closeDraw from '../images/metrolink/close-drawing.jpg'
import poster from '../images/metrolink/poster.jpg'
import side from '../images/metrolink/side-render.jpg'
import drawing from '../images/metrolink/drawing.jpeg'



import "../styles/globals.scss"
import styles from "../styles/ProjectPage.module.scss"

export default () => (
  <React.Fragment>
    <NavBar />
    <main>
      <Grid gridType="gridProjectUpperSmall">
        <GridSection gridsectionclass="longBoi">
          <img src={model} alt="model of the station redesign"></img>
        </GridSection>
        <GridSection gridsectionclass="upperBoi">
          <h1 className={styles.title}>Metrolink Station Redesign</h1>
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
          <p>
          The scale model was built to British O-gauge scale which is 1:43.5. Some of the components are hand crafted out of various foams and foam-boards as well as pieces sourced from old model kits, and 3D printed bespoke parts in ABS plastic. The model has several finishing details such as through painting to reflect the intended texture of the surfaces as well as the application of static grass to mimic the areas of natural greenery for the real life structure.
          </p>
        </GridSection>
      </Grid>
      <Grid gridType="fullWidth">
        <GridSection gridsectionclass="longBoi">
        <img src={lineDraw} alt="line drawing of the front of the redesigned station" data-object-fit="cover" />
</GridSection>
        <GridSection gridsectionclass="upperBoi">
          <img src={fromAbove} alt="render showing the solar panels on the top of the station" data-object-fit="cover" />
        </GridSection>

        <GridSection gridsectionclass="lowerBoi" >
        <img src={closeDraw} alt="completed drawing of the front of the station" data-object-fit="cover" />

        </GridSection>
      </Grid>
      <Grid gridType="full">
        <GridSection gridsectionclass="upperBoi">
          <img src={poster} alt="render of the underside of the station showing the posters" data-object-fit="cover" />
        </GridSection>
        <GridSection gridsectionclass="lowerBoi">
          <img src={side} alt="render of the station from the side, showing the chairs" data-object-fit="cover" />
        </GridSection>
        <GridSection gridsectionclass="longBoi">
          <img src={drawing} alt="full length drawing of the station" data-object-fit="cover" />
        </GridSection>
      </Grid>
      <Grid gridType="single">
        <GridSection gridsectionclass="upperBoi">
        <img src={GA} alt="general arrangement drawing of the station" data-object-fit="cover" />

        </GridSection>
      </Grid>
    </main>

    <Footer />
  </React.Fragment>
)
