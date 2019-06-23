import React from 'react';
import { Button } from '../../common';
import image from '../../assets/images/hotdog.svg';
import './style.scss'


export default () =>
    <section className="hotdog-headline">
        <section className="hotdog-content">
            <img src={image} alt="hotdog" />
            <h1>Dirty Dogs serves all-beef, vegan and vegatagian hot dogs.</h1>
            <Button text="More Dogs ‘n Make Em Hot" />
        </section>
    </section>
