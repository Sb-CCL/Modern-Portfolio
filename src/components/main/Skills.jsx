const skillsData = {
  technicalSkills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Next.js",
    "Tailwind CSS",
    "Git",
    "REST APIs",
    "Bootstrap",
    "SASS",
    "Responsive Development",
    "JSON Web Tokens (JWT)",
    "Vercel",
    "ShadCN UI",
    "ServiceNow",
    "Oracle PeopleSoft ERP",
    "Salesforce",
    "Hyland onBase",
    "Data Processing and Cleaning",
    "Advanced Troubleshooting Techniques",
    "Data Integrity and System Stability",
    "Data Sanitization",
    "Data Optimization",
    "Web-based Tool Development",
    "Knowledge Base Management",
    "Internal Documentation Development",
    "Enterprise Software System Maintenance",
  ],
  professionalSkills: [
    "Analytical Thinking",
    "Stakeholder Management",
    "Time Management",
    "Adaptability",
    "Data Analysis",
    "Customer Service",
    "Communication",
    "Team Leadership",
    "Problem Solving",
    "Technical Documentation",
    "Administrative Support",
    "Cross-Functional Collaboration",
    "Process Improvement",
    "Agile Methodologies",
    "Quality Assurance",
    "Leadership",
    "Intercultural Fluency",
    "Multitasking",
    "Innovation",
    "Operational Efficiency",
    "Continuous Improvement",
    "Team Collaboration",
  ],
};

const Skills = () => {
  return (
    <>
      <div>
        {/* Container for skills section */}
        <div className="flex flex-col gap-4">
          {/* Main heading: Focusable for keyboard navigation */}
          <h1 tabIndex="0" className="text-2xl">
            Skills
          </h1>
          {/* Technical Skills Section */}
          <h2 className="text-lg" id="technical-skills">
            Technical Skills
          </h2>

          {/* List of technical skills with accessible focus styles */}
          <div
            className="flex flex-wrap gap-2"
            aria-labelledby="technical-skills" // Associates the skills with the heading for screen readers
          >
            {skillsData.technicalSkills?.map((skill, index) => (
              <span
                key={index}
                className="inline-block rounded-sm text-left px-3 py-1 text-sm bg-muted-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 cursor-default hover:bg-muted-foreground/20"
                aria-label={`Technical skill: ${skill}`} // Descriptive label for screen readers
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Professional Skills Section */}
          <h2 className="text-lg" id="professional-skills">
            Professional Skills
          </h2>

          {/* List of professional skills with accessible focus styles */}
          <div
            className="flex flex-wrap gap-2"
            aria-labelledby="professional-skills" // Associates the skills with the heading for screen readers
          >
            {skillsData.professionalSkills?.map((skill, index) => (
              <span
                key={index}
                className="inline-block rounded-sm text-left px-3 py-1 text-sm bg-muted-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 cursor-default hover:bg-muted-foreground/20"
                aria-label={`Professional skill: ${skill}`} // Descriptive label for screen readers
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
