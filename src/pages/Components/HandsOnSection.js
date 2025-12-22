import Image from "next/image";

export default function HandsOnSection() {
  return (
    <section className="bg-secondary">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Left: full-height image */}
          <div className="relative w-full lg:w-1/2 h-[260px] sm:h-[340px] lg:h-[520px]">
            <img
              src="https://images.pexels.com/photos/3772711/pexels-photo-3772711.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Underwater research"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right: curved text panel */}
          <div className="w-full lg:w-1/2 bg-primary text-slate-50 px-6 sm:px-10 lg:px-14 py-10 lg:py-16 relative">
            {/* left rounded edge (like screenshot) */}
            <div className="hidden lg:block absolute left-0 top-0 h-full w-8 bg-primary">
              <div className="absolute -left-8 bottom-0 h-[120px] w-16 bg-primary rounded-t-full" />
            </div>

            <div className="max-w-xl ml-0 lg:ml-6">
              <h2 className="font-cursive text-3xl sm:text-4xl lg:text-5xl text-secondary mb-6">
                Hands on. Minds on.
              </h2>

              <p className="text-slate-100/90 text-sm sm:text-base leading-relaxed mb-4">
                Hop aboard a dolphin research vessel. Stage plays. Or, preserve
                history in the nation&apos;s oldest city. Just be sure to keep
                your muck boots handy, because the learning here is always
                hands-on and knee-deep.
              </p>

              <p className="text-slate-100/90 text-sm sm:text-base leading-relaxed mb-4">
                Whether it&apos;s practicing Spanish on a galleon, excavating
                shipwrecks, or finding your way around The Alligator Farm, the
                only thing you won&apos;t find here are typical, dull lectures.
                (And yes, we literally mean a farm with real alligators.)
              </p>

              <p className="text-slate-100/90 text-sm sm:text-base leading-relaxed">
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
