import PageHero from "@/components/PageHero";

export default function GalleryPage() {
  return (
    <div>
      <PageHero
        title="Photo Gallery"
        subtitle="Take a closer look at HAVEN Saigon."
        imageSrc="/images/gallery/hero.jpg"
        imageAlt="HAVEN Saigon"
        priority
      />
    </div>
  );
}
