import { AiFillHome } from "react-icons/ai"
import { GiPrayer } from "react-icons/gi"
import { IoInformationCircle } from "react-icons/io5"
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-yellow-500 shadow-md p-2 flex justify-around text-gray-200">
      <div className="flex flex-col items-center">
        <AiFillHome className="text-2xl" />
        <span className="text-xs">
        <Link  to='/'   >Home</Link>
        </span>
      </div>

      <div className="flex flex-col items-center">
        <GiPrayer className="text-2xl" />
        <span className="text-xs">
          <Link to="/form" >Prayer</Link>
        </span>
        
      </div>

      <div className="flex flex-col items-center">
        <IoInformationCircle className="text-2xl" />
        <span className="text-xs">Info</span>
      </div>
    </div>
  )
}

export default Footer
