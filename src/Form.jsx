
import { Link } from 'react-router-dom';



const Form = () => {

 
  return (
    <div className='flex items-center justify-center h-screen'>
    <div className='flex flex-col  justify-center  gap-2 text-sm rounded-lg shadow-lg shadow-slate-600 p-6 py-10 w-[500px]'>
      <Link className='link-style' to='/segno' >የሰኞ ውዳሴ ማርያም</Link> 
      <Link className='link-style' to='/mak'>የማክሰኞ ውዳሴ ማርያም</Link>
      <Link className='link-style' to='/erebu'>የረቡዕ ውዳሴ ማርያም</Link>
      <Link className='link-style' to="/hamus">የሐሙስ ውዳሴ ማርያም</Link>
      <Link className='link-style' to='/arb'>የዐርብ ውዳሴ ማርያም</Link>
       <Link className='link-style' to="/kidame">የቅዳሜ ውዳሴ ማርያም</Link>
        <Link className='link-style ' to='/ehud'> የእሁድ ውዳሴ ማርያም</Link>
    </div>
    </div>
  )
}

export default Form