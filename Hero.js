import React from 'react'
import phoneImg from './images/phone.svg'
import {useGlobalContext}from './context'

const Hero = () => {
const {closeSubmenu}=useGlobalContext;
  return <>
  <section className='hero' onMouseOver={closeSubmenu}>
    <div className='hero-center'>
      <article className='hero-info'>
        <h1>Payments Infurstructure for the Internet</h1>
        <p>hlhlk lhlkjh lhl lhlkhjlk lkhlkh lhlkh </p>
        <button className='btn'>Start now</button>
      </article>
      <article className='hero-images'>
        <img src={phoneImg} alt='phone'></img>

      </article>
    </div>
  </section>
  </>
}

export default Hero
