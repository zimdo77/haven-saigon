import Image from "next/image";

import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import SectionPreview from "@/components/SectionPreview";
import RoomCard from "@/components/RoomCard";
import { rooms } from "@/data/rooms";
import SectionHeading from "@/components/SectionHeading";

export default function Home() {
  // Displays exactly in order
  const featuredRoomSlugs = ["chamomile", "peppermint", "rose-oolong"];

  const featuredRooms = featuredRoomSlugs
    .map((slug) => rooms.find((room) => room.slug === slug))
    .filter((room) => room !== undefined);

  return (
    <>
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

        <Container className="relative flex min-h-[70vh] md:min-h-[80vh] items-center">
          <div className="max-w-2xl text-white">
            <p className="mb-4 text-sm uppercase tracking-[0.2em]">
              Serviced Apartments in Thảo Điền
            </p>

            <h1 className="font-serif text-5xl font-medium leading-tight md:text-7xl">
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

      <SectionPreview
        eyebrow="About HAVEN"
        title="A Calmer Way to Live in Saigon"
        description="Set in the heart of Thảo Điền, HAVEN offers a peaceful residential setting with the comfort, privacy, and convenience of everyday living close at hand."
        imageSrc="/images/about/about1.jpg"
        imageAlt="HAVEN Saigon serviced apartment interior"
        href="/about"
        linkText="Learn More"
        eager
      />

      <section className="bg-white">
        <Container className="py-20">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              title="Find a Space That Suits Your Stay"
              subtitle="Explore our fully furnished apartments, each designed for comfortable everyday living."
            />

            <div className="hidden md:block">
              <ButtonLink href="/rooms" variant="secondary">
                View All Rooms
              </ButtonLink>
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
    </>
  );
}
