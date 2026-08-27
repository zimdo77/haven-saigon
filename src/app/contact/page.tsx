import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with us about availability, longer stays or anything else we can help with."
        imageSrc="/images/contact/hero.jpg"
        imageAlt="HAVEN Saigon serviced apartments"
        priority
      />

      {/* CONTACT */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Get in Touch"
            title="We'd love to hear from you"
            subtitle="Whether you're planning your stay or simply have a question, send us a message or reach out directly."
          />

          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
            {/* FORM */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Send us an enquiry
              </h2>

              <form className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                    className="w-full border border-border bg-white px-4 py-3 outline-none transition focus:border-olive"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className="w-full border border-border bg-white px-4 py-3 outline-none transition focus:border-olive"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Your phone number"
                    className="w-full border border-border bg-white px-4 py-3 outline-none transition focus:border-olive"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="How can we help?"
                    className="w-full resize-none border border-border bg-white px-4 py-3 outline-none transition focus:border-olive"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-olive px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-85 cursor-pointer"
                >
                  Send Enquiry
                </button>
              </form>
            </div>

            {/* CONTACT DETAILS */}
            <div className="md:pt-1">
              <h2 className="font-serif text-2xl md:text-3xl">Contact HAVEN</h2>

              <p className="mt-4 max-w-md leading-relaxed text-olive/70">
                Prefer to contact us directly? Reach out by phone, email or
                message and our team will be happy to assist.
              </p>

              <div className="mt-8 space-y-7">
                {/* ADDRESS */}
                <div className="flex gap-4">
                  <MapPin className="mt-1 size-5 shrink-0" />

                  <div>
                    <h3 className="font-medium">Visit us</h3>
                    <a
                      href="https://maps.app.goo.gl/fNv3KNnHZsnCobZM9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block leading-relaxed text-olive/70 transition hover:text-olive"
                    >
                      13 Tống Hữu Định Street, An Khánh Ward
                      <br />
                      Thủ Đức City, Hồ Chí Minh City
                    </a>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex gap-4">
                  <Phone className="mt-1 size-5 shrink-0" />

                  <div>
                    <h3 className="font-medium">Call us</h3>
                    <a
                      href="tel:+84329220226"
                      className="mt-1 block text-olive/70 transition hover:text-olive"
                    >
                      +84 329 220 226
                    </a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex gap-4">
                  <Mail className="mt-1 size-5 shrink-0" />

                  <div>
                    <h3 className="font-medium">Email us</h3>
                    <a
                      href="mailto:sales@havensaigon.com.vn"
                      className="mt-1 block text-olive/70 transition hover:text-olive"
                    >
                      sales@havensaigon.com.vn
                    </a>
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="flex gap-4">
                  <MessageCircle className="mt-1 size-5 shrink-0" />

                  <div>
                    <h3 className="font-medium">Message us</h3>

                    <div className="mt-3 flex items-center gap-4">
                      <a
                        href="https://wa.me/+84329220226"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contact HAVEN Saigon on WhatsApp"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#25D366] shadow-lg transition-transform hover:scale-105"
                      >
                        <FaWhatsapp className="h-6 w-6" />
                      </a>

                      <a
                        href="https://zalo.me/+84329220226"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contact HAVEN Saigon on Zalo"
                        className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg transition-transform hover:scale-105"
                      >
                        <Image
                          src="/icons/zalo.svg"
                          alt=""
                          width={28}
                          height={28}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MAP */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0687133566194!2d106.73284799999999!3d10.8060493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527962cc57533%3A0xbfc19027fd4c9f7e!2sHaven%20Saigon%20-%20Thao%20Dien%20Serviced%20Apartment!5e0!3m2!1sen!2sau!4v1787138003040!5m2!1sen!2sau"
              title="HAVEN Saigon location"
              className="h-[350px] w-full border-0 md:h-[450px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
