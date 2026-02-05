// MotivationAndBackground.js
import React from 'react';

export default function MotivationAndBackground() {
  return (
    <section className="bg-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-left space-y-10">
        {/* Section Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Motivation & Background</h2>

        {/* Motivation */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Motivation</h3>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            To build a practical, trigger-agnostic, and reference-free purification method, the paper first analyzes how backdoors manifest in instruction-tuned LLMs and finds that malicious trigger–behavior associations are redundantly encoded across MLP layers rather than localized in attention. This suggests shifting focus from identifying triggers to breaking the trigger–behavior association itself. Motivated by immunization principles, the work aims to extract a shared “backdoor signature” from multiple synthetic variants of the suspicious model and selectively remove it—thereby neutralizing diverse backdoors while preserving the model’s generative capability under standard fine-tuning settings.
          </p>
        </div>

        {/* Background */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Background</h3>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Backdoor attacks are a stealthy and hard-to-detect threat to instruction-tuned LLMs: models behave normally on benign inputs but produce malicious outputs when hidden triggers appear. Existing defenses either try to detect poisoned samples or directly modify model parameters, but most assume prior knowledge of triggers, access to a clean reference model, or rely on fragile internal signals (e.g., attention patterns). These assumptions are often unrealistic in real deployments, and prior insights from classification models (e.g., attention- or early-layer localization) do not transfer well to instruction-tuned generative LLMs, whose backdoor behaviors are distributed and harder to isolate.
          </p>
        </div>
      </div>
    </section>
  );
}