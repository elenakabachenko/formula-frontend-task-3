import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss'


export default class NavBar extends Component {
    render() {
        return (
            <section className="main-menu">
                <nav>
                    <ul className="main-nav">
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/">Catering</Link></li>
                        <li><Link to="/">About us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </section>
        );
    }
}