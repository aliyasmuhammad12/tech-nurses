import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="flex flex-col items-center justify-center md:hidden relative h-[250px]">
          {/* Logo */}
          <img src="/images/logo.png" alt="Logo" className="w-[120px] h-[60px] mb-4" />

          {/* Countdown */}
          <div className="flex space-x-4 text-purple-600 font-bold text-2xl">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINUTES", value: timeLeft.minutes },
              { label: "SECONDS", value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <span>{formatTime(item.value)}</span>
                <span className="text-xs text-gray-500 font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute bottom-0 right-0 mb-2 mr-2"
          >
            {menuOpen ? (
              <X className="w-8 h-8 text-purple-600" />
            ) : (
              <Menu className="w-8 h-8 text-purple-600" />
            )}
          </button>

          {/* Mobile Menu Dropdown */}
          {menuOpen && (
            <div className="absolute top-full mt-4 w-full flex flex-col items-center space-y-4 bg-white shadow-md py-4 rounded-lg z-50">
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">About Us</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">Events/News</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">Contact Us</a>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium">
                Join Community
              </button>
            </div>
          )}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo */}
          <img src="/images/logo.png" alt="Logo" className="w-[120px] h-[60px]" />

          {/* Countdown */}
          <div className="flex items-end space-x-4 text-center text-purple-600 font-bold text-2xl">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINUTES", value: timeLeft.minutes },
              { label: "SECONDS", value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <span>{formatTime(item.value)}</span>
                <span className="text-xs text-gray-500 font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Full Nav */}
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">About Us</a>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 font-medium">
                <span>Events/News</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">Contact Us</a>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium">
              Join Community
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
