import { Link, useLocation } from 'react-router-dom';
import { Cat, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group" onClick={() => setIsOpen(false)}>
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-2 rounded-xl transform group-hover:scale-110 transition-transform duration-300">
              <Cat className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              DetectCat
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === '/'
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/detection"
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === '/detection'
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Détection
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                location.pathname === '/'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/detection"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                location.pathname === '/detection'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Détection
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
