import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQueality = () => {
  return (
    <section
    id='about-us'
    className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col w-full'>
      

          <h2 className='mt-10 font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
            We Provide You 
            <span className='text-coral-red inline-block mx-3'>  Super</span>
            <br />
            <span className='text-coral-red inline-block mr-3'>Quality</span>
            Shoes
          </h2>
          <p className='mt-4 lg:max-w-lg info-text'>
          Enkuring premium comfort and style, our meticulously crafted footwear is designed to elevate your- experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
          <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures satisfaction
          </p>
          <div className='mt-11 '> <Button Label={"View details"} /></div>
          
      </div>
      <div className=' flex flex-1 justify-center items-center object-contain '>
        <img src={shoe8} height={522} width={570} alt="" />

      </div>
    </section>
  )
}

export default SuperQueality