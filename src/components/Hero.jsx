import React from "react";
import heroImage from "../assets/hero.png";
import JobApplicationForm from "./JobApplicationForm";

export default function Hero() {
  return (
    <>
      <section
        className="relative min-h-screen w-full flex justify-center items-center bg-cover bg-center bg-no-repeat  "
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Form Container */}

        <div className="relative z-10 w-full flex justify-center items-center px-4 py-10 ">
          <JobApplicationForm />
        </div>
      </section>
    </>
  );
}
