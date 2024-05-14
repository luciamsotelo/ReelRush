import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import SignUp from '../components/signup_form'

const hookUp = () => {
  return (
    <div>
      <Header/>
      <SignUp/>
      <Footer/>
    </div>
  )
}

export default hookUp