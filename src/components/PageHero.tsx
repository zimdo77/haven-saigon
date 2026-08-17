import Image from "next/image";

import Container from "@/components/Container";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  priority?: boolean;
};

export default function PageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  priority = false,
}: PageHeroProps) {
  return (
    <section className="relative h-[45vh] min-h-90 overflow-hidden md:h-[55vh]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={priority}
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/60" />

      <Container className="relative flex h-full items-center justify-center">
        <div className="max-w-2xl text-center text-white">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
