import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Grid from "../components/Grid"
import GridSection from "../components/GridSection"

import metroImage from "../images/metrolink/box-image.jpg"
import osmoImage from "../images/osmo/box-image.jpg"
import pumpImage from "../images/pump/box-image.jpg"
import yotelImage from "../images/yotel/box-image.jpg"
import whiskImage from "../images/whisk/box-image.jpg"
import chairImage from "../images/gresham/box-image.jpg"



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
          image={metroImage}
          alt="image"
          link="/metrolink"
        />
        <GridSection
          gridsectionclass="upperBoi"
          title="Gresham Anywhere Chair"
          image={chairImage}
          alt="image"
          link="/gresham"
        />
        <GridSection
          gridsectionclass="lowerBoi"
          title="DJI Osmo Redesign"
          image={osmoImage}
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
          image={yotelImage}
          alt="image"
          link="/yotel"
        />
        <GridSection
          gridsectionclass="upperBoi"
          title="Foot Pump"
          image={pumpImage}
          alt="image"
          link="/pump"
        />
        <GridSection
          gridsectionclass="lowerBoi"
          title="Mechanical Whisk"
          image={whiskImage}
          alt="image"
          link="/whisk"
        />
      </Grid>
    </main>

    <Footer />
  </React.Fragment>
)
