import { Link } from "react-router-dom";
import church from "../image/church.png"

const Form = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100
     to-gray-300 flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${church})` }}>
      
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 animate-fadeIn">
        
        <h1 className="text-2xl font-bold text-center mb-6">
          የውዳሴ ማርያም ቀን መርጫ
        </h1>

        <div className="flex flex-col gap-4 text-lg">
          <Link className="menu-btn" to="/segno">የሰኞ ውዳሴ ማርያም</Link>
          <Link className="menu-btn" to="/mak">የማክሰኞ ውዳሴ ማርያም</Link>
          <Link className="menu-btn" to="/erebu">የረቡዕ ውዳሴ ማርያም</Link>
          <Link  className="menu-btn" to="/hamus">የሐሙስ ውዳሴ ማርያም</Link>
          <Link  className="menu-btn" to="/arb">የዐርብ ውዳሴ ማርያም</Link>
          <Link  className="menu-btn" to="/kidame">የቅዳሜ ውዳሴ ማርያም</Link>
          <Link  className="menu-btn" to="/ehud">የእሁድ ውዳሴ ማርያም</Link>
        </div>

      </div>
    </div>
  );
};

export default Form;

