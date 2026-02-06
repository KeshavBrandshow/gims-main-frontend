'use client';

const sections = [
  { id: 'about', label: 'About GIMS' },
  { id: 'programs', label: 'Programs' },
  { id: 'admissions', label: 'Admissions' },
  { id: 'placements', label: 'Placements' },
];

export default function JumpToSection() {
  const handleChange = (e) => {
    const targetId = e.target.value;
    if (!targetId) return;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-primary py-6 pb-15">
      <div className="max-w-6xl mx-auto px-4">
        <div className="inline-block">
          <div className="relative">
            <select
              onChange={handleChange}
              defaultValue=""
              className="appearance-none bg-transparent text-white text-sm px-4 pr-10 py-2.5 border border-white/80 rounded-none focus:outline-none focus:ring-1 focus:ring-white"
            >
              <option value="" disabled className="bg-primary">
                Jump to a Section...
              </option>
              {sections.map((s) => (
                <option
                  key={s.id}
                  value={s.id}
                  className="bg-primary text-white"
                >
                  {s.label}
                </option>
              ))}
            </select>

            {/* Arrow icon */}
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                className="h-3 w-3 text-white"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
