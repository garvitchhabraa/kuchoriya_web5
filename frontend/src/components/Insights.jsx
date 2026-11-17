import { ArrowUpRight, Clock } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { scrollToId } from "@/lib/scroll";

const POSTS = [
  {
    tag: "App Development Cost",
    title: "How Much Does Custom Mobile App Development Cost?",
    summary:
      "App development cost varies based on features and complexity, platforms — iOS, Android, or both — and the design and integrations required. We break down exactly where the budget goes, and how to scope a version-one build that ships fast without surprises.",
    read: "6 min read",
    featured: true,
  },
  {
    tag: "Mobile Engineering",
    title: "Native vs Cross-Platform: iOS, Android, React Native & Flutter",
    summary:
      "High-performance native iOS and Android apps or cross-platform builds that maximize reach and ROI — a decision framework based on audience, budget, and time to market.",
    read: "5 min read",
  },
  {
    tag: "AI & Automation",
    title: "What Is Generative AI Development? A Practical Guide for Business Leaders",
    summary:
      "From intelligent automation to predictive analytics and chatbot integration — what custom AI solutions actually do for operations, and how to start with one high-impact use case.",
    read: "7 min read",
  },
];

export const Insights = () => (
  <section id="insights" className="py-20 lg:py-32" data-testid="insights-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <SectionHeading
          eyebrow="Insights"
          title={
            <>
              <span className="text-[#F97316]">Straight Answers</span> from the Engineering Floor
            </>
          }
          intro="No fluff, no gated PDFs — practical breakdowns of cost, platforms, and AI, written by the team that ships the products."
        />
      </div>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {POSTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className={p.featured ? "lg:col-span-2" : ""}>
            <article
              data-testid={`insights-card-${i + 1}`}
              className={`group relative h-full rounded-2xl border border-zinc-200/90 bg-[#FFFFFF] shadow-sm p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                p.featured ? "lg:p-10" : ""
              }`}
            >
              <span className="absolute top-6 right-6 lg:top-8 lg:right-8 font-mono2 text-[11px] text-zinc-400 font-semibold">
                0{i + 1}
              </span>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#F97316] bg-[#F97316]/10 border border-[#F97316]/25 rounded-full px-3 py-1 font-semibold">
                  {p.tag}
                </span>
                <span className="flex items-center gap-1.5 font-mono2 text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                  <Clock className="w-3 h-3" />
                  {p.read}
                </span>
              </div>
              <h3
                className={`font-display font-semibold tracking-tight text-zinc-900 leading-snug ${
                  p.featured ? "text-2xl lg:text-3xl max-w-2xl" : "text-xl"
                }`}
              >
                {p.title}
              </h3>
              <p
                className={`mt-4 text-sm text-zinc-600 leading-relaxed ${
                  p.featured ? "max-w-2xl" : ""
                }`}
              >
                {p.summary}
              </p>
              {p.featured && (
                <p className="mt-6 font-mono2 text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-medium">
                  By Kuchoriya TechSoft — Engineering Editorial Team
                </p>
              )}
              <ArrowUpRight className="absolute bottom-6 right-6 w-5 h-5 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl border border-zinc-200/90 bg-[#FFFFFF] shadow-sm px-6 lg:px-10 py-7">
          <p className="text-sm text-zinc-700 font-medium text-center sm:text-left">
            Have a question none of these cover? Get a straight answer on a
            free call — no sales script.
          </p>
          <button
            data-testid="insights-cta"
            onClick={() => scrollToId("contact")}
            className="shrink-0 inline-flex items-center gap-2 bg-zinc-900 text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-zinc-800 transition-colors duration-300"
          >
            Book a Free Discovery Call
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Insights;
