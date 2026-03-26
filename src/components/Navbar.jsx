import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Events', to: '/events' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Travel & Stay', to: '/travel-stay' },
  { label: 'Contact', to: '/contact' }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold-300/30 bg-ivory-50/85 backdrop-blur-lg">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        {/* TODO: Customize these names to your couple's names. */}
        <NavLink to="/" className="font-heading text-2xl font-semibold tracking-wide text-maroon-700 md:text-3xl">
          Arjun & Meera
        </NavLink>

        <button
          type="button"
          className="rounded-full border border-maroon-600/70 bg-ivory-50 px-4 py-1.5 text-sm font-medium text-maroon-700 shadow-sm md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive ? 'bg-maroon-700 text-ivory-50 shadow-card' : 'text-maroon-700 hover:bg-maroon-100/80'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <ul className="space-y-2 border-t border-gold-300/30 bg-ivory-100/95 px-4 py-3 md:hidden">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-3 py-2.5 text-sm font-medium ${
                    isActive ? 'bg-maroon-700 text-ivory-50' : 'text-maroon-700 hover:bg-maroon-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
