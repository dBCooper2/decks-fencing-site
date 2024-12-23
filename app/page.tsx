import Image from "next/image";
import React from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Home(): React.ReactElement {
  return (
    <div className="flex flex-col bg-gradient items-center text-center py-10 px-4">
      {/* Header */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-50 drop-shadow-lg">
        Affordable Decks & Fencing
      </h1>
      <p className="text-lg md:text-2xl mt-4 text-gray-800 dark:text-gray-200">
        Your trusted partner for all your deck and fencing needs in the greater
        Wilson County area.
      </p>

      {/* Contact Section */}
      <section className="flex flex-col items-center mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
          Call Us Now!
        </h2>
        <Link
          href={siteConfig.links.phone}
          className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mt-2 hover:font-bold drop-shadow-lg"
        >
          (615)-681-0008
        </Link>{" "}
        {/* Placeholder for phone number */}
      </section>

      {/* Image Cards */}
      <section className="flex flex-col-reverse md:flex-row justify-center items-center gap-4 my-10 w-full max-w-4xl">
        <Link
          href="/decks"
          className="w-full md:w-1/2 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow p-4"
        >
          <div className="relative bg-gray-200 h-64 md:h-80 flex items-center justify-center">
            <Image
              src="/images/decks/deck1.webp"
              alt="Image of Deck"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-800 drop-shadow-md">
            Deck Services
          </h3>
        </Link>
        <Link
          href="/fencing"
          className="w-full md:w-1/2 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow p-4 "
        >
          <div className="relative bg-gray-200 h-64 md:h-80 flex items-center justify-center">
            <Image
              src="/images/fencing/fence1.webp"
              alt="Image of Fencing"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-800 drop-shadow-md">
            Fencing Services
          </h3>
        </Link>
      </section>
    </div>
  );
}
