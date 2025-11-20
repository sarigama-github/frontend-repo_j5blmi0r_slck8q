export default function Doctor() {
  return (
    <section id="doctor" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold text-slate-900">Meet the Dentist</h2>
          <p className="mt-3 text-slate-600">
            Dr. Zaryl May Dela Peña is dedicated to providing gentle, personalized dental care. With a focus on patient comfort and clear communication, she ensures every visit feels relaxed and friendly.
          </p>
          <ul className="mt-4 text-slate-700 list-disc list-inside space-y-1">
            <li>General Dentistry</li>
            <li>Preventive Care & Oral Hygiene</li>
            <li>Cosmetic Dentistry</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-sky-100 to-teal-100 shadow-inner" />
        </div>
      </div>
    </section>
  )
}
