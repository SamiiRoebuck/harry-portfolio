import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

import "../styles/globals.scss"
import { Link } from "gatsby";

export default () => (
  <React.Fragment>
    <NavBar />
    <main>
      <div className="grid-container container">
        <div className="long-boi">
          <div className="image">
            <h1>Project Title</h1>
            <img
              src="https://placeimg.com/100/100/any"
              alt="Avatar"
              
              style={{ width: "100%" }}
            />
          </div>
          <div class="middle">
            <Link href="/" class="text">Read more...</Link>
          </div>
        </div>
        <div className="upper-boi" />
        <div className="lower-boi" />
      </div>
    </main>

    <Footer />
  </React.Fragment>
)
