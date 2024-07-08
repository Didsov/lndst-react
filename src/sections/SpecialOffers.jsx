import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffers = () => {
  return (
    <section className='flex max-container justify-center items-center max-xl:flex-col-reverse gap-10'>
      <div className='flex flex-1 '>
      <img src={offer} width={773} height={687} className='object-contain' alt="" />
      </div>
      <div className='flex flex-1 flex-col w-full'>

          <h2 className='mt-10 font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
            
            <span className='text-coral-red inline-block mx-3'>  Special</span>
            
            Offer
          </h2>
          <p className='mt-4  info-text'>
          Enkuring premium comfort and style, our meticulously crafted footwear is designed to elevate your- experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
          
          
          <div className='mt-11 flex flex-wrap gap-4'> 
            <Button Label={"View details"} LabelUrl={arrowRight} />
            <Button Label={'Lear more'} backgroundColor={'bg-white'} borderColor={'border-coral-red'} textColor={'text-slate-gray'}/>

            </div>
          
      </div>
    </section>
  )
}

export default SpecialOffers