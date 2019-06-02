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
      gridType="gridRightLongWork"
      >
        <GridSection
          gridsectionclass="longBoi"
          title="Metrolink Station Redesign"
          image={metroImage}
          imageclass="workImage"
          alt="render of station redesign"
          link="/metrolink"
        />
        <GridSection
          gridsectionclass="upperBoi"
          title="Gresham Anywhere Chair"
          image={chairImage}
          imageclass="workImage"
          alt="render of chair"
          link="/gresham"
        />
        <GridSection
          gridsectionclass="lowerBoi"
          title="DJI Osmo Redesign"
          image={osmoImage}
          imageclass="workImage"
          alt="render of osmo redesign"
          link="/osmo"
        />
      </Grid>
      <Grid
      gridType="gridLeftLongWork"
      >
        <GridSection
          gridsectionclass="longBoi"
          title="Yotel Furniture"
          image={yotelImage}
          imageclass="workImage"
          alt="render of yotel bed"
          link="/yotel"
        />
        <GridSection
          gridsectionclass="upperBoi"
          title="Foot Pump"
          image={pumpImage}
          imageclass="workImage"
          alt="render of foot pump"
          link="/pump"
        />
        <GridSection
          gridsectionclass="lowerBoi"
          title="Mechanical Whisk"
          imageclass="workImage"
          image={whiskImage}
          alt="render of whisk"
          link="/whisk"
        />
      </Grid>
    </main>

    <Footer />
  </React.Fragment>
)
