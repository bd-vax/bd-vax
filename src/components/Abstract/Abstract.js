// AbstractSection.js
import React from 'react';

export default function AbstractSection() {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-left space-y-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Abstract</h2> 
        <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
          Recent studies on the safety alignment of large language models (LLMs) have revealed that existing approaches often operate superficially, leaving models vulnerable to various adversarial attacks. Despite their significance, these studies generally fail to offer actionable solutions beyond data augmentation for achieving more robust safety mechanisms. This paper identifies a fundamental cause of this superficiality: existing alignment approaches often presume that models can implicitly learn a safety-related reasoning task during the alignment process, enabling them to refuse harmful requests. However, the learned safety signals are often diluted by other competing objectives, leading models to struggle with drawing a firm safety-conscious decision boundary when confronted with adversarial attacks. Based on this observation, by explicitly introducing a safety-related binary classification task and integrating its signals with our attention and decoding strategies, we eliminate this ambiguity and allow models to respond more responsibly to malicious queries. We emphasize that, with less than 0.2x overhead cost, our approach enables LLMs to assess the safety of both the query and the previously generated tokens at each necessary generating step. Extensive experiments demonstrate that our method significantly improves the resilience of LLMs against various adversarial attacks, offering a promising pathway toward more robust generative AI systems.
        </p>
      </div>
    </section>
  );
}
