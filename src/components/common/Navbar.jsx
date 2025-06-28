'use client'
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // or use any icon library you prefer
import Link from 'next/link';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex justify-between items-center px-4 md:px-36 py-4">
        {/* Logo */}
      <Link href="/" className="flex items-center bg-gray-100 rounded-xl px-3 py-2">
        <div className="bg-gray-300 rounded-lg px-2 py-1">
          <span className="text-lg font-bold text-gray-800">Flexi</span>
        </div>
      </Link>
        {/* Hamburger Button (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/screens/marketplace" className="text-black font-medium hover:text-[#3E5773] transition">Products</a>
          <a href="/screens/demovideos" className="text-black font-medium hover:text-[#3E5773] transition">Demo Videos</a>
          <a href="/screens/blog" className="text-black font-medium hover:text-[#3E5773] transition">Blog</a>
          <a href="/screens/contact" className="text-black font-medium hover:text-[#3E5773] transition">Contact</a>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <a href="/login">
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded font-bold text-sm hover:text-[#3E5773] transition">
              Login
            </button>
          </a>
          <a href="/screens/bookademo">
            <button
              className="px-4 py-2 text-white rounded font-bold text-sm hover:opacity-90 transition"
              style={{ backgroundColor: '#3E5773' }}
            >
              Book a Demo
            </button>
          </a>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <a href="/screens/marketplace" className="block text-black font-medium hover:text-[#3E5773]">Products</a>
          <a href="/screens/demovideos" className="block text-black font-medium hover:text-[#3E5773]">Demo Videos</a>
          <a href="/screens/blog" className="block text-black font-medium hover:text-[#3E5773]">Blog</a>
          <a href="/screens/contact" className="block text-black font-medium hover:text-[#3E5773]">Contact</a>
          <a href="/login">
            <button className="w-full mt-2 px-4 py-2 border border-gray-300 text-gray-700 rounded font-bold text-sm hover:text-[#3E5773]">
              Login
            </button>
          </a>
          <a href="/book-demo">
            <button
              className="w-full px-4 py-2 text-white rounded font-bold text-sm hover:opacity-90 transition"
              style={{ backgroundColor: '#3E5773' }}
            >
              Book a Demo
            </button>
          </a>
        </div>
      )}
    </header>
  );
}

