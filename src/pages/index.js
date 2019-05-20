import React from "react"
import NavBar from "../components/NavBar"
import PageBorder from "../components/PageBorder"
import TypedHeader from "../components/TypedHeader"
import Footer from "../components/Footer"

import "../styles/globals.scss"

export default () => (
  <React.Fragment>
    <NavBar />
    <PageBorder />
    <main>
    <TypedHeader />
      <div class="img-holder">

        <img src="https://placeimg.com/640/600/any" alt="placeholder"/>
      </div>
      <div />
      <div />
      <div />
    </main>
    <Footer/>
  </React.Fragment>
)
