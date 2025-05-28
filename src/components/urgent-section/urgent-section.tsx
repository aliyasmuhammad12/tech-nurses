

import { Calendar } from "lucide-react"

export default function UrgencyCtaSection() {
  return (
    <div className="w-full">
      {/* Blue header with speech bubble */}
      <div className="bg-blue-700 py-8 px-4 relative">
        <div className="max-w-4xl mx-auto flex justify-center">
          <div className="relative">
            {/* Speech bubble */}
            <div className="bg-white rounded-lg p-4 shadow-lg max-w-xs text-center relative">
              <p className="text-sm text-gray-800 leading-relaxed">
                Get the last remaining <span className="font-bold text-blue-600">FREE slots</span> before 5th of
                November when it becomes a <span className="font-bold">paid event!</span>
              </p>
              {/* Speech bubble arrow */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content section */}
      <div className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">P.S. Don't Wait Until It's Too Late.</h2>

          {/* Description text */}
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            This is a <span className="font-bold">one-time opportunity</span>—once all the{" "}
            <span className="font-bold">FREE SLOTS</span> are taken,{" "}
            <span className="font-bold">you will have to pay to join the challenge!</span>
          </p>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto space-x-2">
            <Calendar className="w-5 h-5" />
            <span>JOIN THE CHALLENGE NOW!</span>
          </button>
        </div>
      </div>
    </div>
  )
}
