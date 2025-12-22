import Image from "next/image";

export default function HandsOnSection() {
  return (
    <section className="bg-secondary">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Left: image – exactly half */}
          <div className="relative w-full lg:w-1/2 h-[260px] sm:h-[340px] lg:h-[520px]">
            <img
              src="https://images.pexels.com/photos/3772711/pexels-photo-3772711.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Hands-on learning"
              fill
              className="object-cover "
              priority
            />
          </div>

          {/* Right: text panel – exactly half, flat edge */}
          <div className="w-full lg:w-1/2 bg-primary text-slate-50">
            <div className="h-full flex items-center">
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
      </div>
    </section>
  );
}
