import React from 'react'
import Typed from 'typed.js'

import styles from '../styles/TypedHeader.module.scss'

class TypedHeader extends React.Component {
    componentDidMount() {
        var options = {
            strings: ["Product Designer", "CAD Draftsman", "Friend to the Earth"],
            typeSpeed: 150,
            fadeOutDelay: 600,
            loop: false,
            showCursor: true,
            cursorChar: '_',
            fadeOut: true
        }

        new Typed("section p", options);
    }

    render() {
        return (
            <section className={styles.title}>
                <header>
                    <h1>Harry York</h1>
                </header>
                <p className={styles.typed}></p>
            </section>
        )
    }
}

export default TypedHeader