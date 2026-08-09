import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p>HAVEN Saigon</p>

      <div>
        <Link href="/about">About Us</Link>
        <Link href="/rooms">Rooms</Link>
        <Link href="/facilities">Facilities</Link>
        <Link href="/gallery">Photo Gallery</Link>
        <Link href="/contact">Contact Us</Link>
      </div>

      <p>Hotline: +84 XXX XXX XXX</p>

      <p>© 2026 HAVEN Saigon. All rights reserved.</p>
    </footer>
  );
}
