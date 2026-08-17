import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingContactLinks() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/+84329220226"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact HAVEN Saigon on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#25D366] shadow-lg transition-transform hover:scale-105"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>

      {/* Zalo */}
      <a
        href="https://zalo.me/+84329220226"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact HAVEN Saigon on Zalo"
        className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg transition-transform hover:scale-105"
      >
        <Image src="/icons/zalo.svg" alt="" width={28} height={28} />
      </a>
    </div>
  );
}
