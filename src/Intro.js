import React from 'react'

export const Intro = (props) => {
  var img = 'https://mdbootstrap.com/img/Photos/Others/background.jpg'
  const style = {
    padding: '250px 0',
    backgroundImage: 'url(' + img + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  }

  return (
    <div class='py-5 text-center' style={style}>
      <div class='container py-5'>
        <div class='row'>
          <div class='col-md-12'>
            <h1 class='display-3 mb-4 text-light'>Welcome to Exam Review System</h1>
            <p class='lead mb-5'>This project helps me to learn React.js.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
