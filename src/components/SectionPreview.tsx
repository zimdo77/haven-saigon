import Image from "next/image";

import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

type SectionPreviewProps = {
  eyebrow?: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  linkText: string;
  imagePosition?: "left" | "right";
  eager?: boolean;
  background?: "cream" | "white";
};

export default function SectionPreview({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  linkText,
  imagePosition = "left",
  eager = false,
  background = "cream",
}: SectionPreviewProps) {
  const image = (
    <div className="relative aspect-4/3 overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(min-width: 768px) 50vw, 100vw"
        loading={eager ? "eager" : "lazy"}
      />
    </div>
  );

  const content = (
    <div className="flex flex-col justify-center">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={description} />

      <div className="mt-8">
        <ButtonLink href={href} variant="secondary">
          {linkText}
        </ButtonLink>
      </div>
    </div>
  );

  return (
    <section className={background === "white" ? "bg-white" : "bg-cream"}>
      <Container className="grid gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-20">
        <div
          className={
            imagePosition === "right" ? "order-1 md:order-2" : "order-1"
          }
        >
          {image}
        </div>

        <div
          className={
            imagePosition === "right" ? "order-2 md:order-1" : "order-2"
          }
        >
          {content}
        </div>
      </Container>
    </section>
  );
}
