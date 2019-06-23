import React, { Component } from 'react';

import './style.scss'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div>
                    <span>® 2016 Dirty Dogs all rights reserved</span>
                </div>
                <div>
                    <ul className="contact">
                        <li>274 Marconi Blvd. Columbus, Ohio 43215</li>
                        <li>614.538.0095</li>
                        <li> Contact Us </li>
                    </ul>
                </div>
            </footer>

        );
    }
}