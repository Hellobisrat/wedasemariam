import React from 'react'
import {Link}  from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center rounded-lg p-5 shadow-2xl shadow-slate-400 '>
      <h5 className='text-blue font-semibold  text-lg'> <Link to='/'>ውዳሴ ማርያም</Link></h5>
      <ul className='flex justify-between gap-4 uppercase'>
        
        <li><Link to='/'>HOME </Link></li>
        <li><Link to='/form'>ማውጫ</Link></li>
         <li><Link to='/yewe'>ይዌድስዋ </Link></li>

      </ul>
    </div>
  )
}

export default Navbar