import { cityProfiles } from "@/data/cities";

export default function CitiesPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fef3c7_0%,_#fff7ed_35%,_#f8fafc_70%)] pb-20 text-slate-900">
      <section className="mx-auto max-w-7xl px-6 pt-14">
        <div className="rounded-3xl border border-amber-200/70 bg-white/80 p-8 shadow-xl backdrop-blur md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            City Guides
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Explore Cities With Style, Flavor, and Local Energy
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-700 md:text-lg">
            Browse our current city lineup and jump into neighborhood guides, food scenes,
            music, architecture, and unforgettable weekend itineraries.
          </p>
          <div className="mt-8 inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white">
            {cityProfiles.length} featured cities available
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-6">
        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {cityProfiles.map((city) => (
            <article
              key={`${city.name}-${city.region}`}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={city.image}
                  alt={`${city.name}, ${city.region}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                <p className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-900">
                  {city.region}
                </p>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-extrabold">{city.name}</h2>
                <p className="mt-2 text-slate-600">{city.vibe}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {city.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="text-amber-500">●</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`/experiences?city=${encodeURIComponent(city.name)}`}
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-amber-500 px-4 py-2 font-bold text-slate-900 transition hover:bg-amber-400"
                >
                  Open Guide
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}