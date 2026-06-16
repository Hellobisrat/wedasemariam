import React from "react";
import emebetachin from "./image/emebetachint.png";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100 flex justify-center items-center px-4 py-10">
      
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl w-full bg-white rounded-2xl shadow-xl p-6 animate-fadeIn">
        
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={emebetachin}
            alt="Emebetachin"
            className="rounded-xl shadow-md w-64 md:w-80 object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-4">
          
          <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
            የድንግል ማርያም ምስጋና
          </div>

          <a
            href="/get-started"
            className="text-xl font-semibold text-gray-700 hover:text-indigo-600 transition"
          >
            ሰው የሆነና በእኛ ያደረ ቃል ኢየሱስ ክርስቶስ ነው
          </a>

          <p className="text-gray-600 leading-relaxed">
            አምላክን የወለደች የድንግል ማርያም ምስጋና በዕለት ተዕለት የሚያበራ ብርሃን ነው።
          </p>

        </div>
      </div>
    </div>
  );
}

export default Home;
