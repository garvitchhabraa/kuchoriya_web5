import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Discovery & Requirement Analysis",
    desc: "We dig into your goals, users, and constraints — then define a roadmap with clear success metrics.",
  },
  {
    n: "02",
    title: "Wireframing & UI/UX Design",
    desc: "Wireframes become engaging, user-friendly interfaces crafted by expert designers for retention.",
  },
  {
    n: "03",
    title: "Agile Development & Coding",
    desc: "Iterative sprints with regular demos — you see working progress every single week.",
  },
  {
    n: "04",
    title: "QA & Security Testing",
    desc: "Rigorous quality assurance, data encryption, and vulnerability audits protect your product and users.",
  },
  {
    n: "05",
    title: "Deployment & Launch",
    desc: "App store submission, cloud release, and a launch that's uneventful in the best possible way.",
  },
  {
    n: "06",
    title: "Maintenance & Growth",
    desc: "Post-launch support keeps your app secure, updated, and performing at its peak — for the long run.",
  },
];

export const Process = () => (
  <section id="process" className="py-20 lg:py-32" data-testid="process-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      <SectionHeading
        eyebrow="How We Work"
        title={
          <>
            A Proven <span className="text-[#F97316]">Delivery Framework</span>, Refined Since 2009
          </>
        }
        intro={
          <>
            Requirement analysis to post-launch support — one accountable team, <span className="text-[#F97316]">full transparency</span> at every step.
          </>
        }
      />
      <div className="mt-16 relative">
        <div className="absolute left-[19px] lg:left-1/2 top-0 bottom-0 w-px bg-zinc-800 lg:-translate-x-1/2" />
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[19px] lg:left-1/2 top-0 bottom-0 w-px bg-white origin-top lg:-translate-x-1/2"
        />
        <div className="space-y-12">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={0.05 * i}>
              <div
                className={`relative flex lg:items-center gap-6 lg:gap-0 ${
                  i % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <div className="hidden lg:block lg:w-1/2" />
                <span className="absolute left-[19px] lg:left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white ring-4 ring-[#0A0A0C]" />
                <div
                  className={`lg:w-1/2 pl-12 lg:pl-0 ${
                    i % 2 === 0 ? "lg:pr-14 lg:text-right" : "lg:pl-14"
                  }`}
                >
                  <p className="font-mono2 text-xs text-[#F97316] font-semibold tracking-[0.25em]">
                    {s.n}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-white mt-2 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mt-2 max-w-md inline-block">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Process;
