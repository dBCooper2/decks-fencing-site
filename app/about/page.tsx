import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="bg-header-card bg-gray-50 shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 drop-shadow-lg">
          About Our Company
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          Here at Affordable Decks & Fencing, we are committed to keeping things
          simple, passing savings onto the client, and staying ahead of our
          competitors. We don&apos;t drive the prices up for you with big
          warehouses full of equipment and materials, a large office staff or a
          fleet of company trucks.
        </p>

        <div className="mt-8 border-t pt-6 text-gray-700">
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
            <h3 className="font-semibold text-xl text-gray-800 mb-2 drop-shadow-md">
              Material Expertise
            </h3>
            <p className="text-gray-600">Wood and Composite Hardwoods</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-xl text-gray-800 mb-2 drop-shadow-md">
              Custom Designs
            </h3>
            <p className="text-gray-600">Tailored to Your Home & Lifestyle</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-xl text-gray-800 mb-2 drop-shadow-md">
              Professional Install
            </h3>
            <p className="text-gray-600">Precision & Quality Guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
