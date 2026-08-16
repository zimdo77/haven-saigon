import Image from "next/image";

import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ButtonLink from "@/components/ButtonLink";

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[45vh] min-h-90 overflow-hidden md:h-[55vh]">
        <Image
          src="/images/about/about2.jpg"
          alt="HAVEN Saigon serviced apartments"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <Container className="relative flex h-full items-center justify-center">
          <div className="max-w-2xl text-center text-white">
            <h1 className="font-serif text-5xl md:text-6xl">
              About HAVEN SAIGON
            </h1>

            <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
              Comfortable and convenient serviced living in Ho Chi Minh City.
            </p>
          </div>
        </Container>
      </section>

      {/* OUR STORY */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/about/about4.jpg"
                alt="Interior of HAVEN Saigon"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-olive/60">
                About Us
              </p>

              <SectionHeading title="A place to feel at home" />

              <div className="mt-6 space-y-4 text-sm leading-7 text-olive/75 md:text-base">
                <p>
                  HAVEN Saigon offers comfortable serviced apartments designed
                  for guests looking for a convenient and welcoming place to
                  stay in Ho Chi Minh City.
                </p>

                <p>
                  Whether you&apos;re visiting for a short stay or settling in for
                  longer, our aim is to provide the comfort of home alongside
                  the convenience of serviced living.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHY HAVEN */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-olive/60">
              Why HAVEN
            </p>

            <SectionHeading
              title="Designed for comfortable living"
              align="center"
            />
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
            <div className="text-center">
              <h3 className="font-serif text-2xl">Comfort</h3>

              <p className="mt-3 text-sm leading-6 text-olive/70">
                Thoughtfully designed apartments that give you a comfortable
                place to relax, work, and settle into your stay.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-2xl">Convenience</h3>

              <p className="mt-3 text-sm leading-6 text-olive/70">
                Serviced living that makes everyday life easier, whether you&apos;re
                staying for a few days or for a longer period.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-2xl">A Place to Call Home</h3>

              <p className="mt-3 text-sm leading-6 text-olive/70">
                A welcoming environment where you can enjoy the independence of
                an apartment with the comfort and support of a serviced stay.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* LIFESTYLE */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-olive/60">
                Your Stay
              </p>

              <SectionHeading title="More than just a place to stay" />

              <p className="mt-6 max-w-lg text-sm leading-7 text-olive/75 md:text-base">
                HAVEN is designed to give you the space and comfort to settle
                into Saigon at your own pace. A place where you can relax,
                recharge, and feel at home throughout your stay.
              </p>
            </div>

            <div className="relative aspect-4/3 overflow-hidden">
              <Image
                src="/images/about/about3.jpg"
                alt="Comfortable living at HAVEN Saigon"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 text-olive md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-olive/60">
              Stay With Us
            </p>

            <SectionHeading
              title="Find your place at HAVEN"
              subtitle="Explore our serviced apartments or get in touch with us to find
              the right stay for your time in Saigon."
              align="center"
            />

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="/rooms" variant="secondary">
                View Rooms
              </ButtonLink>

              <ButtonLink href="/contact" variant="primary">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
