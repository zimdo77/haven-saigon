import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link href="/">HAVEN Saigon</Link>

        <div>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/rooms">Rooms</Link>
          <Link href="/facilities">Facilities</Link>
          <Link href="/gallery">Photo Gallery</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
}