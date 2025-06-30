'use client'
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-24 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center bg-gray-100 rounded-xl px-3 py-2">
          <div className="bg-gray-300 rounded-lg px-2 py-1">
            <span className="text-lg font-bold text-gray-800">Flexi</span>
          </div>
        </Link>

        {/* Hamburger (Mobile & Tablet) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Nav Links (Desktop & Tablet ≥ md) */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/screens/marketplace" className="text-black font-medium hover:text-[#3E5773] transition">Products</Link>
          <Link href="/screens/demovideos" className="text-black font-medium hover:text-[#3E5773] transition">Demo Videos</Link>
          <Link href="/screens/blog" className="text-black font-medium hover:text-[#3E5773] transition">Blog</Link>
          <Link href="/screens/contact" className="text-black font-medium hover:text-[#3E5773] transition">Contact</Link>
        </nav>

        {/* Buttons (Desktop & Tablet ≥ md) */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded font-bold text-sm hover:text-[#3E5773] transition">
              Login
            </button>
          </Link>
          <Link href="/screens/bookademo">
            <button
              className="px-4 py-2 text-white rounded font-bold text-sm hover:opacity-90 transition"
              style={{ backgroundColor: '#3E5773' }}
            >
              Book a Demo
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Nav (shown on tablets & phones < md) */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <Link href="/screens/marketplace" className="block text-black font-medium hover:text-[#3E5773]">Products</Link>
          <Link href="/screens/demovideos" className="block text-black font-medium hover:text-[#3E5773]">Demo Videos</Link>
          <Link href="/screens/blog" className="block text-black font-medium hover:text-[#3E5773]">Blog</Link>
          <Link href="/screens/contact" className="block text-black font-medium hover:text-[#3E5773]">Contact</Link>
          <Link href="/login">
            <button className="w-full mt-2 px-4 py-2 border border-gray-300 text-gray-700 rounded font-bold text-sm hover:text-[#3E5773]">
              Login
            </button>
          </Link>
          <Link href="/screens/bookademo">
            <button
              className="w-full px-4 py-2 text-white rounded font-bold text-sm hover:opacity-90 transition"
              style={{ backgroundColor: '#3E5773' }}
            >
              Book a Demo
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
