import { highlightText } from "../utils/highlight"

export default function PrayerPage({ title, subtitle, sections }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8 animate-fadeIn">

        <h1 className="text-center text-xl font-bold">{title}</h1>
        {subtitle && (
          <h2 className="text-2xl md:text-3xl font-bold text-center leading-relaxed mb-6">
            {subtitle}
          </h2>
        )}

        <div className="space-y-6 text-lg leading-8 text-gray-800">
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
