// AbstractSection.js
import React from 'react';

export default function AbstractSection() {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-left space-y-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Abstract</h2> 
        <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
          Backdoor attacks pose severe security threats to large language models (LLMs), where a model behaves normally under benign inputs but produces malicious outputs when a hidden trigger appears. Existing backdoor removal methods typically assume prior knowledge of triggers, access to a clean reference model, or rely on aggressive finetuning configurations, and are often limited to classification tasks. However, such assumptions fall apart in real-world generative LLM settings. In this work, we propose a new framework for purifying generative LLM without any prior trigger knowledge or clean references. Through systematic sanity checks, we find that backdoor associations are redundantly encoded across MLP layers, while attention modules primarily amplify trigger signals without establishing the behavior. Leveraging this insight, we shift the focus from isolating specific backdoor triggers to cutting off the trigger–behavior associations, and design an immunization-inspired elimination approach: by constructing multiple synthetic backdoored variants of the given suspicious model, each trained with different malicious trigger–behavior pairs, and contrasting them with their clean counterparts. The recurring modifications across variants reveal a shared "backdoor signature"—analogous to antigens in a virus. Guided by this signature, we neutralize highly suspicious components in LLM and apply lightweight finetuning to restore its fluency, producing purified models that withstand diverse backdoor attacks and threat models while preserving generative capability.
        </p>
      </div>
    </section>
  );
}
