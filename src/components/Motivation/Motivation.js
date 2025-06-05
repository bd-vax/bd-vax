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
            Although existing alignment methods like SFT, DPO, and RLHF are widely used to ensure the safety of large language models (LLMs), recent research reveals that these approaches are often superficial. Aligned models may appear safe initially but still respond to adversarial prompts, subtle fine-tuning adjustments, or decoding manipulation with harmful content. These methods often fail to maintain safety across the entire generation process, especially in complex scenarios where harmful content appears in the middle or end of a response.
          </p>
        </div>

        {/* Background */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Background</h3>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Prior studies have suggested that safety alignment can be interpreted as an implicit binary classification task. However, safety-related signals are frequently diluted by other objectives like human preferences for style and tone, leading to model confusion under adversarial pressure. Inspired by BERT, our work introduces an explicit safety classification task using a [CLS] token, combined with strategic attention and decoding strategies. This design enables more robust safety alignment by reinforcing clear decision boundaries and re-evaluating safety dynamically throughout generation, ensuring better defense against a wide range of adversarial attacks.
          </p>
        </div>
      </div>
    </section>
  );
}