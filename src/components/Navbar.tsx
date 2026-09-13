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
    <header className="sticky top-0 z-50 bg-olive text-cream border-b border-border/20 shadow-sm">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 font-sans sm:px-6 sm:py-4 lg:px-8"
      >
        <Link href="/">
          <Image
            src="/logo/haven-logo.png"
            alt="HAVEN Saigon"
            width={249}
            height={65}
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={`text-sm tracking-wide transition-opacity hover:opacity-70 ${
              pathname === "/" ? "border-b border-cream pb-0.5" : ""
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
            className={`text-sm tracking-wide transition-opacity hover:opacity-70 ${
              pathname === "/about" ? "border-b border-cream pb-0.5" : ""
            }`}
          >
            About Us
          </Link>

          <Link
            href="/rooms"
            aria-current={pathname.startsWith("/rooms") ? "page" : undefined}
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
            aria-current={pathname === "/facilities" ? "page" : undefined}
            className={`text-sm tracking-wide transition-opacity hover:opacity-70 ${
              pathname === "/facilities" ? "border-b border-cream pb-0.5" : ""
            }`}
          >
            Facilities
          </Link>

          <Link
            href="/gallery"
            aria-current={pathname === "/gallery" ? "page" : undefined}
            className={`text-sm tracking-wide transition-opacity hover:opacity-70 ${
              pathname === "/gallery" ? "border-b border-cream pb-0.5" : ""
            }`}
          >
            Photo Gallery
          </Link>

          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
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
                className="flex items-center justify-center rounded-md p-2 transition-colorshover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/70"
                aria-label="Open navigation menu"
              />
            }
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[85%] max-w-sm border-l border-border/50 bg-olive px-0 text-cream"
          >
            <div className="flex h-full flex-col">
              {/* Mobile menu header */}
              <div className="border-b border-border/50 px-6 pb-6 pt-10">
                <Image
                  src="/logo/haven-logo.png"
                  alt="HAVEN Saigon"
                  width={249}
                  height={65}
                  className="h-9 w-auto"
                />

                <p className="mt-4 text-sm leading-relaxed text-cream/70">
                  Serviced apartments in Ho Chi Minh City
                </p>
              </div>

              {/* Navigation links */}
              <nav
                aria-label="Mobile navigation"
                className="flex flex-col px-6 py-4"
              >
                <SheetClose
                  nativeButton={false}
                  render={
                    <Link
                      href="/"
                      aria-current={pathname === "/" ? "page" : undefined}
                      className={`border-b border-border/50 py-5 text-lg tracking-wide transition-colors hover:opacity-70 ${
                        pathname === "/" ? "font-medium text-white" : ""
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
                      aria-current={pathname === "/about" ? "page" : undefined}
                      className={`border-b border-border/50 py-5 text-lg tracking-wide transition-colors hover:opacity-70 ${
                        pathname === "/about" ? "font-medium text-white" : ""
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
                      aria-current={
                        pathname.startsWith("/rooms") ? "page" : undefined
                      }
                      className={`border-b border-border/50 py-5 text-lg tracking-wide transition-colors hover:opacity-70 ${
                        pathname.startsWith("/rooms")
                          ? "font-medium text-white"
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
                      aria-current={
                        pathname === "/facilities" ? "page" : undefined
                      }
                      className={`border-b border-border/50 py-5 text-lg tracking-wide transition-colors hover:opacity-70 ${
                        pathname === "/facilities"
                          ? "font-medium text-white"
                          : ""
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
                      aria-current={
                        pathname === "/gallery" ? "page" : undefined
                      }
                      className={`border-b border-border/50 py-5 text-lg tracking-wide transition-colors hover:opacity-70 ${
                        pathname === "/gallery" ? "font-medium text-white" : ""
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
                      aria-current={
                        pathname === "/contact" ? "page" : undefined
                      }
                      className={`border-b border-border/50 py-5 text-lg tracking-wide transition-colors hover:opacity-70 ${
                        pathname === "/contact" ? "font-medium text-white" : ""
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
