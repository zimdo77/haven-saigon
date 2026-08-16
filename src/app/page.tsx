import Image from "next/image";

import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import SectionPreview from "@/components/SectionPreview";
import RoomCard from "@/components/RoomCard";
import { rooms } from "@/data/rooms";
import SectionHeading from "@/components/SectionHeading";

// Displays exactly in order
const featuredRoomSlugs = ["chamomile", "peppermint", "rose-oolong"];

export default function Home() {
  const featuredRooms = featuredRoomSlugs
    .map((slug) => rooms.find((room) => room.slug === slug))
    .filter((room) => room !== undefined);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden">
        <Image
          src="/images/home/hero.jpg"
          alt="HAVEN Saigon serviced apartment"
          fill
          priority
          className="object-cover object-[0%_center]"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent" />

        <Container className="relative flex min-h-[70vh] md:min-h-[80vh] items-center py-16 md:py-20">
          <div className="max-w-2xl text-white">
            <p className="mb-4 text-sm uppercase tracking-[0.2em]">
              Serviced Apartments in Thảo Điền
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-medium leading-tight">
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
        title="A Calmer Way to Live in Saigon"
        description="Set in the heart of Thảo Điền, HAVEN offers a peaceful residential setting with the comfort, privacy, and convenience of everyday living close at hand."
        imageSrc="/images/about/about1.jpg"
        imageAlt="HAVEN Saigon serviced apartment interior"
        href="/about"
        linkText="Learn More"
        eager
        background="cream"
      />

      {/* ROOMS PREVIEW SECTION */}
      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Our Rooms"
              title="Find a Space That Suits Your Stay"
              subtitle="Explore our fully furnished apartments, each designed for comfortable everyday living."
            />

            <div className="hidden shrink-0 md:block">
              <ButtonLink href="/rooms" variant="secondary">
                View All Rooms
              </ButtonLink>
            </div>
          </div>

          <div className="mt-10 grid gap-14 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
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
        title="Everything You Need, Close to Home"
        description="Enjoy everyday convenience with on-site facilities including a swimming pool, gym, and rooftop terrace."
        imageSrc="/images/facilities/pool1.jpg"
        imageAlt="Facilities at HAVEN Saigon"
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
            title="Make HAVEN Your Home in Saigon"
            subtitle="Have a question or want to check availability? Get in touch and we’ll help you find the right apartment."
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
