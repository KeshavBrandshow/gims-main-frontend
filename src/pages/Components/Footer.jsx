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
    <footer className="bg-white text-gray-700 overflow-x-hidden">
      {/* Top Info Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6">
        {/* LEFT : Logo */}
        <div className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-64 flex justify-center lg:justify-start">
          <Image
            src="https://www.gims.net.in/img/gims-logo.png"
            alt="Flagler College"
            width={170}
            height={55}
            className="w-full h-auto object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
            priority
          />
        </div>

        {/* CENTER : Address | Phone | Email */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg text-center">
          <p className="order-1 sm:order-none text-center">74 King Street, St. Augustine, FL 32084</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 order-3 sm:order-none justify-center items-center">
            <a href="tel:9048296481" className="text-[#9c1c2e] underline whitespace-nowrap">(904) 829-6481
            </a>
            <a href="mailto:admissions@flagler.edu" className="text-[#9c1c2e] underline whitespace-nowrap">
              admissions@flagler.edu
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
              bg-[#9e2339]
              text-white
              font-bold
              text-sm sm:text-base
              px-6 sm:px-8 md:px-10
              py-2.5 sm:py-3
              border-2
              border-transparent
              hover:border-[#6f0f1f]
              transition-all
              duration-300
              w-full sm:w-auto
              flex justify-center
            "
          >
            Directions & Parking
          </button>
        </div>
      </div>

      {/* Middle Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 flex flex-col lg:flex-row justify-center lg:justify-between gap-8 md:gap-12 lg:gap-20">
        {/* LEFT: Social + Newsletter + Image */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 lg:gap-12">
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-6">
            {/* Social Icons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4">
              {[FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaTiktok].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="
                      w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14
                      flex items-center justify-center
                      rounded-full
                      text-[#9e2339]
                      cursor-pointer
                      transition-all
                      duration-300
                      hover:bg-[#9e2339]
                      hover:text-white
                      flex-shrink-0
                    "
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                  </div>
                )
              )}
            </div>

            {/* Flagler Forward Image */}
            <div className="mt-2 md:mt-4 flex justify-center md:justify-start">
              <Image
                src="https://www.gims.net.in/img/gims-logo.png"
                alt="Flagler Forward"
                width={140}
                height={50}
                className="object-contain w-32 md:w-36 lg:w-40 h-auto"
              />
            </div>
          </div>

          {/* Newsletter Button */}
          <button
            className="
              md:mt-4 lg:mt-0
              bg-[#9e2339]
              text-white
              px-6 md:px-8
              py-3
              rounded-md
              text-sm md:text-base
              font-bold
              transition
              hover:opacity-90
              whitespace-nowrap
              flex justify-center
            "
          >
            Newsletter →
          </button>
        </div>

        {/* RIGHT: Popular Searches + Let Us Help You */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mt-6 md:mt-0">
          {/* Popular Searches */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-xl md:text-2xl font-extrabold text-black font-['Oswald'] tracking-wide md:tracking-widest">
              Popular Searches
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                "Degrees & Programs",
                "Living on Campus",
                "Take a Virtual Tour",
                "News & Events",
                "Graduate and Education Programs",
              ].map((item) => (
                <li
                  key={item}
                  className="
                    group
                    relative
                    border-b
                    border-gray-200
                    pb-2
                    pl-0 md:pl-6
                    text-base md:text-lg
                    text-black
                    font-normal
                    font-['Oswald']
                    tracking-wide
                    cursor-pointer
                    transition-colors
                    duration-200
                    hover:text-[#9c1c2e]
                    text-center md:text-left
                  "
                >
                  <span className="hidden md:inline absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-[#9c1c2e] transition duration-200">
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Let Us Help You */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-xl md:text-2xl font-extrabold text-black font-['Oswald'] tracking-wide md:tracking-widest">
              Let Us Help You
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                "Resources & Help Center",
                "Contact",
                "Employee Directory",
                "Careers",
                "Questions & Comments",
              ].map((item) => (
                <li
                  key={item}
                  className="
                    group
                    relative
                    border-b
                    border-gray-200
                    pb-2
                    pl-0 md:pl-6
                    text-base md:text-lg
                    text-black
                    font-normal
                    font-['Oswald']
                    tracking-wide
                    cursor-pointer
                    transition-colors
                    duration-200
                    hover:text-[#9c1c2e]
                    text-center md:text-left
                  "
                >
                  <span className="hidden md:inline absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-[#9c1c2e] transition duration-200">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between gap-6 md:gap-0 pb-6 md:pb-8">
          {/* LEFT : Bottom Image */}
          <div className="flex-shrink-0 relative w-full md:w-auto flex justify-center md:justify-start">
            <Image
              src="/images/about-us.jpg"
              alt="Footer Decoration"
              width={300}
              height={150}
              className="h-32 md:h-40 lg:h-48 w-auto object-contain relative z-10"
            />
          </div>

          {/* RIGHT : Text + Links */}
          <div className="text-center md:text-right text-xs md:text-sm flex flex-col items-center md:items-end gap-2 md:gap-3">
            <p className="text-center">© 2025 Flagler College. All rights reserved.</p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-end gap-2 md:gap-4 text-[#9c1c2e]">
              <a className="cursor-pointer underline whitespace-nowrap">
                Terms & Conditions
              </a>
              <a className="cursor-pointer underline whitespace-nowrap">
                Notice of Non-Discrimination
              </a>
              <a className="cursor-pointer underline whitespace-nowrap">
                Title IX Policies & Resources
              </a>
            </div>

            <a className="cursor-pointer underline text-[#9c1c2e] text-center">
              Flagler College Ease Grant Performance Measures
            </a>
          </div>
        </div>

        {/* Bottom Double Colored Thick Border */}
        <div className="mt-0">
          <div className="h-3 md:h-4 bg-[#c8e4e2]"></div>
          <div className="h-3 md:h-4 bg-[#91c9c5]"></div>
        </div>
      </div>
    </footer>
  );
}