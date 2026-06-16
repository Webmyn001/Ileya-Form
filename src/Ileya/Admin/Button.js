import React from 'react'

const Button = (props) => {
  return (
    <button className='mt-[25px] py-1 mb-2 focus:outline-0 px-5 hover:border-transparent text-white text-center duration-300 hover:border-[0.2px] rounded-lg bg-[#323232]'>
        {props.name}
    </button>
  )
}

export default Button