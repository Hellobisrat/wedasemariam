
import React from "react";
import emebetachin from "./image/emebetachint.png";
import church from "./image/church.png";
import { Link } from "react-router-dom"


function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center px-4 py-10 relative"
      style={{ backgroundImage: `url(${church})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative grid md:grid-cols-2 gap-8 max-w-3xl w-full 
                      bg-white/85 backdrop-blur-md rounded-2xl shadow-2xl p-8 animate-fadeIn">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={emebetachin}
            alt="Emebetachin"
            className="rounded-xl shadow-lg w-64 md:w-80 object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-4">

          {/* Small Title */}
          <div className="uppercase tracking-wide text-sm text-red-600 font-bold">
            የድንግል ማርያም ምስጋና
          </div>

          {/* Main Title */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
            ሰው የሆነና በእኛ ያደረ ቃል ኢየሱስ ክርስቶስ ነው
          </h1>

          {/* Paragraph */}
          <p className="text-gray-800 text-lg leading-relaxed">
            አምላክን የወለደች የድንግል ማርያም ምስጋና በዕለት ተዕለት የሚያበራ ብርሃን ነው።
          </p>

          {/* Button */}
         <Link
  to="/form"
  className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white 
             font-semibold py-2 px-6 rounded-xl shadow-md transition-all 
             active:scale-95 w-fit"
>
  ጀምር
</Link>

        </div>

      </div>
    </div>
  );
}

export default Home;
