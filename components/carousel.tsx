//TODO: Hide the buttons to scroll when there is only one image

"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: images.length > 1,
      align: "center",
      slidesToScroll: 1,
    },
    images.length > 1
      ? [Autoplay({ delay: 4000, stopOnInteraction: false })]
      : [],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative max-w-6xl mx-auto px-4 lg:px-16">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="embla__slide flex-grow-0 flex-shrink-0 w-full px-2 relative"
            >
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Only show if more than one image */}
      {images.length > 1 && (
        <>
          <button
            className="hidden sm:block absolute top-1/2 left-0 -translate-y-1/2
                       bg-white/50 p-2 rounded-full
                       hover:bg-white/75 transition z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="text-gray-800" size={24} />
          </button>
          <button
            className="hidden sm:block absolute top-1/2 right-0 -translate-y-1/2
                       bg-white/50 p-2 rounded-full
                       hover:bg-white/75 transition z-10"
            onClick={scrollNext}
          >
            <ChevronRight className="text-gray-800" size={24} />
          </button>
        </>
      )}

      {/* Pagination Dots - Only show if more than one image */}
      {images.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`
                h-2 w-2 rounded-full transition-colors duration-300
                ${index === selectedIndex ? "bg-gray-800" : "bg-gray-300"}
              `}
            />
          ))}
        </div>
      )}
    </div>
  );
};
