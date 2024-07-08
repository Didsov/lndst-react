import React, { useState } from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'
const Hero = () => {
  const [bigShoe, setBigShoe] = useState(bigShoe1)
  return (
    <section 
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ' >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
          <p className='text-xl font-montserrat text-coral-red'
          >Our summer Collection</p>

          <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
            <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
              The new Arrival</span>
            <br />
            <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
          </h1>
          <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
            discover stylish Nike arrivals, quality qomfort. and innovation for ur active li</p>
          <Button Label={"Shop now"} LabelUrl={arrowRight}/>
        <div
          className='
            flex 
            justify-start 
            items-start 
            flex-wrap 
            w-full 
            mt-20 
            gap-16'>
          {statistics.map(
          (stats, index) => (
            <div key={stats.label} className="">
              <p className="font-palanquin font-bold text-4xl">{stats.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stats.label}</p>
            </div>
          )
            
          
          )}  

        </div>
      </div>
      <div className='relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img 
          src={bigShoe} 
          alt=""
          width={610}
          height={500}
          
          className='object-contain relative z-10'/>
          <div className='
          flex 
          sm:gap-6 
          gap-4 
          absolute 
          -bottom-[5%] 
          max-sm:px-6 
          '>
            {shoes.map((shoe,index)=> (
              <div className="" key={shoe}>
                  <ShoeCard
                    imgUrl={shoe}
                    changeBigShoeImage = {
                      (shoe) => {setBigShoe(shoe)}
                    }
                    bigShoeImage={bigShoe}

                    

                    />
              </div>
            ))}
          </div>
      </div>
        
    </section>
  )
}

export default Hero