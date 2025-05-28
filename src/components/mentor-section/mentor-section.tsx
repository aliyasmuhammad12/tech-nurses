import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function MentorSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-12 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-medium font-brandb text-blue-700 uppercase tracking-wide">
            Connect With and Learn Alongside AI Enthusiasts & Global Industry
            Leaders!
          </h2>
        </div>

        {/* Mentor Card */}
        <div className="flex justify-center mb-12 px-4">
          <div className="w-full max-w-md overflow-hidden rounded-lg">
            <img src="/images/mentor.png" alt="Mentor" className="w-full" />
          </div>
        </div>

        {/* Registration Form */}
        <div className="flex justify-center items-center py-12 bg-[#FF00000A] px-4">
          <div className="w-full max-w-5xl bg-gray-300 shadow-lg relative overflow-hidden">
            <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row">
              {/* Left side content */}
              <div className="md:w-1/2 pr-0 md:pr-6 mb-6 md:mb-0">
                <div className="bg-red-600 text-white p-3 mb-6">
                  <h1 className="text-lg sm:text-xl font-bold leading-tight">
                    The 7-Day AI Literacy Challenge
                    <br />
                    For Healthcare Professionals
                  </h1>
                </div>

                <div className="mb-6">
                  <p className="text-lg sm:text-2xl font-bold">
                    SPOTS ARE LIMITED -{" "}
                    <span className="text-blue-700">REGISTER NOW</span> BEFORE
                    IT'S TOO LATE!
                  </p>
                </div>

                <p className="text-gray-800 text-sm">
                  Get instant access to our AI-driven community for healthcare
                  professionals, nurses, and midwives.
                </p>
              </div>

              {/* Right side form */}
              <div className="md:w-1/2">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />

                  <div className="flex">
                    <div className="flex items-center border border-gray-300 bg-white px-3">
                      <img
                        src="/placeholder.svg?height=20&width=30"
                        alt="Flag"
                        className="w-5 h-3 mr-1"
                      />
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex-1 p-3 border border-gray-300 border-l-0 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 transition-colors"
                  >
                    JOIN NOW
                  </button>

                  <p className="text-xs text-gray-600 text-right">
                    No spam ever, unsubscribe anytime
                    <br />© Divine Nweze
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
