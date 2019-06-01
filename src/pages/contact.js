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
          <h1>Say Hello!</h1>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <span className="labelInput">Your Name</span>
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <span className="labelInput">Your Email</span>
              <input
                className="input"
                type="text"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <span className="labelInput">Your Phone Number</span>
              <input
                className="input"
                type="tel"
                name="number"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <span className="labelInput">Your Message</span>
              <textarea
                className="input"
                name="message"
                rows="6"
                placeholder="Enter your message"
              />
            </div>
            <p>
              <button className="submit" type="submit">Send</button>
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
