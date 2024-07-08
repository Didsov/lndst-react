import React from 'react'
import { star } from '../assets/icons'
/*
imgURL: any;
customerName: string;
rating: number;
feedback
*/
const Review = ({imgUrl, customerName, rating, feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgUrl} alt="customer" className='rounded-full object-cover w-[120px] h-[120px]'/>
        <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
        <div className="flex mt-3 justify-center items-center gap-2.5">
            <img src={star} width={24} height={24} className='object-contain m-0'  alt="" />
            <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
        </div>
        <h3 className='ml-1 font-palanquin text-3xl text-center font-bold'>{customerName}</h3>
    </div>
  )
}

export default Review