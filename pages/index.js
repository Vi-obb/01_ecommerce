import React from 'react'

// importing the required components

import { HeroBanner, Product, FooterBanner } from '../components'

const Home = () => {
  return (
    <>
      <HeroBanner />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div>
        {["Product 1", "Product 2", "Product 3"].map((product) => product)} 
      </div>

      <FooterBanner />
    </>
  )
}

export default Home