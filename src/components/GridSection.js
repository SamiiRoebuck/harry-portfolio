import React from "react"
import styles from "../styles/Grid.module.scss"

class GridSection extends React.Component {

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
          <div className={styles.middle}>
            <a href={this.props.link} className={styles.text} rel="noopener noreferrer" target="_blank">
              Read more...
            </a>
          </div>
        </div>
      )
    }
  }
}

export default GridSection
