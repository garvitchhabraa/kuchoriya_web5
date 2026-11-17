import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, RotateCcw, Calculator } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { scrollToId } from "@/lib/scroll";

const QUESTIONS = [
  {
    key: "type",
    q: "What are you building?",
    options: ["Mobile App", "Web & Software", "AI Solution", "Blockchain / On-Demand"],
  },
  {
    key: "timeline",
    q: "When do you want to launch?",
    options: ["1–3 Months", "3–6 Months", "Flexible / Exploring"],
  },
  {
    key: "budget",
    q: "What's your budget range?",
    options: ["Under $10,000", "$10,000–$25,000", "$25,000–$50,000", "$50,000+"],
  },
];

export const Estimator = ({ onEstimate }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const done = step >= QUESTIONS.length;
  const current = QUESTIONS[step];

  const pick = (value) => {
    const next = { ...answers, [current.key]: value };
    setAnswers(next);
    setStep(step + 1);
    if (step + 1 >= QUESTIONS.length) onEstimate(next);
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
    onEstimate(null);
  };

  return (
    <section id="estimator" className="py-20 lg:py-32" data-testid="estimator-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="rounded-3xl border border-zinc-200/90 bg-[#FFFFFF] shadow-lg p-8 lg:p-14">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Project Estimator"
                title={
                  <>
                    Scope Your Project in <span className="text-[#F97316]">30 Seconds</span>
                  </>
                }
                intro={
                  <>
                    Three quick questions. <span className="text-[#F97316]">Instant guidance</span> on the right engagement — then book a free discovery call to pressure-test it with our strategists.
                  </>
                }
                className="[&_h2]:text-zinc-900 [&_p]:text-zinc-600 [&_.font-mono2]:text-zinc-500"
              />
              <Reveal delay={0.2}>
                <div className="mt-8 flex items-center gap-3 font-mono2 text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-medium">
                  <Calculator className="w-4 h-4 text-zinc-700" />
                  No email required
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 lg:p-8 min-h-[280px] shadow-sm"
                data-testid="estimator-panel"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                    {done ? "Result" : `Step ${step + 1} / ${QUESTIONS.length}`}
                  </span>
                  <div className="flex gap-1.5">
                    {QUESTIONS.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1 w-8 rounded-full transition-colors duration-300 ${
                          done || i < step ? "bg-zinc-900" : "bg-zinc-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {!done ? (
                    <motion.div
                      key={current.key}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.35 }}
                    >
                      <h3 className="font-display text-xl font-semibold text-zinc-900">
                        {current.q}
                      </h3>
                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {current.options.map((opt) => (
                          <button
                            key={opt}
                            data-testid={`estimator-option-${opt.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                            onClick={() => pick(opt)}
                            className="text-left text-sm text-zinc-800 bg-[#FFFFFF] border border-zinc-200 rounded-xl px-4 py-3.5 hover:border-zinc-900 hover:text-zinc-900 shadow-sm transition-all duration-300"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <span className="grid place-items-center w-10 h-10 rounded-full bg-zinc-900 text-white mb-5">
                        <Check className="w-5 h-5" />
                      </span>
                      <h3 className="font-display text-xl font-semibold text-zinc-900">
                        Recommended: Dedicated Agile Team
                      </h3>
                      <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                        A {answers.type?.toLowerCase()} with a{" "}
                        {answers.timeline?.toLowerCase()} timeline fits our
                        dedicated team model at a {answers.budget?.toLowerCase()}{" "}
                        budget. Let's validate scope on a free discovery call.
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <button
                          data-testid="estimator-submit-button"
                          onClick={() => {
                            scrollToId("contact");
                          }}
                          className="inline-flex items-center gap-2 bg-[#FB771F] hover:bg-[#e66a17] text-white text-sm font-semibold px-6 py-3 rounded-full shadow-sm transition-colors"
                        >
                          Book the Free Call
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <button
                          data-testid="estimator-restart-button"
                          onClick={reset}
                          className="inline-flex items-center gap-2 border border-zinc-300 text-zinc-700 hover:border-zinc-900 hover:text-zinc-950 text-sm px-6 py-3 rounded-full transition-colors"
                        >
                          <RotateCcw className="w-4 h-4" />
                          Restart
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estimator;
