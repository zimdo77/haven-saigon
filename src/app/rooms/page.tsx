import {
  AirVent,
  Bath,
  Car,
  ConciergeBell,
  Refrigerator,
  ShieldCheck,
  Shirt,
  Tv,
  WashingMachine,
  Wifi,
  CookingPot,
} from "lucide-react";

import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import RoomCard from "@/components/RoomCard";
import SectionHeading from "@/components/SectionHeading";

import { rooms } from "@/data/rooms";

const apartmentFeatures = [
  { label: "Fridge", icon: Refrigerator },
  { label: "Kitchen", icon: CookingPot },
  { label: "Washing Machine", icon: WashingMachine },
  { label: "Air Conditioning", icon: AirVent },
  { label: "Private Bathroom", icon: Bath },
  { label: "Smart TV", icon: Tv },
  { label: "High-Speed Internet", icon: Wifi },
];

const buildingServices = [
  { label: "Building Management & Concierge", icon: ConciergeBell },
  { label: "24/7 Security", icon: ShieldCheck },
  { label: "Parking Space", icon: Car },
  { label: "Housekeeping & Laundry", icon: Shirt },
];

export default function RoomsPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Rooms & Services"
        subtitle="Comfortable spaces for everyday living."
        imageSrc="/images/rooms/hero1.jpg"
        imageAlt="HAVEN Saigon serviced apartments"
        priority
      />

      {/* ROOMS */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Rooms"
            title="Find a Space That Suits Your Stay"
            subtitle="Choose from fully furnished studios, one-bedroom and two-bedroom apartments designed for relaxed, everyday living."
          />

          <div className="mt-10 grid gap-x-8 gap-y-10 sm:mt-12 sm:gap-y-12 md:grid-cols-2 lg:grid-cols-3">
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

      {/* INCLUDED */}
      <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Everything You Need"
            title="Fully Furnished and Ready to Live In"
            subtitle="Every apartment comes equipped for comfortable day-to-day living, with on-site services to make your stay simple and convenient."
          />

          <div className="mt-10 space-y-12 max-w-5xl">
            {/* APARTMENT FEATURES */}
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl">
                In Your Apartment
              </h3>

              <div className="mt-6 grid gap-x-2 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                {apartmentFeatures.map(({ label, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-olive/70" />

                    <span className="text-sm leading-snug text-olive/75">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* BUILDING SERVICES */}
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl">
                Building & Services
              </h3>

              <div className="mt-6 grid gap-x-2 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                {buildingServices.map(({ label, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-olive/70" />

                    <span className="text-sm leading-snug text-olive/75">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
