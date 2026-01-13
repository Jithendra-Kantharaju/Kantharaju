import { Briefcase, GraduationCap } from "lucide-react";

// Work experience from resume / profile
const workExperience = [
  {
    title: "Associate DevOps Engineer",
    company: "Corezeal Technologies",
    date: "Aug 2023 – Dec 2024",
    description:
      "Designed and automated CI/CD pipelines with Jenkins, Maven, Nexus, and SonarQube; provisioned AWS infrastructure with Terraform and Ansible; and deployed Dockerized microservices to Kubernetes (EKS) using GitOps workflows, achieving faster uptime and release cycles.",
  },
  {
    title: "IoT Intern",
    company: "Agimus Technologies Pvt Ltd.",
    date: "Sep 2021 – Oct 2021",
    description:
      "Built an ESP32-based IoT device to monitor COVID-19 patient vitals, streaming sensor data to Google Sheets and triggering Twilio SMS alerts when readings exceeded safe thresholds, enabling contactless, real-time health monitoring.",
  },
];

// Education from resume / profile
const education = [
  {
    degree: "Master of Science in Computer Engineering",
    institution: "University of South Florida, USA",
    date: "Jan 2025 – Dec 2026",
    description:
      "Graduate coursework and projects focused on cloud infrastructure, DevOps practices, distributed systems, and automation, complementing professional experience in CI/CD and Kubernetes.",
  },
  {
    degree: "Bachelor of Engineering in Electronics and Communication Engineering",
    institution: "Siddaganga Institute of Technology, India",
    date: "Dec 2020 – Aug 2023",
    description:
      "Developed strong foundations in systems engineering, communication networks, and problem-solving, forming the base for transitioning into DevOps and cloud engineering.",
  },
];

export const JourneySection = () => {
  return (
    <section id="journey" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Journey</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 shadow-xs card-hover"
                >
                  <p className="text-xs font-medium text-primary mb-1">{edu.date}</p>
                  <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 shadow-xs card-hover"
                >
                  <p className="text-xs font-medium text-primary mb-1">{job.date}</p>
                  <h4 className="font-semibold text-lg mb-1">{job.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{job.company}</p>
                  <p className="text-sm text-muted-foreground">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
