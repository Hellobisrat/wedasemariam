import { Link } from "react-router-dom"
import { AiFillHome } from "react-icons/ai"
import { GiPrayer } from "react-icons/gi"
import { IoInformationCircle } from "react-icons/io5"

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-yellow-500 shadow-md p-2 flex justify-around text-gray-400">

      <Link to="/" className="flex flex-col items-center active:scale-95 transition-all">
        <AiFillHome className="text-2xl" />
        <span className="text-xs">Home</span>
      </Link>

      <Link to="/form" className="flex flex-col items-center active:scale-95 transition-all">
        <GiPrayer className="text-2xl" />
        <span className="text-xs">Prayer</span>
      </Link>

      <Link to="/about" className="flex flex-col items-center active:scale-95 transition-all">
        <IoInformationCircle className="text-2xl" />
        <span className="text-xs">Info</span>
      </Link>

    </div>
  )
}

export default Footer
