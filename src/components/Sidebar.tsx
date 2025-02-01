import React, { useState } from 'react';
import { 
  Home,
  LayoutDashboard,
  FileText,
  Code2,
  BookOpen,
  Settings,
  Menu,
  X,
  Brain,
} from 'lucide-react';
import { Link } from './Link';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Documentation', href: '/docs', icon: FileText },
  { name: 'API Reference', href: '/api', icon: Code2 },
  { name: 'Knowledge Base', href: '/knowledge', icon: BookOpen },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        type="button"
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-gray-600 bg-opacity-75 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-45 w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center gap-2 px-6 py-4">
          <Brain className="h-8 w-8 text-indigo-500" />
          <span className="text-xl font-semibold text-white">Quantum Mind</span>
        </div>

        <nav className="mt-4 space-y-1 px-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center px-4 py-2 text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
              activeClassName="bg-gray-800 text-white"
            >
              <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}