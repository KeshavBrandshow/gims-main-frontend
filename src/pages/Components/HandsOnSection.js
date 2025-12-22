import Image from "next/image";

export default function HandsOnSection() {
  return (


     <section className="w-full bg-primary card-bg mb-30 ">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row">
        {/* Left: Image */}
        <div className="lg:w-2/3 w-full h-[80vh]">
          <img
            src="https://www.gims.net.in/img/newhome/life-at-gims.jpg?v=1"
            alt="Professor teaching students in classroom"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="lg:w-1/3 w-full flex items-center bg-primary px-8 py-10">
          <div className="space-y-6">
            <div className="px-6 sm:px-10 lg:px-16 py-10 lg:py-16 max-w-xl">
                <h2 className="font-cursive text-3xl sm:text-4xl lg:text-5xl text-secondary mb-6">
                  Hands on. Minds on.
                </h2>

                <p className=" text-slate-100/90 text-sm sm:text-base leading-relaxed mb-4">
                  Hop aboard a dolphin research vessel. Stage plays. Or, preserve
                  history in the nation&apos;s oldest city. Just be sure to keep
                  your muck boots handy, because the learning here is always
                  hands-on and knee-deep.
                </p>

                <p className=" text-slate-100/90 text-sm sm:text-base leading-relaxed mb-4">
                  Whether it&apos;s practicing Spanish on a galleon, excavating
                  shipwrecks, or finding your way around The Alligator Farm, the
                  only thing you won&apos;t find here are typical, dull lectures.
                  (And yes, we literally mean a farm with real alligators.)
                </p>

                <p className=" text-slate-100/90 text-sm sm:text-base leading-relaxed">
                  This college is for people who want to go where others haven&apos;t
                  and do what has yet to be done.
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
 
  );
}
