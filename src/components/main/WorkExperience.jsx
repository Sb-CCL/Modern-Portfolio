const workExperienceData = [
  {
    startDate: "June 2023",
    endDate: "Present",
    companyName: "ES Operations",
    jobTitle: "Integration Specialist",
    description: [
      "Responsibilities include processing and cleaning data, supporting mission-critical systems such as enterprise administrative software, as well as providing support to other teams and departments.",
    ],
    responsibilities: [
      "Supported mission-critical enrollment systems for 27,000+ users, ensuring 99.9% uptime for staff workflows.",
      "Partnered with cross-functional teams to resolve data discrepancies, reducing duplicate user accounts by 50%",
      "Developed 20+ technical documentation guides, improving staff onboarding efficiency by 35% and reducing training time for new hires.",
      "Maintained secure student/staff records in alignment with FERPA and state regulations, mitigating institutional risk.",
      "Optimized data processes by identifying and processing over 4,000 entries, reducing redundancies and increasing system efficiency.",
      "Processed and sanitized complex data from diverse channels, enhancing data integrity and reducing database errors.",
    ],
  },
  {
    startDate: "January 2018",
    endDate: "July 2022",
    companyName: "Systems & Imaging",
    jobTitle: "Business Analyst",
    description: [
      "Responsibilities included supporting enterprise software systems, facilitating talks with technical teams, triaging support requests, resolving data discrepancies, troubleshooting software issues, communicating with end-users via Salesforce CRM, and participating in testing and validation.",
    ],
    responsibilities: [
      "Resolved 50+ monthly system issues via Salesforce cases with 95% first-call resolution, saving 120+ annual support hours.",
      "Collaborated with IT teams to address recurring system issues, decreasing ticket escalations cby 20% through improved documentation and training.",
      "Authored 60+ knowledge base articles using internal tools, cutting interdepartmental training time by 25%.",
      "Ensured software reliability by conducting thorough testing across production environments, reducing post-deployment issues.",
      "Managed multiple projects simultaneously, consistently delivering on schedule and demonstrating exceptional multitasking abilities.",
    ],
  },
  {
    startDate: "October 2015",
    endDate: "January 2018",
    companyName: "Chief Information Officer Operations	",
    jobTitle: "Systems Specialist",
    description: [
      "Offered technical support to all levels of interdepartmental faculty, staff, and students via ServiceNow CRM, troubleshot issues, processed service requests, maintained knowledge base articles, and ensured appropriate follow-through.",
    ],
    responsibilities: [
      "Resolved 30+ daily Tier 1/Tier 2 incidents for 60,000+ users, maintaining 90% customer satisfaction via troubleshooting and clear communication.",
      "Reduced repeat tickets by 40% by creating 15+ reusable knowledge base articles for common macOS/Windows OS, hardware, and software issues.",
      "Demonstrated adept task management in high-pressure, fast-paced environments, consistently achieving a high-resolution rate.",
      "Enhanced intercultural fluency in interactions with customers, contributing to an increase in customer satisfaction.",
      "Developed and maintained internal documentation for enterprise software systems, improving team knowledge sharing.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        {/* Main heading: Focusable for keyboard navigation */}
        <h1 tabIndex="0" className="text-2xl font-normal">
          Work Experience
        </h1>

        {/* Ordered list for timeline items with proper border color for light/dark themes */}
        <ol
          className="relative border-s border-gray-200 dark:border-[#3a3a3a]"
          aria-label="Work Experience Timeline"
        >
          {workExperienceData?.map((item, index) => (
            <li key={index} className="text-base mb-10 ms-4">
              {/* Circular indicator for timeline */}
              <div
                className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-[#3a3a3a]"
                aria-hidden="true" // Hidden from screen readers, purely decorative
              ></div>

              {/* Time period of the job */}
              <time
                className="mb-1 text-sm leading-none text-gray-400 dark:text-[#888888]"
                aria-label={`From ${item.startDate} to ${item.endDate}`}
              >
                {item.startDate} - {item.endDate}
              </time>

              {/* Job title and company name */}
              <h3
                className="text-lg font-medium"
                aria-label={`Job title: ${item.jobTitle}, at ${item.companyName}`}
              >
                {item.jobTitle} | {item.companyName}
              </h3>

              {/* Job description */}
              <p
                className="mb-2"
                aria-label={`Job description: ${item.description}`}
              >
                {item.description}
              </p>

              {/* List of job responsibilities */}
              <ul className="list-disc ml-4" aria-label="Job responsibilities">
                {item.responsibilities.map((responsibility, index) => (
                  <li className="mb-1" key={index}>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default WorkExperience;
