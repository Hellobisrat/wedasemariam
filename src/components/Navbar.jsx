import React from "react";
import { Link } from "react-router-dom";
import { Home, Menu, HeartHandshake } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-5 py-4 rounded-xl shadow-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      
      <h5 className="text-xl font-bold tracking-wide drop-shadow-md">
        <Link to="/">ውዳሴ ማርያም</Link>
      </h5>

      <ul className="flex items-center gap-6 text-sm font-semibold">
        <li className="flex items-center gap-1 hover:opacity-80 transition">
          <Home size={18} />
          <Link to="/">Home</Link>
        </li>

        <li className="flex items-center gap-1 hover:opacity-80 transition">
          <Menu size={18} />
          <Link to="/form">ማውጫ</Link>
        </li>

        <li className="flex items-center gap-1 hover:opacity-80 transition">
          <HeartHandshake size={18} />
          <Link to="/yewe">ይዌድስዋ</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
