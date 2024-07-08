import React from 'react'
import { services } from '../constants'
import ServicesCard from '../components/ServicesCard'


const Servises = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
    {services.map((item) => (
      <ServicesCard imgUrl={item.imgURL} label={item.label} subtext={item.subtext}/>
    ))}
    </section>
  )
}

export default Servises