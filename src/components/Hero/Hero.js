// Hero.js
import React from 'react';

export default function Hero() {
  return (
    <section className="bg-white pt-36 pb-20 px-6 sm:px-12 lg:px-24 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          Safety Alignment Can Be Not Superficial
          <br className="hidden sm:inline" />
          <span className="text-blue-600"> With Explicit Safety Signals</span>
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
          A lightweight and robust safety alignment method for LLMs using explicit safety classification signals and strategic decoding.
        </p>

        {/* Call to action buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://arxiv.org/abs/2505.17072"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition"
          >
            Read Paper
          </a>
          <a
            href="https://github.com/JEKimLab/Safety-Alignment-With-Explicit-Safety-Signal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-gray-300 hover:border-gray-500 rounded-md text-gray-800 font-medium transition"
          >
            View Code
          </a>
        </div>

        {/* Conference info (optional) */}
        <p className="mt-4 text-sm text-gray-500">Accepted at ICML 2025</p>
      </div>
    </section>
  );
}
