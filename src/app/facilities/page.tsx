import type { Metadata } from "next";
import Image from "next/image";

import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Facilities & Amenities",
  description:
    "Explore the facilities at Haven Saigon serviced apartments in Thao Dien, Ho Chi Minh City, including a swimming pool, fitness area, co-working space and rooftop BBQ terrace.",
  alternates: {
    canonical: "/facilities",
  },
};

export default function FacilitiesPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Facilities"
        subtitle="Convenient spaces for everyday use."
        imageSrc="/images/facilities/pool.png"
        imageAlt="Swimming pool at Haven Saigon"
        priority
      />

      {/* INTRO */}
      <section className="pt-14 pb-10 sm:pt-16 sm:pb-12 md:pt-20 md:pb-16">
        <Container>
          <SectionHeading
            eyebrow="Facilities"
            title="Designed Around Daily Life"
            subtitle="Shared spaces for relaxing, working, and staying active throughout your stay."
          />
        </Container>
      </section>

      {/* FACILITIES */}
      <section className="pb-14 sm:pb-16 md:pb-20 lg:pb-24">
        <Container className="space-y-14 sm:space-y-16 md:space-y-20 lg:space-y-24">
          {/* FEATURED — POOL */}
          <div>
            <div className="relative aspect-4/3 overflow-hidden md:aspect-2/1">
              <Image
                src="/images/facilities/pool.png"
                alt="Swimming pool at Haven Saigon"
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 1216px, 100vw"
              />
            </div>

            <div className="mt-6 max-w-2xl">
              <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
                Swimming Pool
              </h2>

              <p className="mt-3 leading-relaxed text-olive/75">
                A quiet place to cool off, unwind, or spend some time outdoors
                during the day.
              </p>
            </div>
          </div>

          {/* MIDDLE GRID */}
          <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
            {/* FITNESS */}
            <article>
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src="/images/facilities/gym.png"
                  alt="Gym area at Haven Saigon"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>

              <div className="mt-5">
                <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
                  Fitness Area
                </h2>

                <p className="mt-3 max-w-xl leading-relaxed text-olive/75">
                  Keep up with your workout routine without having to leave the
                  building.
                </p>
              </div>
            </article>

            {/* CO-WORKING */}
            <article>
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src="/images/facilities/coworking.jpg"
                  alt="Co-working space at Haven Saigon"
                  fill
                  className="object-cover object-left"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>

              <div className="mt-5">
                <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
                  Co-working Space
                </h2>

                <p className="mt-3 max-w-xl leading-relaxed text-olive/75">
                  A comfortable shared workspace for remote work, studying or
                  simply finding a quiet place to focus.
                </p>
              </div>
            </article>
          </div>

          {/* ROOFTOP */}
          <div>
            <div className="relative aspect-4/3 overflow-hidden md:aspect-2/1">
              <Image
                src="/images/facilities/rooftop.png"
                alt="Rooftop terrace at Haven Saigon"
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 1216px, 100vw"
              />
            </div>

            <div className="mt-6 ml-auto max-w-2xl md:text-right">
              <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
                Rooftop Terrace
              </h2>

              <p className="mt-3 leading-relaxed text-olive/75">
                An open-air space to relax, enjoy the surroundings, or make use
                of the BBQ area.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
