import React from "react";

const Experiment = () => {
  return (
    <section className="bg-white text-gray-900 py-12 px-4 md:px-16">
      <div className="max-w-4xl mx-auto text-left space-y-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Experiment Results</h2> 
        <p>
          We evaluate our approach using <strong>Llama2-7B</strong> as the base model and <strong>Mistral-7B-Instruct-v0.2</strong> as the aligned model. Baselines include: (1) models fine-tuned with SFT and SFT+DPO, (2) official RLHF-aligned releases, (3) state-of-the-art models using augmented datasets, and (4) a cross-family comparison with Llama2-7B-Chat. Our method significantly outperforms all baselines in safety performance: (1) reduces ASR from 93% to under 1% in several jailbreak settings, (2) competes with or surpasses models fine-tuned with DPO or RLHF, (3) beats state-of-the-art augmented models, and (4) upgrades Mistral-7B-Instruct to exceed Llama2-7B-Chat in safety.
        </p>
        <img src="/figures/experiments1.jpg" alt="Experiment Results 1" className="rounded-lg shadow-md w-full" />
        <img src="/figures/experiments2.jpg" alt="Experiment Results 2" className="rounded-lg shadow-md w-full" />
        <p>
          These results align with the Superficial Safety Alignment Hypothesis and confirm that explicit safety signals substantially improve model robustness.
        </p>
      </div>
    </section>
  );
};

export default Experiment;
