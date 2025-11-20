const services = [
  { title: 'Dental Check-up & Cleaning', desc: 'Routine oral exam, scaling and polishing for a healthy smile.' },
  { title: 'Tooth Extraction', desc: 'Safe and gentle removal of damaged or problematic teeth.' },
  { title: 'Tooth Filling', desc: 'Composite fillings to restore decayed or broken teeth.' },
  { title: 'Dentures', desc: 'Partial and full dentures customized for comfort and function.' },
  { title: 'Root Canal Treatment', desc: 'Pain-relief procedure to save natural teeth.' },
  { title: 'Teeth Whitening', desc: 'Professional whitening for a brighter smile.' },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Our Services</h2>
        <p className="text-slate-600 text-center mt-2">Quality dental care tailored to your needs</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
