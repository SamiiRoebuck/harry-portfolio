import React from "react"

import NavBar from "../components/NavBar"
import TypedHeader from "../components/TypedHeader"
import Footer from "../components/Footer"
import Grid from "../components/Grid"
import GridSection from "../components/GridSection"

import about from "../images/about.jpg"

import "../styles/globals.scss"
import { Link } from "gatsby"

import objectFitImages from 'object-fit-images';

objectFitImages();

export default () => (
  <React.Fragment>
    <NavBar />
    <main>
      <Grid gridType="gridUpperSmall">
        <GridSection gridsectionclass="longBoi">
          <img src={about} alt="harry york" id="aboutImage" data-object-fit="cover" />
        </GridSection>
        <GridSection gridsectionclass="upperBoi">
          <TypedHeader />
        </GridSection>
        <GridSection gridsectionclass="lowerBoi">
          <h2>Hey There!</h2>
          <p>
            I'm Harry, I'm a passionate product designer/design enginneer with a
            love for all things eco-friendly!
          </p>
          <p>
            I'm a professionally certified SolidWorks user and a proficient user
            of Fusion 360, 3DSMAX, and Adobe Creative Cloud. I have interests in furniture and prop making, eco-design, packaging
            design and 3D modelling.
          </p>
          <p>
          Have a look through some snippets of my work on my website or download my portfolio for a more indepth view!
          </p>
          <br/>
          <h3 className="text-center">Want to chat about working together?</h3>
          <Link to="/contact" className="btn">
            Contact me here
          </Link>
        </GridSection>
      </Grid>
      <Grid gridType="gridLeftLong">
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
        <GridSection gridsectionclass="upperBoi">
          <h2>Want to see more of my artwork and renders?</h2>
          <p>Take a look a my instagram for my most upto date work.</p>
        </GridSection>
        <GridSection gridsectionclass="lowerBoi" />
      </Grid>
    </main>
    <Footer />
  </React.Fragment>
)
