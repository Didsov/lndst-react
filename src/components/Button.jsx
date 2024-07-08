import React from 'react'
import { label } from 'three/examples/jsm/nodes/Nodes.js'

const Button = ({Label, LabelUrl, backgroundColor, borderColor, textColor, fullWidth}) => {
  return (
    <button className={`
        flex 
        justify-center 
        items-center 
        gap-2 
        px-7 py-4 
        border 
        font-montserrat 
        ${backgroundColor? backgroundColor:'bg-coral-red' }
        ${borderColor? borderColor:'border-coral-red'  } 
        ${textColor? textColor:'text-white'  } 
        ${fullWidth&& 'w-full' }
        text-lg 
        leading-none 
        rounded-full 
       `}
        
        >


        {Label}
        {LabelUrl && ( 
        <img src={LabelUrl} alt="->"
        className='ml-2 rounded-full w-5 h-5 ' />
         )}
    </button>

  )
}

export default Button