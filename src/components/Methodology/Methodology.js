import React from "react";

const Methodology = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-left space-y-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Methodology</h2> 
        {/* Section 1: Binary Classification */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">1. Binary Classification Task - Explicit Safety Signals</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Inspired by BERT, we introduce a dedicated <code>[CLS]</code> token to each input, enabling the model to classify whether the input and its current generation trajectory are benign or malicious. This classification task runs alongside the language modeling objective but is isolated via a tailored attention mechanism and controlled loss weighting. These design choices ensure the model maintains generative performance while extracting explicit safety signals. 
          </p>
          <img src="/figures/classification_task.jpg" alt="Binary Classification Task" className="rounded-lg shadow-md w-full" />
        </div>

        {/* Section 2: Strategic Attention */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">2. Strategic Attention Design - Implicit Leverage</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            We allow the <code>[CLS]</code> token to dynamically re-attend to query and response tokens during generation. This enables the model to continuously assess safety without breaking causal attention. Our design includes three adaptive rules depending on whether the input is benign, malicious, or transitions mid-generation. These rules allow nuanced safety tracking across complex prompt structures.
          </p>
          <img src="/figures/strategic_attention.jpg" alt="Strategic Attention" className="rounded-lg shadow-md w-full" />
        </div>

        {/* Section 3: Strategic Decoding */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">3. Strategic Decoding Strategy - Explicit Leverage</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            To strengthen controllability, we explicitly use the <code>[CLS]</code> prediction to modify the decoding process. When malicious intent is detected (either initially or during generation), our strategy inserts a refusal prefix with a chain-of-thought justification. This balances false positive risk with interpretability and ensures prompt safety-aware shifts in response generation.
          </p>
          <img src="/figures/strategic_decoding.jpg" alt="Strategic Decoding" className="rounded-lg shadow-md w-full" />
        </div>
      </div>
    </section>
  );
};

export default Methodology;
