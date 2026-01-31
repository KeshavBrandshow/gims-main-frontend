import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white main-text overflow-x-hidden pt-4 border-t-8 border-bg-[#033E96]">
      {/* Top Info Bar */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4">
        {/* LEFT : Logo */}
        <div className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 flex justify-center lg:justify-start">
          <Image
            src="https://www.gims.net.in/img/gims-logo.png"
            alt="GIMS Greater Noida"
            width={140}
            height={45}
            className="w-full h-auto object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
            priority
          />
        </div>

        {/* CENTER : Address | Phone | Email */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm md:text-base text-center">
          <p className="order-1 sm:order-none text-center max-w-xl">
            GNIOT Institute of Management Studies (GIMS), Knowledge Park–II,
            Greater Noida, Uttar Pradesh – 201310, India.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 order-3 sm:order-none justify-center items-center">
            <a
              href="tel:+919643840096"
              className="text-secondary underline whitespace-nowrap"
            >
              +91‑96438 40096
            </a>
            <a
              href="mailto:admission@gims.net.in"
              className="text-secondary underline whitespace-nowrap"
            >
              admission@gims.net.in
            </a>
          </div>
        </div>

        {/* RIGHT : Directions Button */}
        <div className="order-2 sm:order-none flex justify-center lg:justify-start">
          <button
            style={{
              clipPath: "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)",
            }}
            className="
              bg-primary
              text-slate-50
              font-bold
              text-xs sm:text-sm
              px-5 sm:px-6 md:px-8
              py-2 sm:py-2.5
              border-2
              border-transparent
              hover:border-sky-950
              transition-all
              duration-300
              w-full sm:w-auto
              flex justify-center
              cursor-pointer
            "
          >
            Directions to GIMS Campus
          </button>
        </div>
      </div>

      {/* Middle Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6 flex flex-col lg:flex-row justify-center lg:justify-between gap-6 md:gap-8 lg:gap-12">
        {/* LEFT: Social + Logo + CTA */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-6 lg:gap-10">
          <div className="flex flex-col items-center md:items-start gap-3 md:gap-4">
            {/* Social Icons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3">
              {[FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaTiktok].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="
                      w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12
                      flex items-center justify-center
                      rounded-full
                      text-primary
                      bg-yellow-400
                      cursor-pointer
                      transition-all
                      duration-300
                      hover:bg-sky-900
                      hover:text-slate-50
                      flex-shrink-0
                    "
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                  </div>
                )
              )}
            </div>

            {/* GIMS Logo */}
            <div className="mt-2 text-center md:text-left">
              <span className="font-bold text-primary block text-sm">Follow Us</span>
            </div>
          </div>

          {/* Newsletter Button */}
          <button
            className="
              md:mt-3 lg:mt-0
              bg-secondary
              text-primary
              px-5 md:px-6
              py-2 md:py-2.5
              rounded-md
              text-xs md:text-sm
              font-bold
              transition
              hover:opacity-90
              whitespace-nowrap
              flex justify-center
              cursor-pointer
            "
          >
            Subscribe to GIMS Updates →
          </button>
        </div>

        {/* RIGHT: Quick Links + Help */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-14 mt-4 md:mt-0">
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-lg md:text-xl font-extrabold text-primary font-['Oswald'] tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-1.5 md:space-y-2">
              {[
                "PGDM Programme",
                "Admissions",
                "Placements",
                "Life @ GIMS",
                "News & Events",
              ].map((item) => (
                <li
                  key={item}
                  className="
                    group
                    relative
                    border-b
                    border-gray-200
                    py-1.5
                    pl-0 md:pl-5
                    text-sm md:text-base
                    text-primary
                    font-normal
                    font-['Oswald']
                    tracking-wide
                    cursor-pointer
                    transition-colors
                    duration-200
                    hover:text-secondary
                    text-center md:text-left
                  "
                >
                  <span className="hidden md:inline absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-secondary transition duration-200 leading-none">
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Policies */}
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-lg md:text-xl font-extrabold text-primary font-['Oswald'] tracking-wide">
              Let Us Help You
            </h3>
            <ul className="space-y-1.5 md:space-y-2">
              {[
                "Contact Us",
                "Download Brochures",
                "Career @ GIMS",
                "Grievance Redressal",
                "Feedback & Queries",
              ].map((item) => (
                <li
                  key={item}
                  className="
                    group
                    relative
                    border-b
                    border-gray-200
                    py-1.5
                    pl-0 md:pl-5
                    text-sm md:text-base
                    text-primary
                    font-normal
                    font-['Oswald']
                    tracking-wide
                    cursor-pointer
                    transition-colors
                    duration-200
                    hover:text-secondary
                    text-center md:text-left
                  "
                >
                  <span className="hidden md:inline absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-secondary transition duration-200 leading-none">
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between gap-4 md:gap-0 pb-4 md:pb-5">
          {/* LEFT : Campus Image */}
          <div className="flex-shrink-0 relative w-full md:w-auto flex justify-center md:justify-start">
            <Image
              src="https://www.gims.net.in/img/newhome/life-at-gims.jpg?v=1"
              alt="GIMS Campus"
              width={250}
              height={120}
              className="h-20 md:h-24 lg:h-28 w-auto object-cover relative z-10 rounded-md"
            />
          </div>

          {/* RIGHT : Text + Links */}
          <div className="text-center md:text-right text-xs flex flex-col items-center md:items-end gap-1.5 md:gap-2">
            <p className="text-center main-text max-w-lg">
              © {new Date().getFullYear()} GNIOT Institute of Management
              Studies (GIMS), Greater Noida. All rights reserved.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-end gap-2 md:gap-4 text-secondary">
              <a className="cursor-pointer underline whitespace-nowrap">
                Terms of Use
              </a>
              <a className="cursor-pointer underline whitespace-nowrap">
                Privacy Policy
              </a>
              <a className="cursor-pointer underline whitespace-nowrap">
                Anti‑Ragging &amp; Grievance Policies
              </a>
            </div>

            <a className="cursor-pointer underline text-secondary text-center">
              Mandatory Disclosure &amp; AICTE Compliance
            </a>
          </div>
        </div>

        {/* Bottom Double Colored Thick Border – using primary/secondary tints */}
        <div className="mt-0">
          <div className="h-2 md:h-3 bg-sky-100"></div>
          <div className="h-2 md:h-3 bg-secondary"></div>
        </div>
      </div>
    </footer>
  );
}
