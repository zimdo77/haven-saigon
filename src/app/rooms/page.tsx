import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import RoomCard from "@/components/RoomCard";
import SectionHeading from "@/components/SectionHeading";

import { rooms } from "@/data/rooms";

export default function RoomsPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Rooms & Apartments"
        subtitle="Thoughtfully designed serviced apartments for comfortable stays in Ho Chi Minh City."
        imageSrc="/images/rooms/hero1.jpg"
        imageAlt="HAVEN Saigon serviced apartments"
        priority
      />

      {/* ROOMS */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Rooms"
            title="Find your space that suits your stay"
            subtitle="From comfortable studios to spacious two-bedroom apartments, each room is designed for relaxed and convenient living."
          />

          <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <RoomCard
                key={room.slug}
                name={room.name}
                roomType={room.roomType}
                description={room.description}
                size={room.size}
                guests={room.guests}
                imageSrc={room.images[0]}
                imageAlt={`${room.name} ${room.roomType} at HAVEN Saigon`}
                href={`/rooms/${room.slug}`}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
