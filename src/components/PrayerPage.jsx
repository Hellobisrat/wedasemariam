import { highlightText } from "../utils/highlight"

export default function PrayerPage({ title, subtitle, sections }) {
  return (
    <div className="min-h-screen 
      bg-gradient-to-b from-gray-50 to-gray-300 
      dark:from-gray-900 dark:to-gray-800 
      py-5 px-4 transition-colors duration-300">

      <div className="max-w-3xl mx-auto 
        bg-white dark:bg-gray-800 
        shadow-xl rounded-xl p-8 
        animate-fadeIn transition-colors duration-300">

        <h1 className="text-center text-xl font-bold dark:text-gray-100">
          {title}
        </h1>

        {subtitle && (
          <h2 className="text-2xl md:text-3xl font-bold text-center leading-relaxed mb-6 dark:text-gray-200">
            {subtitle}
          </h2>
        )}

        <div className="space-y-6 text-xl leading-10 
          text-gray-800 dark:text-gray-200 
          p-3 md:p-5 transition-colors duration-300">

          {sections.map((section, index) => (
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

