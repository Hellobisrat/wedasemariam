import { Link } from "react-router-dom"
import { AiFillHome } from "react-icons/ai"
import { GiPrayer } from "react-icons/gi"
import { IoInformationCircle } from "react-icons/io5"

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-2 flex justify-around text-gray-700">

      {/* HOME */}
      <Link to="/" className="flex flex-col items-center">
        <AiFillHome className="text-2xl" />
        <span className="text-xs">Home</span>
      </Link>

      {/* PRAYER */}
      <Link to="/form" className="flex flex-col items-center">
        <GiPrayer className="text-2xl" />
        <span className="text-xs">Prayer</span>
      </Link>

      {/* INFO */}
      <Link to="/about" className="flex flex-col items-center">
        <IoInformationCircle className="text-2xl" />
        <span className="text-xs">Info</span>
      </Link>

    </div>
  )
}

export default Footer
