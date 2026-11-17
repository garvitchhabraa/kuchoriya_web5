import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { Reveal, SectionHeading } from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const SERVICE_OPTIONS = [
  "AI Development",
  "Mobile App Development",
  "Web & Software Development",
  "Blockchain / On-Demand",
  "E-commerce Development",
  "Staff Augmentation",
  "CTO Services",
  "Digital Transformation",
  "Other",
];

const inputCls =
  "w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors duration-300";

export const ContactSection = ({ prefill }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (prefill?.type) {
      const map = {
        "Mobile App": "Mobile App Development",
        "Web & Software": "Web & Software Development",
        "AI Solution": "AI Development",
        "Blockchain / On-Demand": "Blockchain / On-Demand",
      };
      setForm((f) => ({
        ...f,
        service: map[prefill.type] || prefill.type,
        budget: prefill.budget || f.budget,
      }));
    }
  }, [prefill]);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      const { data } = await axios.post(`${API}/consultations`, form);
      toast.success(data.message || "Request received — we'll reply within one business day.");
      setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(
        typeof detail === "string"
          ? detail
          : "Something went wrong. Please email info@kuchoriyatechsoft.com directly."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-[#0D0D10] border-t border-zinc-800/80"
      data-testid="contact-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-14">
        <div>
          <SectionHeading
            eyebrow="Get Started"
            title={
              <>
                Book Your <span className="text-[#F97316]">Free Discovery Call</span>
              </>
            }
            intro={
              <>
                Tell us where you're headed. We'll reply within one business day with <span className="text-[#F97316]">honest, expert guidance</span> — no pushy sales scripts, ever.
              </>
            }
          />
          <div className="mt-10 space-y-5">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "info@kuchoriyatechsoft.com",
                href: "mailto:info@kuchoriyatechsoft.com",
                tid: "contact-email-link",
              },
              {
                icon: Phone,
                label: "Call / WhatsApp",
                value: "+1 (650) 488-7911 · +91-8003156735",
                href: "tel:+16504887911",
                tid: "contact-phone-link",
              },
              {
                icon: MapPin,
                label: "Headquarters",
                value: "1100 Caven St, Suite PH11, Mississauga, ON L5G 4N3, Canada",
                tid: "contact-address",
              },
            ].map((c) => (
              <Reveal key={c.label} delay={0.05}>
                <div className="flex items-start gap-4">
                  <span className="grid place-items-center w-10 h-10 rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-300 shrink-0">
                    <c.icon className="w-4 h-4" />
                  </span>
                  <span>
                    <span className="block font-mono2 text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                      {c.label}
                    </span>
                    {c.href ? (
                      <a
                        data-testid={c.tid}
                        href={c.href}
                        className="block text-sm text-white mt-1.5 hover:text-zinc-300 transition-colors"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <span
                        data-testid={c.tid}
                        className="block text-sm text-white mt-1.5"
                      >
                        {c.value}
                      </span>
                    )}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={submit}
            data-testid="consultation-form"
            className="rounded-2xl border border-zinc-200/90 bg-[#FFFFFF] shadow-lg p-6 lg:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                data-testid="contact-form-name-input"
                className={inputCls}
                placeholder="Full Name *"
                value={form.name}
                onChange={set("name")}
                required
                minLength={2}
              />
              <input
                data-testid="contact-form-email-input"
                className={inputCls}
                type="email"
                placeholder="Business Email *"
                value={form.email}
                onChange={set("email")}
                required
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                data-testid="contact-form-phone-input"
                className={inputCls}
                placeholder="Phone / WhatsApp"
                value={form.phone}
                onChange={set("phone")}
              />
              <select
                data-testid="contact-form-service-select"
                className={`${inputCls} appearance-none ${form.service ? "text-zinc-900" : "text-zinc-400"}`}
                value={form.service}
                onChange={set("service")}
              >
                <option value="" disabled>
                  Service Needed
                </option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s} className="bg-white text-zinc-900">
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <select
              data-testid="contact-form-budget-select"
              className={`${inputCls} appearance-none ${form.budget ? "text-zinc-900" : "text-zinc-400"}`}
              value={form.budget}
              onChange={set("budget")}
            >
              <option value="" disabled>
                Estimated Budget
              </option>
              {["Under $10,000", "$10,000–$25,000", "$25,000–$50,000", "$50,000+", "Not sure yet"].map(
                (b) => (
                  <option key={b} value={b} className="bg-white text-zinc-900">
                    {b}
                  </option>
                )
              )}
            </select>
            <textarea
              data-testid="contact-form-message-textarea"
              className={`${inputCls} min-h-[120px] resize-y`}
              placeholder="Project overview — what are you building, and what does success look like? *"
              value={form.message}
              onChange={set("message")}
              required
              minLength={10}
            />
            <button
              data-testid="contact-form-submit-button"
              type="submit"
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2.5 bg-zinc-900 text-white text-sm font-semibold px-7 py-4 rounded-full hover:bg-zinc-800 transition-all duration-300 disabled:opacity-60"
            >
              {sending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )}
              {sending ? "Sending…" : "Get My Free Consultation"}
            </button>
            <p className="text-center font-mono2 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Response within 1 business day · NDA on request
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
