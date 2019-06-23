import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './../Header'
import Footer from './../Footer'
import Routes from '../../pages/routes'

export default () =>
  <div className="container">
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  </div>
