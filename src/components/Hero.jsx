export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 bg-gradient-to-br from-sky-50 via-white to-teal-50 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-sky-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-teal-200 rounded-full blur-3xl opacity-40"></div>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-sm mb-4">
            Based in Pakil, Laguna • Philippines
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Project Zmile Dental Clinic
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Gentle, affordable dental care for the whole family. Experience friendly service and modern treatment with Dr. Zaryl May Dela Peña.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#book" className="px-5 py-3 rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition-colors">Book an Appointment</a>
            <a href="#services" className="px-5 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50">See Services</a>
          </div>
          <div className="mt-6 text-slate-500 text-sm">
            Open Mon–Sat • 9:00 AM – 6:00 PM
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-sky-200 to-teal-200 shadow-inner"/>
          <div className="absolute -bottom-3 -left-3 bg-white rounded-xl border border-slate-200 shadow p-3 text-sm">
            Trusted by families in Pakil and nearby towns
          </div>
        </div>
      </div>
    </section>
  )
}
