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
    <section className="relative h-[45vh] min-h-80 overflow-hidden sm:min-h-90 md:h-[55vh]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={priority}
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/50" />

      <Container className="relative flex h-full items-center justify-center">
        <div className="max-w-2xl text-center text-white">
          <h1 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
