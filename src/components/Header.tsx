import { Link } from '@tanstack/react-router'

import { useState } from 'react'
import { Home, Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="p-4 flex items-center bg-linear-to-r from-slate-800 to-slate-900 text-white shadow-lg border-b border-amber-500/20">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        <h1 className="ml-4 text-2xl font-black">
          <Link to="/" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
            <span>🎮</span>
            <span className="bg-linear-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              ToyShop
            </span>
          </Link>
        </h1>
      </header>

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-slate-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="text-xl font-bold">Navigation</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-amber-600 hover:bg-amber-700 transition-colors mb-2',
            }}
          >
            <Home size={20} />
            <span className="font-medium">Home</span>
          </Link>
        </nav>
      </aside>
    </>
  )
}
