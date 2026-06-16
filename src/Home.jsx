import React from "react";
import emebetachin from "./image/emebetachint.png";
import church from "./image/church.png"

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center px-4 py-10 relative"
      style={{ backgroundImage: `url(${church})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative grid md:grid-cols-2 gap-6 max-w-3xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 animate-fadeIn">
        
        <div className="flex justify-center">
          <img
            src={emebetachin}
            alt="Emebetachin"
            className="rounded-xl shadow-md w-64 md:w-80 object-cover"
          />
        </div>

        <div className="flex flex-col justify-center space-y-4">
          <div className="uppercase tracking-wide text-sm text-indigo-700 font-bold">
            የድንግል ማርያም ምስጋና
          </div>

          <a
            href="/get-started"
            className="text-xl font-semibold text-gray-800 hover:text-indigo-600 transition"
          >
            ሰው የሆነና በእኛ ያደረ ቃል ኢየሱስ ክርስቶስ ነው
          </a>

          <p className="text-gray-700 leading-relaxed">
            አምላክን የወለደች የድንግል ማርያም ምስጋና በዕለት ተዕለት የሚያበራ ብርሃን ነው።
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;

