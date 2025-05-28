import { Check } from "lucide-react";

export default function WhoShouldJoin() {
  return (
    <section className="py-12 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who Should Join Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-6 text-center">
            Who Should Join?
          </h2>

          {/* Bullet Points */}
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-gray-800">
                <strong>Nurses & Midwives</strong> - Stay ahead of AI-driven
                changes in patient care, digital health, and global career
                growth.
              </p>
            </div>
            <div className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-gray-800">
                <strong>Current & Medical Professionals</strong> - Learn how to
                use AI systems, from basic to complex patient management.
              </p>
            </div>
            <div className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-gray-800">
                <strong>Healthcare Professionals</strong> - Maximize your
                innovation with AI-driven content/business solutions.
              </p>
            </div>
          </div>

          {/* Blue Section */}
          <div className="bg-blue-700 text-white p-6 rounded-lg mb-6">
            <div className="flex items-start mb-4">
              <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
              <p>
                <strong>
                  Healthcare Professionals, Community & Non-Healthcare Providers
                </strong>{" "}
                - Maximize your innovation with AI-driven content/business
                solutions.
              </p>
            </div>
            <div className="flex items-start">
              <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
              <p>
                AI will change your work-life reality when you approach -
                LinkedIn, community, network, FMLA, or personal practice. We
                have prepared!
              </p>
            </div>
          </div>

          {/* Join Button */}
          <div className="text-center mb-8">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-bold rounded">
              🚀 JOIN THE CHALLENGE NOW!
            </button>
          </div>
        </div>

        {/* Professional Image */}
        <div className="relative">
          {/* Main White Box */}
          <div className="bg-black p-4">
            <div className="bg-white p-12 relative z-10">
              <div className="flex justify-center mb-4">
                <div className="">
                  <div className="w-80 h-80 rounded-full overflow-hidden ">
                    <img
                      src="/images/girl.png"
                      alt="Healthcare Professional"
                      width={320}
                      height={320}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="text-start">
                <p className="text-gray-700 max-w-2xl">
                  We have testimonials to demonstrate the practical impact of
                  our specialized approach to healthcare and expanding during
                  the work-time and income!
                </p>
              </div>
            </div>
          </div>

          {/* Overlay Image */}
          <div className="relative -mt-16 flex justify-center z-20">
            <img src="/images/page.png" alt="" className="" />
          </div>
        </div>
      </div>
    </section>
  );
}
