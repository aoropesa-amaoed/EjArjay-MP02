import React from 'react'
import Logo from '../assets/tiktik-logo.png'

const NavBar = () => {
  return (
    
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
      <div className='w-[100px] md:w-[129px] md:h-[30px] h-[38px]'>
    <img className='cursor-pointer' src={Logo} alt="" layout='responsive' />
    </div>
    </div>
  )
}

export default NavBar