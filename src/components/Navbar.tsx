"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#686633] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 font-sans">
        <Link href="/">
          <Image
            src="/logo/haven-logo.png"
            alt="HAVEN Saigon"
            width={249}
            height={65}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm tracking-wide transition-opacity hover:opacity-70"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm tracking-wide transition-opacity hover:opacity-70"
          >
            About Us
          </Link>

          <Link
            href="/rooms"
            className="text-sm tracking-wide transition-opacity hover:opacity-70"
          >
            Rooms
          </Link>

          <Link
            href="/facilities"
            className="text-sm tracking-wide transition-opacity hover:opacity-70"
          >
            Facilities
          </Link>

          <Link
            href="/gallery"
            className="text-sm tracking-wide transition-opacity hover:opacity-70"
          >
            Photo Gallery
          </Link>

          <Link
            href="/contact"
            className="text-sm tracking-wide transition-opacity hover:opacity-70"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="h-0.5 w-6 bg-white"></span>
          <span className="h-0.5 w-6 bg-white"></span>
          <span className="h-0.5 w-6 bg-white"></span>
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="flex flex-col gap-4 px-6 pb-6 md:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>

          <Link href="/rooms" onClick={() => setMenuOpen(false)}>
            Rooms
          </Link>

          <Link href="/facilities" onClick={() => setMenuOpen(false)}>
            Facilities
          </Link>

          <Link href="/gallery" onClick={() => setMenuOpen(false)}>
            Photo Gallery
          </Link>

          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
