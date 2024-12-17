import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="bg-background shadow-md rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold mb-6 text-foreground">
          About Our Company
        </h1>

        <p className="text-lg text-foreground leading-relaxed">
          With over [X] years of experience in deck and fencing installation, we
          pride ourselves on delivering high-quality, customized outdoor
          solutions for residential and commercial properties. Our team of
          skilled professionals is dedicated to transforming your outdoor spaces
          with precision, craftsmanship, and attention to detail. We use premium
          materials and cutting-edge techniques to ensure durability,
          aesthetics, and long-lasting value for our customers.
        </p>

        <div className="mt-8 border-t pt-6 text-foreground">
          <h2 className="text-xl font-semibold mb-4">Our Commitment</h2>
          <p>
            We are committed to exceptional service, transparent pricing, and
            creating outdoor spaces that exceed your expectations. From initial
            consultation to final installation, we work closely with you to
            bring your vision to life.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-xl mb-2">Material Expertise</h3>
            <p className="text-gray-600">Wood and Composite Hardwoods</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-xl mb-2">Custom Designs</h3>
            <p className="text-gray-600">Tailored to Your Home & Lifestyle</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-xl mb-2">Professional Install</h3>
            <p className="text-gray-600">Precision & Quality Guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
