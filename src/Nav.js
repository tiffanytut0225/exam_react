import React, { Component } from 'react'

class Nav extends Component {
  render () {
    return (
      <nav class='navbar navbar-expand-md bg-secondary navbar-dark fix-top' >
        <div class='container'>
          <a class='navbar-brand' href='#'>Tiffany's testing site</a>
          <button class='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarSupportedContent'>
            <span class='navbar-toggler-icon' />
          </button>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav mr-auto'>
              <li class='nav-item'>
                <a class='nav-link' href='#'>Page1</a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>Page2</a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>Page3</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
