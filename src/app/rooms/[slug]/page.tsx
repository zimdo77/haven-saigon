import Image from "next/image";
import { notFound } from "next/navigation";
import { Users, Maximize2 } from "lucide-react";

import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";

import { rooms } from "@/data/rooms";

type RoomPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function RoomPage({ params }: RoomPageProps) {
  const { slug } = await params;

  const room = rooms.find((room) => room.slug === slug);

  if (!room) {
    notFound();
  }

  return (
    <>
      {/* HERO IMAGE */}
      <section className="relative h-[55vh] min-h-100 overflow-hidden md:h-[65vh]">
        <Image
          src={room.images[0]}
          alt={`${room.name} ${room.roomType}`}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <Container className="relative flex h-full items-end">
          <div className="pb-10 text-white md:pb-14">
            <p className="text-sm uppercase tracking-[0.18em] text-white/80">
              {room.roomType}
            </p>

            <h1 className="mt-2 font-serif text-5xl sm:text-6xl md:text-7xl">
              {room.name}
            </h1>
          </div>
        </Container>
      </section>

      {/* ROOM DETAILS */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
            {/* LEFT */}
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-olive/60">
                {room.roomType}
              </p>

              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                About {room.name}
              </h2>

              <p className="mt-6 max-w-2xl leading-relaxed text-olive/70">
                {room.description}
              </p>

              {/* FEATURES */}
              <div className="mt-10">
                <h3 className="font-serif text-2xl">Apartment Features</h3>

                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {room.features.map((feature) => (
                    <li
                      key={feature}
                      className="border-b border-olive/15 pb-3 text-olive/75"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:border-l lg:border-olive/15 lg:pl-10">
              <h3 className="font-serif text-2xl">Room Details</h3>

              <div className="mt-6 space-y-5">
                <div className="flex items-center gap-4">
                  <Maximize2 size={20} />

                  <div>
                    <p className="text-sm text-olive/60">Apartment Size</p>
                    <p className="mt-1">{room.size} m²</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Users size={20} />

                  <div>
                    <p className="text-sm text-olive/60">Guests</p>
                    <p className="mt-1">Up to {room.guests} guests</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <ButtonLink href="/contact">Contact Us</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PHOTO GALLERY */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.15em] text-olive/60">
              Gallery
            </p>

            <h2 className="mt-2 font-serif text-4xl md:text-5xl">
              Inside {room.name}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {room.images.map((image, index) => (
              <div
                key={image}
                className={`relative overflow-hidden ${
                  index === 0 ? "md:col-span-2 aspect-video" : "aspect-4/3"
                }`}
              >
                <Image
                  src={image}
                  alt={`${room.name} apartment photo ${index + 1}`}
                  fill
                  sizes={
                    index === 0 ? "100vw" : "(min-width: 768px) 50vw, 100vw"
                  }
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FLOORPLANS */}
      {room.floorplans.length > 0 && (
        <section className="py-16 md:py-24">
          <Container>
            <div className="mb-10">
              <p className="text-sm uppercase tracking-[0.15em] text-olive/60">
                Layout
              </p>

              <h2 className="mt-2 font-serif text-4xl md:text-5xl">
                Floorplans
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {room.floorplans.map((floorplan, index) => (
                <div
                  key={floorplan}
                  className="relative aspect-4/3 overflow-hidden bg-white"
                >
                  <Image
                    src={floorplan}
                    alt={`${room.name} floorplan ${index + 1}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-contain p-6"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
