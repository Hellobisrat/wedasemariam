
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import church from "../image/church.png"

const days = [
  { label: "የሰኞ ውዳሴ ማርያም", link: "/segno" },
  { label: "የማክሰኞ ውዳሴ ማርያም", link: "/mak" },
  { label: "የረቡዕ ውዳሴ ማርያም", link: "/erebu" },
  { label: "የሐሙስ ውዳሴ ማርያም", link: "/hamus" },
  { label: "የዐርብ ውዳሴ ማርያም", link: "/arb" },
  { label: "የቅዳሜ ውዳሴ ማርያም", link: "/kidame" },
  { label: "የእሁድ ውዳሴ ማርያም", link: "/ehud" }
]

const Form = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${church})` }}
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative w-full max-w-md bg-white/90 shadow-xl rounded-2xl p-8 animate-fadeIn">
        <h1 className="text-2xl font-bold text-center mb-6">
          የውዳሴ ማርያም ቀን ምርጫ
        </h1>

        <div className="flex flex-col gap-4 text-lg">
          {days.map((day, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to={day.link}
                className="block w-full text-center bg-gradient-to-r from-gray-200 to-gray-300 
                           hover:from-gray-300 hover:to-gray-400 text-gray-800 font-semibold 
                           py-3 rounded-xl shadow-md transition-all"
              >
                {day.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Form
