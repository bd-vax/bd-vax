// Hero.js
import React from 'react';

export default function Hero() {
  return (
    <section className="bg-white pt-36 pb-20 px-6 sm:px-12 lg:px-24 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          Purifying Generative LLMs from Backdoors 
          <br className="hidden sm:inline" />
          <span className="text-blue-600">without Prior Knowledge or Clean Reference</span>
        </h1>

        {/* Authors */}
        <p className="mt-4 text-gray-700 text-sm sm:text-base font-medium">
          Jianwei Li<sup>1</sup>, Jung-Eun Kim<sup>1</sup>
        </p>
        <p className="text-gray-500 text-sm">
          <sup>1</sup>North Carolina State University
        </p>

        {/* Tagline */}
        <p className="mt-6 text-lg sm:text-xl text-gray-600">
          This paper proposes an immunization-inspired framework that purifies instruction-tuned generative LLMs without prior trigger knowledge or clean reference models by extracting and eliminating shared backdoor signatures across synthetic variants, while preserving generative capability.
        </p>

        {/* Call to action buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://openreview.net/forum?id=M7eWB695jp&referrer=%5Bthe%20profile%20of%20Jianwei%20Li%5D(%2Fprofile%3Fid%3D~Jianwei_Li8)"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition"
          >
            Read Paper
          </a>
          <a
            href="https://github.com/JEKimLab/bd-vax"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-gray-300 hover:border-gray-500 rounded-md text-gray-800 font-medium transition"
          >
            View Code
          </a>
        </div>

        {/* Conference info (optional) */}
        <p className="mt-4 text-sm text-gray-500">Accepted at ICLR 2026</p>
      </div>
    </section>
  );
}
