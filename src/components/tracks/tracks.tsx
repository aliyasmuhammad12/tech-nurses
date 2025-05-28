
import { Gamepad, Send } from "lucide-react"

type TrackItem = {
  id: number
  title: string
  subtitle: string
  features: string[]
}

export default function LearningTrack() {
  const tracks: TrackItem[] = [
    {
      id: 1,
      title: "Track 1",
      subtitle: "SUPERCHARGE YOUR NURSING & HEALTHCARE CAREER WITH AI",
      features: [
        "Master AI-powered clinical decision support tools.",
        "Land migration-sponsored international healthcare jobs.",
        "Optimize your LinkedIn, Resume, and Cover Letter with AI.",
        "Build a personal brand recruiters can't resist.",
      ],
    },
    {
      id: 2,
      title: "Track 2",
      subtitle: "MASTER DIGITAL HEALTH & REMOTE PATIENT CARE",
      features: [
        "Learn telemedicine & remote care best practices.",
        "Use AI for diagnostics, patient monitoring, and documentation.",
        "Automate healthcare tasks and reduce burnout.",
      ],
    },
    {
      id: 3,
      title: "Track 3",
      subtitle: "UNLOCK NEW INCOME STREAMS WITH AI",
      features: [
        "Launch your own remote healthcare business.",
        "Monetize your expertise through online coaching and consulting.",
        "Build AI-powered digital health products and services.",
      ],
    },
  ]

  const progressPercentage = 67

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium font-brandb text-gray-800 uppercase tracking-wide mb-4">YOUR LEARNING TRACK</h2>
          <p className="text-lg text-gray-600">Learn AI Strategies for Nurses & Healthcare Professionals in 2025</p>
        </div>

        {/* Track Cards */}
        <div className="space-y-6 mb-12">
          {tracks.map((track) => (
            <div key={track.id} className="bg-black rounded-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                {track.title} - {track.subtitle}
              </h3>
              <ul className="space-y-3">
                {track.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Send className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white text-base md:text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-center mb-2">
            <span className="text-sm text-gray-600 font-medium">{progressPercentage}% of FREE Slots taken</span>
          </div>
          <div className="w-full max-w-md mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-gray-400 via-gray-500 to-red-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex items-center justify-center">
          <button className="bg-custom-gradient flex items-center justify-center gap-2 hover:bg-blue-700 shadow-lg text-white px-8 py-4 text-lg font-bold rounded-lg">
            <Gamepad/> CLAIM 1 FREE SLOT LEFT!
          </button>
         
        </div>
      </div>
    </section>
  )
}
