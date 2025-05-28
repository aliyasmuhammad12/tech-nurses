import { Mail } from "lucide-react"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-05-12T00:00:00")

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time: number) => time.toString().padStart(2, "0")

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/Section.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 text-center w-full lg:w-auto">
        {/* Top Banner */}
        <div className="mb-8">
          <p className="text-white text-sm md:text-base font-medium pt-[22px] text-[12px] font-brandm">
            <span className="text-orange-400">ATTENTION:</span> Nurses & Healthcare Professionals — Your Global Career
            Upgrade Starts Now!
          </p>
        </div>

        {/* Main Headline */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-5xl lg:text-4xl text-white leading-tight font-brandb">
            SKILL UP, LAND <span className="text-purple-500">HIGH-PAYING</span> ROLES & FUTURE-PROOF YOUR{" "}
            <span className="text-purple-500">CAREER</span> WITH AI!
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-8">
          <p className="text-white text-lg md:text-xl">
            Join 1000+ Nurses, Midwives, and Healthcare Professionals for the Ultimate Free —
          </p>
        </div>

        {/* Large 7 and Challenge Title */}
        <div className="mb-8 flex items-center justify-center">
          <img src="/images/saven.png" alt="7-Day Challenge" className="max-w-full h-auto" />
        </div>

        {/* Event Description */}
        <div className="mb-6 text-center">
          <p className="text-white text-lg md:text-xl font-medium mb-2">
            A 2025 International Nurses and Midwifery Day Investment in Nurses, Midwives and Healthcare Professionals
          </p>
          <p className="text-white text-base md:text-lg">Monday, May 12, 2025 - Sunday, May 18, 2025</p>
          <p className="text-white text-lg font-bold mt-2">FREE Enrollment Now Open!</p>
        </div>

        {/* CTA Button */}
        <div className="mb-8">
          <button className="bg-custom-gradient flex items-center justify-center gap-2 hover:bg-blue-700 shadow-lg text-white px-8 py-4 text-lg font-bold rounded-lg">
            <Mail /> SIGN UP NOW!
          </button>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-2 text-3xl md:text-4xl font-bold text-[#7926D9] mb-2">
            <span>{formatTime(timeLeft.days)}</span>
            <span className="text-purple-400">:</span>
            <span>{formatTime(timeLeft.hours)}</span>
            <span className="text-purple-400">:</span>
            <span>{formatTime(timeLeft.minutes)}</span>
            <span className="text-purple-400">:</span>
            <span>{formatTime(timeLeft.seconds)}</span>
          </div>
          <div className="flex items-center justify-center space-x-4 sm:space-x-8 text-sm text-gray-300 uppercase tracking-wide">
            <span>Days</span>
            <span>Hours</span>
            <span>Minutes</span>
            <span>Seconds</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6 flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between w-full max-w-[95%] sm:max-w-[85%] md:max-w-3xl lg:max-w-4xl">
          <div className="text-white text-center sm:text-left">
            <h3 className="text-xl font-bold">7-DAY AI LITERACY CHALLENGE</h3>
            <p className="text-sm text-gray-300">Sign up now to participate</p>
          </div>
          <div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-bold rounded">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
