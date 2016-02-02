import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Header from './Header'
import Footer from './Footer'

const Layout = function({ children }){
  return(
    <div className="layout">
      <Header />

      <div>
        {children}
      </div>

      <Footer />
    </div>
  )
}

export default connect()(Layout)
