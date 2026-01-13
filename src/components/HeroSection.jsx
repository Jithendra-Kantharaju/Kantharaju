import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <p className="text-sm md:text-base text-muted-foreground tracking-wide uppercase">
        
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Hi, I&apos;m{" "}
          <span className="text-primary">
            Jithendra{" "}
          </span>
          Kantharaju
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          I am an M.S. Computer Engineering student focused on{" "}
          <b>VLSI/ASIC design</b>, <b>hardware verification</b>, and <b>VLSI testing</b>.
          I&apos;m applying for PhD opportunities and interested in scalable verification,
          fault tolerance, and automation for EDA workflows.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#research" className="cosmic-button">
            Research Interests
          </a>

          <a
            href="#contact"
            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
          >
            Get In Touch
          </a>

          <a
            href="docs/Jithendra_Kantharaju_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full border border-border text-foreground hover:bg-secondary/40 transition-colors duration-300"
          >
            View Resume
          </a>
        </div>

        <div className="flex flex-col items-center pt-10 space-y-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Scroll
          </span>
          <ArrowDown className="h-5 w-5 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
