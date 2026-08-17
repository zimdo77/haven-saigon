import Image from "next/image";
import Link from "next/link";
import { Users } from "lucide-react";

type RoomCardProps = {
  name: string;
  roomType: string;
  description: string;
  size: number;
  guests: number;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export default function RoomCard({
  name,
  roomType,
  description,
  size,
  guests,
  imageSrc,
  imageAlt,
  href,
}: RoomCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="pt-5">
        <p className="text-sm uppercase tracking-[0.15em] text-olive/60">
          {roomType}
        </p>

        <h3 className="mt-2 font-serif text-3xl transition-opacity group-hover:opacity-60">
          {name}
        </h3>

        <div className="mt-3 flex items-center gap-4 text-sm text-olive/70">
          <span>{size} m²</span>

          <span className="flex items-center gap-1.5">
            <Users size={16} />
            Up to {guests} guests
          </span>
        </div>

        <p className="mt-4 line-clamp-2 leading-relaxed text-olive/70">
          {description}
        </p>
      </div>
    </Link>
  );
}
