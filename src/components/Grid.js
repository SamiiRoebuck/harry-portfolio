import React from "react"
import styles from "../styles/Grid.module.scss"

class Grid extends React.Component {
  render() {
    return (
      <div className={styles[this.props.gridType]}>
        {this.props.children}
      </div>
    )
  }
}

export default Grid
