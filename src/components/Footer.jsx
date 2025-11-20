export default function Footer() {
  return (
    <footer id="contact" className="py-10 bg-slate-900 text-slate-200">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h4 className="text-xl font-bold">Project Zmile Dental Clinic</h4>
          <p className="text-slate-400 mt-1">Pakil, Laguna, Philippines</p>
          <p className="text-slate-400">Mon–Sat • 9:00 AM – 6:00 PM</p>
        </div>
        <div className="md:text-right">
          <p>Call/Text: 09XX-XXX-XXXX</p>
          <p>Email: hello@projectzmile.com</p>
          <p className="text-slate-400 mt-2">© {new Date().getFullYear()} Project Zmile. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
