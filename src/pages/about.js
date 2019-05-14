import React from "react"
import NavBar from "../components/NavBar"
import NavMenu from "../components/NavMenu"

import 'bootstrap/dist/css/bootstrap.css';
import "../styles/globals.scss"

export default () => (
  <div>
    <div>
      <NavBar/>
    </div>

    <NavMenu className="content" />
  </div>
)