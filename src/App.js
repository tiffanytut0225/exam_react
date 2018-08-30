import React, { Component } from 'react'

import './App.css'
import './theme.css'
import './theme.scss'

import Nav from './Nav.js'
import Exam from './Exam.js'
import Intro from './Intro.js'
import Footer from './Footer.js'

class App extends Component {
  render () {
    return (
      <div class='container-fluid'>
        <Nav />
        <Intro />
        <Exam />
        <Footer />
      </div>
    )
  }
}

export default App
