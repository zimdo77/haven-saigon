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
        title="About HAVEN Saigon"
        subtitle="Comfortable and convenient serviced living in Ho Chi Minh City."
        imageSrc="/images/about/about2.jpg"
        imageAlt="HAVEN Saigon serviced apartments"
        priority
      />

      {/* OUR STORY */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
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
                eyebrow="About Us"
                title="A place to feel at home"
              />

              <div className="mt-6 space-y-4 text-sm leading-7 text-olive/75 md:text-base">
                <p>
                  HAVEN Saigon offers comfortable serviced apartments designed
                  for guests looking for a convenient and welcoming place to
                  stay in Ho Chi Minh City.
                </p>

                <p>
                  Whether you&apos;re visiting for a short stay or settling in
                  for longer, our aim is to provide the comfort of home
                  alongside the convenience of serviced living.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHY HAVEN */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why HAVEN"
            title="Designed for comfortable living"
            align="center"
          />

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
                Serviced living that makes everyday life easier, whether
                you&apos;re staying for a few days or for a longer period.
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
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
            <div className="order-2 md:order-1">
              <SectionHeading
                eyebrow="Your Stay"
                title="More than just a place to stay"
                subtitle="HAVEN is designed to give you the space and comfort to settle into Saigon at your own pace. A place where you can relax, recharge, and feel at home throughout your stay."
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
      <section className="bg-white py-16 text-olive md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Stay With Us"
              title="Find your place at HAVEN"
              subtitle="Explore our serviced apartments or get in touch with us to find the right stay for your time in Saigon."
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
