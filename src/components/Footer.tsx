import Image from "next/image";
import Link from "next/link";

import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-olive text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.3fr]">
          {/* HAVEN */}
          <div>
            <Image
              src="/logo/haven-logo.png"
              alt="HAVEN Saigon"
              width={249}
              height={65}
              className="mb-5 h-10 w-auto"
            />

            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              Serviced apartments offering comfortable and convenient living in
              Ho Chi Minh City.
            </p>

            {/* Follow Us */}
            <div className="mt-8">
              <h3 className="mb-3 font-serif text-2xl">Follow Us</h3>

              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61590410884520"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-xl transition-opacity hover:opacity-70 hover:scale-110"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.instagram.com/haven_saigon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-xl transition-opacity hover:opacity-70 hover:scale-110"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.tiktok.com/@haven.saigon"
                  aria-label="TikTok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl transition-opacity hover:opacity-70 hover:scale-110"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-serif text-2xl">Quick Links</h3>

            <div className="flex flex-col gap-2 text-sm text-white/80">
              <Link href="/" className="transition-opacity hover:opacity-70">
                Home
              </Link>

              <Link
                href="/about"
                className="transition-opacity hover:opacity-70"
              >
                About Us
              </Link>

              <Link
                href="/rooms"
                className="transition-opacity hover:opacity-70"
              >
                Rooms
              </Link>

              <Link
                href="/facilities"
                className="transition-opacity hover:opacity-70"
              >
                Facilities
              </Link>

              <Link
                href="/gallery"
                className="transition-opacity hover:opacity-70"
              >
                Photo Gallery
              </Link>

              <Link
                href="/contact"
                className="transition-opacity hover:opacity-70"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-serif text-2xl">Contact</h3>

            <div className="space-y-4 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />

                <a
                  href="https://maps.app.goo.gl/fNv3KNnHZsnCobZM9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed transition-opacity hover:opacity-70"
                >
                  13 Tống Hữu Định Street, An Khánh Ward, Thủ Đức City, Hồ Chí
                  Minh City
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />

                <div>
                  <a
                    href="tel:+84329220226"
                    className="transition-opacity hover:opacity-70"
                  >
                    +84 329 220 226
                  </a>

                  <p className="mt-1 text-xs text-white/60">Also available on WhatsApp & Zalo</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0" />

                <a
                  href="mailto:sales@havensaigon.com.vn"
                  className="transition-opacity hover:opacity-70"
                >
                  sales@havensaigon.com.vn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-border/50 pt-6 text-sm text-cream">
          © 2026 HAVEN Saigon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
