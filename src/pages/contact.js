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
      <Grid gridType="gridRightLong">
        <GridSection gridsectionclass="longBoi">
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />
  <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>
                Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Number: <input type="number" name="number" />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message" />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </GridSection>
        <GridSection gridsectionclass="upperBoi" />
        <GridSection gridsectionclass="lowerBoi" />
      </Grid>
    </main>

    <Footer />
  </React.Fragment>
)
