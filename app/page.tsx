import Image from "next/image";
import React from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Home(): React.ReactElement {
  return (
    <div className="flex flex-col bg-gradient items-center text-center py-10 px-4">
      {/* Header */}
      <h1 className="text-4xl md:text-6xl font-bold text-foreground">
        Deck & Fencing Company
      </h1>
      <p className="text-lg md:text-2xl mt-4 text-muted-foreground">
        Your trusted partner for all your deck and fencing needs
      </p>

      {/* Contact Section */}
      <section className="flex flex-col items-center mt-8">
        <h2 className="text-2xl font-semibold text-foreground">Call Us Now!</h2>
        <Link
          href={siteConfig.links.phone}
          className="text-xl font-semibold text-muted-foreground mt-2"
        >
          (615)-681-0008
        </Link>{" "}
        {/* Placeholder for phone number */}
        <div className="mt-4 text-center max-w-lg">
          <p className="text-lg text-muted-foreground">
            We provide top-quality deck and fencing services with a commitment
            to excellence and customer satisfaction. Contact us today to
            transform your outdoor space.
          </p>
        </div>
      </section>

      {/* Image Cards */}
      <section className="flex flex-col-reverse md:flex-row justify-center items-center gap-4 my-10 w-full max-w-4xl">
        <Link
          href="/decks"
          className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-4"
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
          <h3 className="mt-4 text-lg font-semibold text-gray-800">
            Deck Services
          </h3>
        </Link>
        <Link
          href="/fencing"
          className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-4"
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
          <h3 className="mt-4 text-lg font-semibold text-gray-800">
            Fencing Services
          </h3>
        </Link>
      </section>
    </div>
  );
}
