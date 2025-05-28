import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function TestimonialSections() {
  const videos = [
    "https://d1yei2z3i6k35z.cloudfront.net/1825610/68121c01b057b_WhatsAppVideo2025-04-30at1.45.47PM.mp4",
    "https://d1yei2z3i6k35z.cloudfront.net/1825610/68121c4dc25c3_WhatsAppVideo2025-04-30at1.46.11PM.mp4",
    "https://d1yei2z3i6k35z.cloudfront.net/1825610/68121c6be9984_WhatsAppVideo2025-04-30at1.45.58PM.mp4",
  ];

  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(index);
    } else {
      video.pause();
      setIsPlaying(null);
    }
  };

  return (
    <div className="bg-[#9B9B9B]">
      <div className="max-w-7xl mx-auto min-h-screen pb-6 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center py-6">
          <h1 className="text-2xl sm:text-3xl font-medium font-brandb text-gray-800 uppercase tracking-wide">
            WHAT YOU MISSED FROM THE LAST COHORT
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Here's what our fellow participants are saying about our sessions
          </p>
        </div>

        {/* Videos */}
        <div className="flex flex-col justify-center items-center gap-10 sm:gap-16 md:gap-20">
          {videos.map((video, index) => (
            <div key={index} className="relative w-full max-w-full sm:max-w-7xl group px-0 sm:px-2">
              <video
                ref={(el) => {
                  if (el) videoRefs.current[index] = el;
                }}
                src={video}
                className="w-full h-auto rounded-lg shadow-lg"
                controls={false}
                playsInline
              />
              {/* Play/Pause Button */}
              <button
                onClick={() => togglePlay(index)}
                className="absolute top-2 left-2 bg-black/50 hover:bg-black/70 rounded-full p-2 z-10"
              >
                {isPlaying === index ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center items-center">
          <button className="bg-gradient-to-r from-[#012F80] to-[#7B26DA] hover:opacity-90 shadow-lg text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-lg">
            JOIN OUR COHORT
          </button>
        </div>
      </div>
    </div>
  );
}
