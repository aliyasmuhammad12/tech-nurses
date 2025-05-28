import { Shrink } from "lucide-react";

export default function WhyJoinSection() {
  const benefits = [
    "Improve patient care and healthcare delivery",
    "Land international role remotely or overseas",
    "Elevate your healthcare career to the next level",
    "Launch new digital health businesses",
    "Make money from your skills, knowledge, expertise and experience — from anywhere!",
  ];

  return (
    <section className="py-16  relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute left-[450px] inset-0 opacity-1"
        style={{
         backgroundImage: `url('/images/world.png')`,
          backgroundSize: "cover",
          height:'300px',
          width:'700px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
            Why Join This Challenge?
          </h2>
        </div>

        {/* Content */}
        <div className="mb-8">
          <p className="text-lg text-gray-800 mb-6">
            This challenge equips you with{" "}
            <span className="font-semibold">
              real-world, beginner-friendly AI skills
            </span>{" "}
            to:
          </p>

          {/* Benefits List */}
          <ul className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <Shrink className="w-6 h-6 text-purple-400" />
                </span>
                <span className="text-gray-800 text-lg">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* Banner */}
          <div className="bg-purple-600 text-white text-center py-1 font-bold text-lg mb-8">
            NO TECH EXPERIENCE REQUIRED!
          </div>

          {/* Bottom Text */}
          <p className="text-gray-700 text-center">
            AI is transforming nursing, midwifery and healthcare, creating
            unprecedented opportunities, new roles, more exciting career paths,
            and endless remote income streams. Whether you're a bedside nurse,
            community midwife, public health expert, or healthcare entrepreneur,
            the future belongs to those who can unlearn, relearn and adapt to
            the new digital economy!
          </p>
        </div>
      </div>
    
    </section>
  );
}
