import React from "react";
import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-screen flex justify-center items-center bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Form Container?? */}
    </section>
  );
}
