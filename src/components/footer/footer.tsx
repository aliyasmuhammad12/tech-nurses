
export default function FooterSection() {
  return (
    <footer className="bg-gray-700 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Facebook disclaimer */}
        <p className="text-xs leading-relaxed mb-4 text-gray-300">
          This Site Is Not A Part Of The Facebook Website Or Facebook Inc. Additionally, This Site Is Not Endorsed By
          Facebook In Any Way. FACEBOOK Is A Trademark Of FACEBOOK, Inc.
        </p>

        {/* Copyright and links */}
        <div className="text-xs text-gray-300 space-y-1">
          <p>Copyright © 2025</p>
          <p>All Rights Reserved</p>
          <div className="flex justify-center items-center space-x-4 mt-2">
            <a href="/terms" className="text-gray-300 hover:text-white underline transition-colors">
              Terms of Service
            </a>
            <span className="text-gray-500">|</span>
            <a href="/privacy" className="text-gray-300 hover:text-white underline transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
