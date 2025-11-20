import { useState } from 'react'

export default function Booking() {
  const [form, setForm] = useState({
    patient_name: '',
    email: '',
    phone: '',
    service: '',
    preferred_date: '',
    preferred_time: '',
    message: '',
  })
  const [status, setStatus] = useState(null)

  const services = [
    'Dental Check-up & Cleaning',
    'Tooth Extraction',
    'Tooth Filling',
    'Dentures',
    'Root Canal Treatment',
    'Teeth Whitening',
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const payload = {
        ...form,
        preferred_date: form.preferred_date ? new Date(form.preferred_date).toISOString().slice(0,10) : '',
      }
      const res = await fetch(`${baseUrl}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.detail || 'Submission failed')
      setStatus('✅ Request sent! We will contact you to confirm your schedule.')
      setForm({ patient_name: '', email: '', phone: '', service: '', preferred_date: '', preferred_time: '', message: '' })
    } catch (err) {
      setStatus(`❌ ${err.message}`)
    }
  }

  return (
    <section id="book" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Book an Appointment</h2>
          <p className="mt-2 text-slate-600">Fill out the form and we will reach out to confirm your schedule.</p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-700 mb-1">Full Name</label>
                <input name="patient_name" value={form.patient_name} onChange={handleChange} required className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-700 mb-1">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} required className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-700 mb-1">Email (optional)</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-700 mb-1">Service</label>
                <select name="service" value={form.service} onChange={handleChange} required className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500">
                  <option value="" disabled>Select a service</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-700 mb-1">Preferred Date</label>
                <input type="date" name="preferred_date" value={form.preferred_date} onChange={handleChange} required className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-700 mb-1">Preferred Time</label>
                <input type="text" placeholder="e.g., 10:30 AM" name="preferred_time" value={form.preferred_time} onChange={handleChange} required className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
            </div>

            <div>
              <label className="block text-sm text-slate-700 mb-1">Notes (optional)</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows="4" className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
            </div>

            <button type="submit" className="px-5 py-3 rounded-lg bg-sky-600 text-white hover:bg-sky-700">Send Request</button>
            {status && <p className="text-sm text-slate-700">{status}</p>}
          </form>
        </div>
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <h3 className="font-semibold text-slate-900">Clinic Info</h3>
          <ul className="mt-3 text-slate-700 space-y-2">
            <li><span className="font-medium">Address:</span> Pakil, Laguna, Philippines</li>
            <li><span className="font-medium">Hours:</span> Mon–Sat, 9:00 AM – 6:00 PM</li>
            <li><span className="font-medium">Contact:</span> 09XX-XXX-XXXX</li>
            <li><span className="font-medium">Dentist:</span> Dr. Zaryl May Dela Peña</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
