import React from 'react'
import Typed from 'typed.js'

class TypedHeader extends React.Component {
    componentDidMount() {
        var options = {
            strings: ["Product Designer", "CAD Draftsman", "Friend to the Earth"],
            typeSpeed: 100,
            backDelay: 300,
            loop: true,
            showCursor: true,
            cursorChar: '_'
          }
          
          var typed = new Typed(".typed", options);
    }

    render() {
        return (
            <section>
            <header><h1>Harry York</h1></header>
            <p className="typed"></p>
          </section>
        )
    }
}

export default TypedHeader