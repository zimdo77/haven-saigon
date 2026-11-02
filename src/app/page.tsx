import Image from "next/image";
import type { Metadata } from "next";

import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import SectionPreview from "@/components/SectionPreview";
import RoomCard from "@/components/RoomCard";
import { rooms } from "@/data/rooms";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: {
    absolute: "Haven Saigon | Serviced Apartments in Thao Dien",
  },
  description:
    "Discover fully furnished serviced apartments in Thao Dien, Ho Chi Minh City. Enjoy modern amenities, flexible monthly stays and comfortable living at Haven Saigon.",
  alternates: {
    canonical: "/",
  },
};

// Displays exactly in order
const featuredRoomSlugs = ["chamomile", "peppermint", "rose-oolong"];

export default function Home() {
  const featuredRooms = featuredRoomSlugs
    .map((slug) => rooms.find((room) => room.slug === slug))
    .filter((room) => room !== undefined);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[65vh] overflow-hidden sm:min-h-[70vh] md:min-h-[80vh]">
        <Image
          src="/images/home/hero.jpg"
          alt="Haven Saigon serviced apartment interior 1"
          fill
          priority
          className="object-cover object-[0%_center]"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent" />

        <Container className="relative flex min-h-[65vh] items-center py-14 sm:min-h-[70vh] sm:py-16 md:min-h-[80vh] md:py-20">
          <div className="max-w-2xl text-white">
            <p className="mb-4 text-xs uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.2em]">
              Serviced Apartments in Thảo Điền
            </p>

            <h1 className="font-serif text-4xl font-medium leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Stay Your Way. <br />
              Feel at Home.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              Fully furnished apartments with modern amenities and flexible
              stays from one month to long-term living.
            </p>

            <div className="mt-8">
              <ButtonLink variant="light" href="/contact">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* ABOUT PREVIEW SECTION */}
      <SectionPreview
        eyebrow="About HAVEN"
        title="Designed for Comfortable Living"
        description="Tucked away in Thảo Điền, our serviced apartments offer a peaceful place to settle in, with privacy, convenience, and everything you need for day-to-day living nearby."
        imageSrc="/images/about/about1.jpg"
        imageAlt="Haven Saigon serviced apartment interior 2"
        href="/about"
        linkText="Learn More"
        eager
        background="cream"
      />

      {/* ROOMS PREVIEW SECTION */}
      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <div className="md:flex md:items-end md:justify-between md:gap-6">
            <SectionHeading
              eyebrow="Our Rooms"
              title="Find a Space That Suits Your Stay"
              subtitle="Choose from fully furnished studios, one-bedroom and two-bedroom apartments designed for relaxed, everyday living."
            />

            <div className="hidden shrink-0 md:block">
              <ButtonLink href="/rooms" variant="secondary">
                View All Rooms
              </ButtonLink>
            </div>
          </div>

          <div className="mt-8 grid gap-x-8 gap-y-10 sm:mt-10 sm:gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {featuredRooms.map((room) => (
              <RoomCard
                key={room.slug}
                name={room.name}
                roomType={room.roomType}
                description={room.description}
                size={room.size}
                guests={room.guests}
                imageSrc={room.images[0]}
                imageAlt={`${room.name} at HAVEN Saigon`}
                href={`/rooms/${room.slug}`}
              />
            ))}
          </div>

          <div className="mt-10 md:hidden">
            <ButtonLink href="/rooms" variant="secondary">
              View All Rooms
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* FACILITIES PREVIEW SECTION */}
      <SectionPreview
        eyebrow="Facilities"
        title="Designed Around Daily Life"
        description="Enjoy everyday convenience with on-site facilities including a swimming pool, gym, co-working space, and rooftop terrace."
        imageSrc="/images/facilities/pool.png"
        imageAlt="Swimming pool at Haven Saigon"
        href="/facilities"
        linkText="Explore Facilities"
        imagePosition="right"
        background="cream"
      />

      {/* CONTACT CTA SECTION */}
      <section className="bg-white">
        <Container className="py-16 md:py-20 text-center">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Thinking About Your Next Stay?"
            subtitle="Have a question or want to check availability? Get in touch and we’ll help you find a space that suits your needs."
            align="center"
          />

          <div className="mt-8">
            <ButtonLink href="/contact" variant="primary">
              Contact Us
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
