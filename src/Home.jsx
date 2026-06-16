import React from 'react'
import emebetachin from './image/emebetachint.png'

function Home() {
  return (
    <div className='flex justify-center items-center  h-screen '>
    <div className='md:grid grid-cols-2 gap-3 p-10  '>
      <div className='md:flex-shrink-0 shadow-lg rounded-xl shadow-pink overflow-hidden'>
        <img className='rounded-xl md:w-80 sm:w-56'  src={emebetachin}  alt='hiwot '/>
      </div>
      <div className='flex flex-col justify-center items-start shadow-lg rounded-xl shadow-blue p-6'>
        <div className='uppercase tracking-wide text-sm text-indigo-600 font-bold'>
          የድንግል ማርያም ምስጋና
        </div>
        <a href="/get-started" className="block mt-1 text-lg leading-tight font-semibold text-slate-500 hover:underline">
       ሰው የሆነና በእኛ ያደረ ቃል ኢየሱስ ክርስቶስ ነው
    </a>
    <p className="mt-2 text-slate-600">
      አምላክን የወለደች የድንግል ማርያም ምስጋና
    </p>
      </div>
      
      </div>
      </div>
  )
}

export default Home;