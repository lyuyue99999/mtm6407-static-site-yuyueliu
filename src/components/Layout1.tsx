'use client';
import Link from "next/link";
import React from "react";

export default function Layout1({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#111] font-sans">

      <header className="flex justify-between items-center px-6 py-5 border-b border-gray-200">
        <h1 className="text-xl font-bold">Yuyue Liu</h1>
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-gray-500">Home</Link>
          <Link href="/about" className="hover:text-gray-500">About</Link>
          <Link href="/projects" className="hover:text-gray-500">Projects</Link>
          <Link href="/blog" className="hover:text-gray-500">Blog</Link>
          <Link href="/contact" className="hover:text-gray-500">Contact</Link>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {children}
      </main>
    </div>
  );
}
