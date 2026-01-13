import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Hardware / VLSI
  { name: "Digital Logic Design", level: 85, category: "hardware" },
  { name: "CMOS VLSI Basics", level: 80, category: "hardware" },
  { name: "ASIC Design (Basics)", level: 70, category: "hardware" },
  { name: "FPGA/RTL Fundamentals", level: 75, category: "hardware" },

  // Verification
  { name: "RTL Verification (Basics)", level: 70, category: "verification" },
  { name: "SystemVerilog (Basics)", level: 65, category: "verification" },
  { name: "SVA Assertions (Basics)", level: 55, category: "verification" },

  // EDA tools
  { name: "Cadence Virtuoso", level: 75, category: "eda tools" },
  { name: "ModelSim", level: 70, category: "eda tools" },
  { name: "Vivado", level: 70, category: "eda tools" },
  { name: "LTSpice", level: 70, category: "eda tools" },

  // Programming
  { name: "C", level: 80, category: "programming" },
  { name: "C++", level: 75, category: "programming" },
  { name: "Python", level: 80, category: "programming" },
  { name: "Bash", level: 65, category: "programming" },
  { name: "Git", level: 70, category: "programming" },
];

const categories = ["all", "hardware", "verification", "eda tools", "programming"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <h3 className="font-semibold text-lg mb-4">{skill.name}</h3>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
