import React from 'react'
import './style.scss'

export default ({ name, description, backgroundURL, enableImages }) =>
  <section className='info-hotdogs'>
    <div className="info-hotdogs-about">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
    {
      !enableImages
        ? <img src={backgroundURL} alt={name} />
        : <img src="https://placeimg.com/640/480/any" alt={name} />
    }
  </section>



