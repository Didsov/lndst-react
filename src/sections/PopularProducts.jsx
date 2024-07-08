import React from 'react'
import { products } from '../constants'
import PopularProductsCard from '../components/PopularProductsCard'

const PopularProducts = () => {
  return (
    <section
    id='products'
    className='max-container max-sm:mt-12 '>
      <div className='flex flex-col justify-start gap-5 '>
        <h2 className='text-4xl font-palanquin font-bold'> Our <span className='text-coral-red'>Popular</span> Products</h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Experience top-notch quality and sty1e with оиг sought-after selections. Discover а world of comfort, design, апd value</p>

      </div>
      <div className='mt-16 grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
        {
          products.map( (product) => (
            <PopularProductsCard key={product.name} imgUrl={product.imgURL} name={product.name} price={product.price}/>
          ))
        }
      </div>

    </section>
  )
}

export default PopularProducts