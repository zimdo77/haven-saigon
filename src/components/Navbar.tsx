"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-olive text-cream border-b border-cream/20 shadow-sm">
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
            className={`text-sm tracking-wide transition-opacity hover:opacity-70 ${
              pathname === "/" ? "border-b border-cream pb-0.5" : ""
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`text-sm tracking-wide transition-opacity hover:opacity-70 ${
              pathname === "/about" ? "border-b border-cream pb-0.5" : ""
            }`}
          >
            About Us
          </Link>

          <Link
            href="/rooms"
            className={`text-sm tracking-wide transition-opacity hover:opacity-70 ${
              pathname.startsWith("/rooms")
                ? "border-b border-cream pb-0.5"
                : ""
            }`}
          >
            Rooms
          </Link>

          <Link
            href="/facilities"
            className={`text-sm tracking-wide transition-opacity hover:opacity-70 ${
              pathname === "/facilities" ? "border-b border-cream pb-0.5" : ""
            }`}
          >
            Facilities
          </Link>

          <Link
            href="/gallery"
            className={`text-sm tracking-wide transition-opacity hover:opacity-70 ${
              pathname === "/gallery" ? "border-b border-cream pb-0.5" : ""
            }`}
          >
            Photo Gallery
          </Link>

          <Link
            href="/contact"
            className={`text-sm tracking-wide transition-opacity hover:opacity-70 ${
              pathname === "/contact" ? "border-b border-cream pb-0.5" : ""
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile navigation */}
        <Sheet>
          <SheetTrigger
            render={
              <button
                className="flex items-center justify-center rounded-md p-2 transition-colors hover:bg-white/10 md:hidden"
                aria-label="Open navigation menu"
              />
            }
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[85%] max-w-sm border-l border-cream bg-olive px-0 text-cream"
          >
            <div className="flex h-full flex-col">
              {/* Mobile menu header */}
              <div className="border-b border-border px-6 pb-6 pt-10">
                <Image
                  src="/logo/haven-logo.png"
                  alt="HAVEN Saigon"
                  width={249}
                  height={65}
                  className="h-9 w-auto"
                />

                <p className="mt-4 text-sm leading-relaxed">
                  Serviced apartments in Saigon
                </p>
              </div>

              {/* Navigation links */}
              <nav className="flex flex-col px-6 py-4">
                <SheetClose
                  nativeButton={false}
                  render={
                    <Link
                      href="/"
                      className={`border-b border-border py-5 text-lg tracking-wide transition-colors hover:text-cream/60 ${
                        pathname === "/" ? "font-bold text-white" : ""
                      }`}
                    />
                  }
                >
                  Home
                </SheetClose>

                <SheetClose
                  nativeButton={false}
                  render={
                    <Link
                      href="/about"
                      className={`border-b border-border py-5 text-lg tracking-wide transition-colors hover:text-cream/60 ${
                        pathname === "/about" ? "font-bold text-white" : ""
                      }`}
                    />
                  }
                >
                  About Us
                </SheetClose>

                <SheetClose
                  nativeButton={false}
                  render={
                    <Link
                      href="/rooms"
                      className={`border-b border-border py-5 text-lg tracking-wide transition-colors hover:text-cream/60 ${
                        pathname.startsWith("/rooms")
                          ? "font-bold text-white"
                          : ""
                      }`}
                    />
                  }
                >
                  Rooms
                </SheetClose>

                <SheetClose
                  nativeButton={false}
                  render={
                    <Link
                      href="/facilities"
                      className={`border-b border-border py-5 text-lg tracking-wide transition-colors hover:text-cream/60 ${
                        pathname === "/facilities" ? "font-bold text-white" : ""
                      }`}
                    />
                  }
                >
                  Facilities
                </SheetClose>

                <SheetClose
                  nativeButton={false}
                  render={
                    <Link
                      href="/gallery"
                      className={`border-b border-border py-5 text-lg tracking-wide transition-colors hover:text-cream/60 ${
                        pathname === "/gallery" ? "font-bold text-white" : ""
                      }`}
                    />
                  }
                >
                  Photo Gallery
                </SheetClose>

                <SheetClose
                  nativeButton={false}
                  render={
                    <Link
                      href="/contact"
                      className={`border-b border-border py-5 text-lg tracking-wide transition-colors hover:text-cream/60 ${
                        pathname === "/contact" ? "font-bold text-white" : ""
                      }`}
                    />
                  }
                >
                  Contact Us
                </SheetClose>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
