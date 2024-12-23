import React from "react";
import { Carousel } from "@/components/carousel";

const FencingPage = () => {
  const fencingImages = [
    "/images/fencing/fence1.webp",
    "/images/fencing/fence2.webp",
    "/images/fencing/fence3.webp",
    "/images/fencing/fence4.webp",
    "/images/fencing/fence5.webp",
    "/images/fencing/fence6.webp",
    "/images/fencing/fence7.webp",
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-50 drop-shadow-lg">
        Professional Fencing Services
      </h1>

      <Carousel images={fencingImages} />

      <div className="bg-header-card bg-gray-50 shadow-lg rounded-lg p-8 max-w-3xl mx-auto mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 drop-shadow-md">
          Comprehensive Fencing Solutions
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We provide top-quality fencing solutions for residential and
          commercial properties. Whether you need privacy, security, or
          aesthetic enhancement, our team delivers precision-crafted fences
          using premium materials. From wood and vinyl to aluminum and
          chain-link, we offer diverse options to match your specific
          requirements.
        </p>
      </div>
    </div>
  );
};

export default FencingPage;
