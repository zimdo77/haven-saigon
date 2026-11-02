import Image from "next/image";

import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ButtonLink from "@/components/ButtonLink";
import PageHero from "@/components/PageHero";

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="About Us"
        subtitle="Comfortable and convenient living in Saigon."
        imageSrc="/images/about/about2.jpg"
        imageAlt="HAVEN Saigon serviced apartments"
        priority
      />

      {/* WHAT MATTERS */}
      <section className="py-14 sm:py-16 md:py-20">
        <Container>
          <div className="grid items-center gap-8 sm:gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="relative aspect-4/3 overflow-hidden">
              <Image
                src="/images/about/about1.jpg"
                alt="Interior of HAVEN Saigon"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                loading="eager"
              />
            </div>

            <div>
              <SectionHeading
                eyebrow="What Matters to Us"
                title="A Place to Feel at Home"
              />

              <div className="mt-6 space-y-4 text-sm leading-7 text-olive/75 sm:text-base">
                <p>
                  The idea started with wanting to create a place that feels
                  comfortable, welcoming, and easy to settle into from the
                  moment you arrive.
                </p>

                <p>
                  We wanted it to feel like more than just an apartment.
                  Somewhere you can come back to after a long day, switch off,
                  and feel at ease while still having everything you need for
                  everyday life close by.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* THE NEIGHBOURHOOD */}
      <section className="bg-white py-14 sm:py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="The Neighbourhood"
            title="Thảo Điền: A Calmer Side of Saigon"
            align="center"
          />

          <div className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <div className="text-center">
              <h3 className="font-serif text-2xl">A Little Quieter</h3>

              <p className="mt-3 text-sm leading-6 text-olive/70">
                Enjoy a more relaxed residential setting while still being
                within easy reach of the energy of central Saigon.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-2xl">Local & International</h3>

              <p className="mt-3 text-sm leading-6 text-olive/70">
                Thảo Điền brings together local Vietnamese life with a diverse
                international community, giving the area its own unique
                character.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-2xl">Everything Close By</h3>

              <p className="mt-3 text-sm leading-6 text-olive/70">
                Cafés, restaurants, and shops all nearby, making day-to-day
                living simple and convenient.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICED LIVING */}
      <section className="py-14 sm:py-16 md:py-20">
        <Container>
          <div className="grid items-center gap-8 sm:gap-10 md:grid-cols-[1fr_1.1fr] md:gap-12 lg:gap-16">
            <div className="order-2 md:order-1">
              <SectionHeading
                eyebrow="Serviced Living"
                title="Everything Taken Care Of"
                subtitle="Fully serviced apartments with professional on-site management, 24/7 security, weekly housekeeping, maintenance support, and flexible rental terms to suit different lengths of stay.
                
                With a secure and quiet residential environment, you have the privacy of your own apartment with support available when you need it."
              />
            </div>

            <div className="relative aspect-4/3 overflow-hidden order-1 md:order-2">
              <Image
                src="/images/about/about3.jpg"
                alt="Comfortable living at HAVEN Saigon"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white py-14 text-olive sm:py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Stay With Us"
              title="Find a Space That Feels Right"
              subtitle="Explore our apartments or get in touch to learn more about availability."
              align="center"
            />

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="/rooms" variant="primary">
                View Rooms
              </ButtonLink>

              <ButtonLink href="/contact" variant="secondary">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
