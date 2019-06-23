import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Contact from './Contact'

export default () => <div>
  <Route path="/" exact component={Home} />
  <Route path="/contact" component={Contact} />
</div>
