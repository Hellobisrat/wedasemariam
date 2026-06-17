import React from 'react'
import data from "../data/prayer/hamus.json"

const highlightWords = [
  "ማርያም",
  "ድንግል ማርያም",
  "እግዚአብሔር",
  "መንፈስ ቅዱስ",
  "ገብርኤል",
  "ክርስቶስ"
]

function highlightText(text) {
  let result = text
  highlightWords.forEach(word => {
    const regex = new RegExp(word, "g")
    result = result.replace(regex, `<span class='text-red-500'>${word}</span>`)
  })
  return result
}

const hamus = () => {
  return (
     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8 animate-fadeIn">

        <h1 className="text-center text-xl font-bold">{data.title}</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-center leading-relaxed mb-6">
          {data.subtitle}
        </h2>

        <div className="space-y-6 text-lg leading-8 text-gray-800">
          {data.sections.map((section, index) => (
            <p
              key={index}
              dangerouslySetInnerHTML={{ __html: highlightText(section.text) }}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default hamus