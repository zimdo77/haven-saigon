import type { MetadataRoute } from "next";

import { rooms } from "@/data/rooms";

const baseUrl = "https://havensaigon.com.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/rooms",
    "/facilities",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
  }));

  const roomPages: MetadataRoute.Sitemap = rooms.map((room) => ({
    url: `${baseUrl}/rooms/${room.slug}`,
  }));

  return [...staticPages, ...roomPages];
}
