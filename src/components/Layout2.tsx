'use client';
import Link from 'next/link';
import React from 'react';

export default function Layout2({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen font-sans text-[#111] bg-white">
      <header className="relative flex items-center justify-center py-6 border-b border-gray-200 bg-[#F8F6F2]">
        <nav className="absolute left-1/2 -translate-x-1/2 flex gap-8 text-sm font-medium">
          <Link
            href="/about"
            className="hover:underline underline-offset-4 decoration-2 transition"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="hover:underline underline-offset-4 decoration-2 transition"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="hover:underline underline-offset-4 decoration-2 transition"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:underline underline-offset-4 decoration-2 transition"
          >
            Contact
          </Link>
        </nav>

        <Link
          href="/"
          className="absolute right-6 text-sm font-semibold hover:text-gray-500 transition"
        >
          Yuyue Liu
        </Link>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 bg-white">{children}</main>
    </div>
  );
}
