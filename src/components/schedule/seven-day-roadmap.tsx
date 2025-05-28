
import {  NotebookIcon } from "lucide-react"

interface DayContent {
  day: number
  title: string
  description: string[]
}

const roadmapData: DayContent[] = [
  {
    day: 1,
    title: "DAY 1",
    description: [
      "How AI is Revolutionizing Nursing, Healthcare, Remote Jobs & Migration Opportunities.",
      "The Top 5 Remote Digital Gold Rush Nurse Must-Haves",
    ],
  },
  {
    day: 2,
    title: "DAY 2",
    description: [
      "Why AI is the Future of Nursing, Midwifery & Healthcare.",
      "How to Identify 5 Ways AI is Changing Your Field",
    ],
  },
  {
    day: 3,
    title: "DAY 3",
    description: [
      "AI for Beginners: Introduction to AI & Prompt Engineering",
      "Hands-On: Create Your First Healthcare AI Prompt",
    ],
  },
  {
    day: 4,
    title: "DAY 4",
    description: [
      "Building Your AI Toolkit: Must-Have Tools for Nurses, Midwives and Healthcare Professionals",
      "Getting the Best out of these tools like ChatGPT, Gemini/Bard, Meta AI, Canva AI & Career Evolution Tools",
    ],
  },
  {
    day: 5,
    title: "DAY 5",
    description: [
      "Self-Assessment: Where You Are vs Where You Want to Go in the Digital Healthcare World",
      "AI Job Assessment: Who You Have vs What You Need to Excel in the AI-Driven Global Economy",
      "Career Roadmapping: You will use AI to generate a mind blowing Personalized Global Career Blueprint perfect just for you.",
    ],
  },
  {
    day: 6,
    title: "DAY 6",
    description: [
      "AI for Local & International Job Seekers: How to Build AI-powered ATS Systems, Optimize your Profile, and Attract International Opportunities",
      "Build, Fine-Tune, Launch or Elevate Your Digital Health Super-Offering, Passive Income Opportunities",
    ],
  },
  {
    day: 7,
    title: "DAY 7",
    description: ["Life-Changing Deep-Dive Sessions to Unlock a Future of Opportunities with AI"],
  },
]

export default function SevenDayRoadmap() {
  return (
    <div className="max-w-7xl mx-auto bg-white min-h-screen">
      {/* Header Section */}
      <div className="text-center py-8 px-4">
        <h1 className="text-3xl font-medium font-brandb text-blue-700 uppercase tracking-wide mb-3">Your 7-Day Roadmap</h1>
        <p className="text-gray-600 text-sm md:text-base mb-2">
          <span className="font-semibold">7-Day Sprint From Zero to Global Career Readiness</span>
        </p>
        <p className="text-black text-xs font-bold md:text-sm mt-1">
          7 Days of FREE Training For Every Student Nurse, Nursing & Midwifery Clinician, Scholar, Researcher, Educator,
          Leader & Innovator.
        </p>
      </div>

      {/* Roadmap Cards */}
      <div className="px-4 space-y-4 mb-8">
        {roadmapData.map((day, ) => (
          <div
            key={day.day}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl md:text-2xl font-bold">{day.title}</h2>
              <div className="bg-white bg-opacity-20 rounded-full p-2">
                {/* <Calendar className="w-5 h-5" /> */}
              </div>
            </div>
            <div className="space-y-2">
              {day.description.map((desc, descIndex) => (
                <p key={descIndex} className="text-sm md:text-base leading-relaxed opacity-95">
                  {desc}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="px-4 mb-6">
        <div className="flex justify-center">
          <div className="flex space-x-1">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className={`h-1 w-3 ${i < 15 ? "bg-gray-400" : "bg-red-500"}`} />
            ))}
          </div>
        </div>
        <p className="text-center font-bold text-base text-gray-500 mt-2">80% of FREE Spots Taken</p>
      </div>

      {/* Bottom Section */}
      <div className="px-4 pb-8">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Free Spots are limited!</span> Once seating registration, we've had an
            overwhelming response, and{" "}
            <span className="font-semibold text-black">80% of the FREE spots have been taken.</span> Don't wait till
            it's too late, find other a week—
          </p>
          <p className="text-sm text-gray-600">
            register now to <span className="font-semibold">guarantee your spot!</span>
          </p>
        </div>

        {/* Stats */}
        {/* <div className="flex justify-center items-center space-x-6 mb-6 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>Limited Spots</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>7 Days</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>Free Training</span>
          </div>
        </div> */}

        {/* CTA Button */}
        <div className="flex items-center justify-center">
          
            <button className="bg-custom-gradient flex items-center justify-center gap-2 hover:bg-blue-700 shadow-lg text-white px-8 py-4 text-lg font-bold rounded-lg">
            <NotebookIcon/>  REGISTER FOR THE CHALLENGE
          </button>
        </div>
      </div>
    </div>
  )
}
