import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const FAQS = [
  {
    q: "How much does custom software and AI development cost?",
    a: "Custom software development typically ranges from $10,000 to $25,000 for initial MVPs and from $25,000 to $100,000+ for complex enterprise platforms with custom AI models, high-volume transactional pipelines, and multi-tier cloud architectures. Costs are governed by platform targets, architectural depth, security compliance, and third-party integrations. We provide detailed, itemized proposals with zero hidden fees following an initial discovery workshop.",
  },
  {
    q: "How long does it take to develop a custom mobile app or web platform?",
    a: "A standard commercial MVP typically requires 10 to 14 weeks from technical discovery to initial production deployment. Large-scale enterprise platforms or advanced generative AI integrations typically span 4 to 6 months divided into structured two-week agile release sprints with continuous milestone demonstrations.",
  },
  {
    q: "How do you guarantee the security and privacy of proprietary data in AI solutions?",
    a: "We deploy private, isolated LLM tenant environments (utilizing AWS Bedrock, Azure OpenAI, or GCP Vertex AI) with explicit zero-data-retention agreements. Your proprietary enterprise data is never used to train public foundation models, and all data transmission is secured with end-to-end TLS 1.3 encryption and AES-256 encryption at rest.",
  },
  {
    q: "Does our company own 100% of the source code and intellectual property?",
    a: "Yes, 100%. Under our master services agreement, all developed source code, design assets, database architectures, and intellectual property transfer to your organization upon project milestones, backed by comprehensive mutual non-disclosure agreements (NDAs).",
  },
  {
    q: "Do you specialize in developing apps for iOS, Android, or cross-platform?",
    a: "Our team specializes in building high-performance native iOS (Swift) and Android (Kotlin) apps as well as cross-platform mobile applications using React Native and Flutter to maximize reach, maintain native device fluidity, and reduce total cost of ownership.",
  },
  {
    q: "What is your 6-stage app and software development framework?",
    a: "Our delivery lifecycle includes: (1) Technical Discovery & Architecture Audit, (2) Wireframing & UI/UX Design, (3) Agile Development Sprints with bi-weekly demos, (4) Automated QA & OWASP Security Testing, (5) Zero-Downtime Deployment & App Store Publishing, and (6) Continuous SLA Maintenance & Optimization.",
  },
  {
    q: "Do you provide post-launch maintenance, SLAs, and updates?",
    a: "Yes. We offer structured Service Level Agreements (SLAs) including 24/7 uptime monitoring, critical vulnerability patching, OS upgrade compatibility (iOS/Android updates), and dedicated monthly development hours for continuous feature iterations.",
  },
  {
    q: "Can you augment our existing engineering team with dedicated developers?",
    a: "Yes. We provide vetted senior full-stack developers, AI engineers, and QA specialists who seamlessly integrate into your existing development team, Jira boards, and GitHub repos within 48 to 72 hours under transparent sprint structures.",
  },
];

export const FAQ = () => (
  <section id="faq" className="py-20 lg:py-32" data-testid="faq-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-5 gap-12">
      <div className="lg:col-span-2">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <span className="text-[#F97316]">
              Frequently Asked Questions
            </span>
          }
          intro="Straight answers on engagement, cost, timelines, and security — the same questions every serious buyer asks."
        />
      </div>
      <div className="lg:col-span-3">
        <Accordion.Root type="single" collapsible>
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04} y={16}>
              <Accordion.Item
                value={`faq-${i}`}
                data-testid="faq-accordion-item"
                className="border-b border-[#F97316]/50 hover:border-[#F97316] transition-colors"
              >
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-6 text-left">
                  <span className="font-display text-base lg:text-lg font-medium text-white group-hover:text-zinc-300 transition-colors">
                    {f.q}
                  </span>
                  <span className="grid place-items-center w-8 h-8 shrink-0 rounded-full border border-zinc-800 text-zinc-400 group-hover:border-zinc-500 group-hover:text-white transition-all duration-300">
                    <Plus className="w-4 h-4 group-data-[state=open]:rotate-45 transition-transform duration-300" />
                  </span>
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <p className="pb-6 pr-12 text-sm text-zinc-400 leading-relaxed">
                    {f.a}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            </Reveal>
          ))}
        </Accordion.Root>
      </div>
    </div>
  </section>
);

export default FAQ;
