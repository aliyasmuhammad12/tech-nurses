
import Header from '../components/header/header'
import HeroSection from '../components/hero/hero'
import TestimonialSections from '../components/testimonials/testimonials'
import LearningTrack from '../components/tracks/tracks'
import WhyJoinSection from '../components/why-join-section/why-join-section'
import MentorSection from '../components/mentor-section/mentor-section'
import SevenDayRoadmap from '../components/schedule/seven-day-roadmap'
import VipUpgradeSection from '../components/vip-upgrade-section/vip-upgrade-section'
import WhoShouldJoin from '../components/why-should-join/why-should-join'
import FooterSection from '../components/footer/footer'
import UrgencyCtaSection from '../components/urgent-section/urgent-section'

function Landing() {
  return (
    <div>
        <Header/>
        <HeroSection/>
       <div className="bg-white border-b border-gray-300 py-4 px-4 text-center text-sm md:text-base">
      <p className="text-gray-800">
        AI is changing how healthcare is delivered, creating new career opportunities, and reshaping the future of work. 
        Whether you are a{" "}
        <span className="font-semibold">
          nurse, midwife, medical professional, or healthcare entrepreneur
        </span>
        , this 7-day challenge will equip you with{" "}
        <span className="font-semibold text-black">
          AI-driven skills to improve patient care, land high-paying jobs, start a digital health career, and optimize your earning potential.
        </span>
      </p>
    </div>
    <TestimonialSections/>
    <LearningTrack/>
    <WhyJoinSection/>
    <MentorSection/>
    <SevenDayRoadmap/>
    <VipUpgradeSection/>  
    <WhoShouldJoin/>
    
    <UrgencyCtaSection/>
    <FooterSection/>
    </div>
  )
}

export default Landing