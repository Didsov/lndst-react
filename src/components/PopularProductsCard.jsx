import React from 'react'
import { star } from '../assets/icons'

const PopularProductsCard = ({imgUrl, name, price}) => {
    
  return (
    
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgUrl} alt={name} className='w-[280px] h-[280px]'  />
        <div className='mt-8 flex  justify-start gap-2.5'>
            <img src={star} alt="" width={24} height={24} />
            <p className='font-montserrat text-xl text-slate-gray leading-normal'>(4.5)</p>
        </div>
        <div className='flex flex-col'>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className='mt-2 font-montserrat text-coral-red text-2xl leading-normal'>{price}</p>
        
        </div>
    </div>
  )
}

export default PopularProductsCard