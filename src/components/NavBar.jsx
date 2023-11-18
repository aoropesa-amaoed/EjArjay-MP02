import React from 'react'
import Logo from '../assets/tiktik-logo.png'
import { Link } from 'react-router-dom'
import { GoogleLogin, googleLogout } from '@react-oauth/google';


const NavBar = () => {
  const user = false;
  return (   
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
      <Link to={'/'}>
        <div className='w-[100px] md:w-[129px]'>
          <img className='cursor-pointer' src={Logo} alt="Tiktik" layout='responsive' />
        </div>
      </Link>
      <div>SEARCH</div>  
      {/* <div>
        {user ? (
          <div>Logged In</div>
        ) : (
          <GoogleLogin 
          onSuccess={(response)=>(
            console.log(response)
          )}
          onError={()=> console.log('Error')}
          />
        )

        }
      </div>     */}
    </div>
  )
}

export default NavBar

