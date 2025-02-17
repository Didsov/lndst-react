import React from 'react'
import { reviews } from '../constants'
import Review from '../components/Review'
const CustomerReviews = () => {
  return (
    <section 
    className='max-container'
    >
      <h3 className='font-palanquin text-center text-4xl font-bold'> 
        What Our 
        <span className='mx-2 text-coral-red'>Customers</span>
        Say 
      </h3>
      <p className='info-text m-auto mt-4 msx-w-lg text-center'>
      Hear genuine stories from our satisfied customers about their exceptional experiences with us
      </p>
      <div className='mt-24 flex flex-1 justify-evenly items-center gap-14'>
        {reviews.map( (review) => (
          <Review key={review.customerName} imgUrl={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback}  />
        )  )}
      </div>
    </section>
  )
}

export default CustomerReviews