import type { Metadata } from "next";

import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Explore photos of Haven Saigon's serviced apartments, facilities and shared spaces in Thao Dien, Ho Chi Minh City.",
  alternates: {
    canonical: "/gallery",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Photo Gallery"
        subtitle="A closer look at the spaces and surroundings of HAVEN Saigon."
        imageSrc="/images/gallery/hero1.jpg"
        imageAlt="Haven Saigon serviced apartment interior"
        priority
      />

      <section className="py-14 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-olive/60 sm:text-sm sm:tracking-[0.2em]">
              Coming Soon
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
              Our gallery is on the way
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-olive/70 sm:text-base">
              We&apos;re putting together a collection of photos showcasing
              HAVEN Saigon&apos;s apartments, facilities and shared spaces.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
