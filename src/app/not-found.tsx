import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          {/* 404 */}
          <p className="font-serif text-8xl leading-none text-olive/20 sm:text-9xl">
            404
          </p>

          {/* Message */}
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
            Nothing to see here — for now.
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-olive/70 md:text-lg">
            This page couldn&apos;t be found, but your stay doesn&apos;t have to
            end here. Let&apos;s get you back somewhere familiar.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/">Back to Home</ButtonLink>

            <ButtonLink href="/rooms" variant="secondary">
              View Rooms
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
