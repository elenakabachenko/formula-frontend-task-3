import React from 'react';
import NavBar from './NavBar/NavBar'
import { Link } from 'react-router-dom';
import logo from './../../assets/images/Instagram.svg';
import './styleHeader.scss'

export default () =>
  <div>
    <header className="main-header">
      <div className="instagram-tag">
        <Link className="inst-icon" to="/">
          <img src={logo} alt="Instagram" />;
                    </Link>
        <span>#hotdogs</span>
      </div>
    </header>
    <NavBar />
  </div>
