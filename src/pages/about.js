import React from "react"

import NavBar from "../components/NavBar"
import TypedHeader from "../components/TypedHeader"
import Footer from "../components/Footer"
import Grid from "../components/Grid"
import GridSection from "../components/GridSection"

import about from "../images/about.jpg"

import "../styles/globals.scss"
import { Link } from "gatsby"

import objectFitImages from "object-fit-images"

objectFitImages()

export default () => (
  <React.Fragment>
    <NavBar />
    <main>
      <Grid gridType="gridUpperSmall">
        <GridSection gridsectionclass="longBoi">
          <img
            src={about}
            alt="harry york"
            id="aboutImage"
            data-object-fit="cover"
          />
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
            Some of my key skills include certification at Professional level in{" "}
            <strong>Solidworks</strong>, as well as experience using and
            teaching <strong>Cura</strong> and <strong>NetFabb</strong> for
            optimising <strong>adative manufacturing</strong>. As well as use of{" "}
            <strong>Procreate</strong>, (as well as{" "}
            <strong>Adobe Creative Cloud</strong> programs) and{" "}
            <strong>3DS MAX</strong> to create detailed sketch renders and
            polished graphical renders.
          </p>
          <p>
            Have a look through some snippets of my work on my website or
            download my portfolio for a more indepth view!
          </p>
          <br />
          <div className="half">
            <h3 className="text-center">
              Want to chat about working together?
            </h3>
            <Link to="/contact" className="btn">
              Contact me here
            </Link>
          </div>
          <div className="half">
            <h4 className="text-center">
              Want to see more of my artwork?
            </h4>
            <a
              href="https://www.instagram.com/harryyork97/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Check out my Instagram
            </a>
          </div>
        </GridSection>
      </Grid>
      <Grid gridType="single">
        <GridSection gridsectionclass="upperBoi">
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
              <button className="submit" type="submit">
                Send
              </button>
            </p>
          </form>
        </GridSection>
      </Grid>
    </main>
    <Footer />
  </React.Fragment>
)
