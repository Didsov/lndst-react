import React from 'react'
import { div } from 'three/examples/jsm/nodes/Nodes.js'



const ShoeCard = ({imgUrl, changeBigShoeImage, bigShoeImage}) => {
    const handleClick = () => {
        if(bigShoeImage !== imgUrl.bigShoe){
            changeBigShoeImage(imgUrl.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl
        ${bigShoeImage ===imgUrl.bigShoe? 'border-coral-red': 'border-transparent'}
        cursor-pointer max-sm:flex-1
        `}
        onClick={handleClick}>
            <div className='flex justify-center items-center bg-card bg-center bg-cover sm:h-40 rounded-xl p-4'>
                <img src={imgUrl.thumbnail} alt=""
                width={127}
                height={103} />
            </div>
        </div>
  )
}

export default ShoeCard