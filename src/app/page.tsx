import Image from "next/image";

import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import SectionPreview from "@/components/SectionPreview";

export default function Home() {
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
    </>
  );
}
