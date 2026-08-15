import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ButtonLink from "@/components/ButtonLink";

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
      {eyebrow && (
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-olive/70">
          {eyebrow}
        </p>
      )}
      <SectionHeading title={title} subtitle={description} />

      <div className="mt-8">
        <ButtonLink href={href} variant="secondary">
          {linkText}
        </ButtonLink>
      </div>
    </div>
  );

  return (
    <section>
      <Container className="grid gap-10 py-20 md:grid-cols-2 md:gap-16">
        {imagePosition === "left" ? (
          <>
            {image}
            {content}
          </>
        ) : (
          <>
            {content}
            {image}
          </>
        )}
      </Container>
    </section>
  );
}
