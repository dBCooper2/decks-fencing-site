import React from "react";
import { Carousel } from "@/components/carousel";

const DecksPage = () => {
  const deckImages = ["/images/decks/deck1.webp"];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-50">
        Our Deck Solutions
      </h1>

      <Carousel images={deckImages} />

      <div className="bg-header-card bg-gray-50 shadow-lg rounded-lg p-8 max-w-3xl mx-auto mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Custom Deck Design & Installation
        </h2>
        <p className=" text-gray-700 leading-relaxed">
          We specialize in creating beautiful, durable decks tailored to your
          unique outdoor living needs. From classic wooden designs to modern
          composite materials, our expert team transforms your backyard into a
          stunning entertainment space. We offer comprehensive design
          consultations, premium material selection, and precision installation
          to bring your vision to life.
        </p>
      </div>
    </div>
  );
};

export default DecksPage;
