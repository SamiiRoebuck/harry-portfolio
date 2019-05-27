import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Grid from "../components/Grid"
import GridSection from "../components/GridSection"

import "../styles/globals.scss"

export default () => (
  <React.Fragment>
    <NavBar />
    <main>
      <Grid
      gridType="gridRightLong"
      >
        <GridSection
          gridsectionclass="longBoi"
          title="Metrolink Station Redesign"
          // image="https://placeimg.com/100/100/any"
          alt="image"
          link="/metrolink"
        />
        <GridSection
          gridsectionclass="upperBoi"
          title="Gresham Anywhere Chair"
          // image="https://placeimg.com/100/100/any"
          alt="image"
          link="/gresham"
        />
        <GridSection
          gridsectionclass="lowerBoi"
          title="DJI Osmo Redesign"
          // image="https://placeimg.com/100/100/any"
          alt="image"
          link="/osmo"
        />
      </Grid>
      <Grid
      gridType="gridLeftLong"
      >
        <GridSection
          gridsectionclass="longBoi"
          title="Yotel Furniture"
          // image="https://placeimg.com/100/100/any"
          alt="image"
          link="/yotel"
        />
        <GridSection
          gridsectionclass="upperBoi"
          title="Foot Pump"
          // image="https://placeimg.com/100/100/any"
          alt="image"
          link="/pump"
        />
        <GridSection
          gridsectionclass="lowerBoi"
          title="Whisk Mechanism Concept"
          // image="https://placeimg.com/100/100/any"
          alt="image"
          link="/whisk"
        />
      </Grid>
    </main>

    <Footer />
  </React.Fragment>
)
