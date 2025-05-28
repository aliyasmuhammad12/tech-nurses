

export default function VipUpgradeSection() {
  const bonuses = [
    {
      id: 1,
      title: "A Free Audio Course",
      description: "Unlock & Level Up Your AI Mastery",
      value: "$197 VALUE",
      image: "/images/one.png",
    },
    {
      id: 2,
      title: "A Self Assessment Guide",
      description: "Discover Your AI Readiness & Growth Potential",
      value: "$299 VALUE",
      image: "/images/two.png",
    },
    {
      id: 3,
      title: "An AI Video Course",
      description: "The Future of Work & Healthcare Transformation with AI",
      value: "$399 VALUE",
      image: "/images/three.png",
    },
    {
      id: 4,
      title: "A 365 Audit Workbook",
      description: "Revolutionize AI Integration in Your Healthcare Practice",
      value: "$204 VALUE",
      image: "/images/four.png",
    },
  ]

  return (
    <section className="w-full">
      {/* Top Section */}
      <div className="bg-black text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-2">
            Invitation to a Special 7 day VIP Offer: Paid Upgrade (Optional)
          </h2>
          <p className="text-center text-sm mb-6 text-gray-300">
            <em>
              Following 7 Days of Career-Defining AI Mastery - Join Day 7 Days of Deep Dive Practical Career
              Breakthrough Session
            </em>
          </p>

          {/* Blue Box */}
          <div className="bg-blue-800 rounded-t-lg p-6">
            <h3 className="text-center text-xl font-bold mb-4">DAY 8-14</h3>
            <ul className="space-y-3 mb-6 text-sm md:text-base">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>
                  The Practical Hands-On AI Session Where You Implement Your Theoretical Breakthrough From Week 1
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>
                  Unlock Unlimited Access To Our Premium AI Tools, Frameworks, and Resources To Accelerate Your Growth
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>
                  Get 1-on-1 Mentorship To Unlock Your Digital Health Transformation Roadmap (What To Do In Your First 7
                  Days)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>
                  Create An Leadership Transition Your Global Visibility and Strategically Reposition for Impact,
                  Influence & Income
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Launch Your AI-powered Healthcare Career Blueprint and Never Treat Purpose and Paycheck!</span>
              </li>
            </ul>

            <div className="flex justify-center mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-bold uppercase text-sm">
                🔒 LOCK DOWN YOUR VIP SPOT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Red AI Banner */}
      <div className=" flex items-center justify-between px-4">
       <img src="/images/Section (1).png" alt="" />
      </div>

      {/* Bottom Section */}
      <div className="bg-blue-800 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-3xl font-brandb  mb-8">
            <span className="text-yellow-400">UPGRADE TO VIP</span> AND GET INSTANT ACCESS TO{" "}
            <span className="text-yellow-400">4 POWERFUL BONUSES</span> (WORTH OVER $1,199)
          </h3>

          {/* Bonuses Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {bonuses.map((bonus) => (
              <div key={bonus.id} className=" p-3 rounded-lg text-center">
                <div className="mb-2">
                  <img
                    src={bonus.image || "/placeholder.svg"}
                    alt={bonus.title}
                    width={150}
                    height={150}
                    className="mx-auto"
                  />
                </div>
                <h4 className="font-bold text-sm mb-1">{bonus.title}</h4>
                <p className="text-xs text-gray-300 mb-2">{bonus.description}</p>
                <p className="text-yellow-400 text-xs font-bold">{bonus.value}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-4">
            <p className="text-sm">WANT TO GET STARTED WITH THE FREE AI LITERACY CHALLENGE FIRST BEFORE UPGRADING?</p>
          </div>

          <div className="flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded font-bold">JOIN NOW</button>
          </div>
        </div>
      </div>
    </section>
  )
}
