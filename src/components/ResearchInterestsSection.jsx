import { CheckCircle2, Cpu, ShieldCheck } from "lucide-react";

const interests = [
  {
    title: "VLSI Testing & DFT",
    icon: CheckCircle2,
    desc: "Fault models, test generation, scan-based testing, and improving coverage for digital designs.",
  },
  {
    title: "Hardware Verification",
    icon: Cpu,
    desc: "RTL verification fundamentals, assertions, and verification-driven flows for correctness and productivity.",
  },
  {
    title: "Hardware Security",
    icon: ShieldCheck,
    desc: "Trust, Trojan detection, and security-aware verification/testing methodologies.",
  },
];

export const ResearchInterestsSection = () => {
  return (
    <section id="research" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Research <span className="text-primary"> Interests</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          I’m interested in research at the intersection of reliable digital systems, verification,
          and test. I enjoy building automation and tooling that improves productivity and quality
          in hardware design flows.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {interests.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="gradient-border p-5 card-hover bg-card rounded-lg shadow-xs"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchInterestsSection;
