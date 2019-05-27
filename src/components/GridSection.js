import React from "react"
import styles from "../styles/Grid.module.scss"

import { Link } from "gatsby"

class GridSection extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.link === undefined) {
      return (
        <div className={styles[this.props.gridsectionclass]}>
          {this.props.children}
        </div>
      )
    } else {
      return (
        <div className={styles[this.props.gridsectionclass]}>
          {this.props.children}

          <div className={styles.image}>
            <h1>{this.props.title}</h1>
            <img
              src={this.props.image}
              alt={this.props.alt}
              //   style={{ width: "100%" }}
            />
          </div>
          <div class={styles.middle}>
            <Link to={this.props.link} class={styles.text}>
              Read more...
            </Link>
          </div>
        </div>
      )
    }
  }
}

export default GridSection
