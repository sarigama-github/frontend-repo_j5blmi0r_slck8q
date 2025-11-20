import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Doctor', href: '#doctor' },
    { label: 'Book', href: '#book' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-sky-500 to-teal-400 grid place-items-center text-white font-bold">Z</div>
          <div className="leading-tight">
            <p className="font-bold text-slate-900">Project Zmile</p>
            <p className="text-xs text-slate-600">Dental Clinic</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-700 hover:text-sky-600 transition-colors">{item.label}</a>
          ))}
          <a href="#book" className="px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition-colors">Book Now</a>
        </nav>

        <button className="md:hidden p-2 rounded hover:bg-slate-100" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
          <Menu className="w-6 h-6 text-slate-700" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-slate-700" onClick={() => setOpen(false)}>{item.label}</a>
            ))}
            <a href="#book" className="px-4 py-2 rounded-lg bg-sky-600 text-white text-center" onClick={() => setOpen(false)}>Book Now</a>
          </div>
        </div>
      )}
    </header>
  )
}
