import { Link } from "react-router-dom";
import { Button, buttonVariants } from "../ui/button";

const projectData = [
  {
    title: "Ticketing Management System.",
    description: [
      "Fullstack application that allows users to register, authenticate, create, and manage tickets efficiently.",
    ],
    previewVideo: ["exposome-insights-preview.mp4"],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Bcrypt",
      "JSON Web Tokens",
    ],
    link: [""],
    code: [""],
  },
  {
    title: "Portfolio.",
    description: [
      "Frontend web application designed to showcase expertise and technologies used throughout career.",
    ],
    previewVideo: ["modern-portfolio-preview.mp4"],
    technologies: [
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "ShadCN UI",
      "JavaScript",
      "HTML",
      "Vercel",
      "Responsive Design",
    ],
    link: ["https://sb-modern-portfolio.vercel.app/"],
    code: ["https://github.com/Sb-CCL/Modern-Portfolio"],
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Accessible heading for screen readers and keyboard navigation */}
      <h1 className="text-2xl">Technical Projects</h1>

      {/* Grid layout to display the projects responsively */}
      <div className="grid w-full grid-cols-1 gap-4">
        {projectData.map((project, index) => (
          <div
            className="flex-1 max-w-full rounded-lg mb-4 border text-card-foreground border-[#d8dde6] dark:border-[#272727] bg-background  dark:bg-[#191919]"
            key={index}
            aria-labelledby={`project-title-${index}`} // Assigning a unique label for each project
          >
            {/* Embedded video with fallback accessibility text */}
            <video
              src={project.previewVideo}
              loop
              autoPlay
              muted
              className="rounded-t-lg"
              type="video/mp4"
              aria-label={`${project.title} preview video`} // Accessible label for video
            >
              {/* Provide alternative text for users who cannot view videos */}
              Your browser does not support the video tag.
            </video>

            {/* Project details container */}
            <div className="p-4 space-y-2.5">
              {/* Project title as an accessible heading */}
              <h2
                id={`project-title-${index}`}
                className="text-lg font-medium"
                aria-label={`Project title: ${project.title}`}
              >
                {project.title}
              </h2>

              {/* Technologies used with hover and focus accessibility */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="inline-block rounded-sm text-left px-3 py-1 text-sm bg-muted-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 cursor-default hover:bg-muted-foreground/20"
                    aria-label={`Technology used: ${tech}`}
                  >
                    {tech}
                  </div>
                ))}
              </div>

              {/* Project description */}
              <div className="min-h-12">
                {project.description.map((description, index) => (
                  <p
                    key={index}
                    aria-label={`Project description: ${description}`}
                  >
                    {description}
                  </p>
                ))}
              </div>

              {/* Links for viewing project and code, with appropriate ARIA labels */}
              <div className="flex flex-row mt-4 gap-2">
                {project.link.map((link, index) => (
                  <Link
                    className={buttonVariants({
                      size: "sm",
                      variant: "default",
                    })}
                    key={index}
                    to={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View project: ${project.title}`}
                  >
                    View
                  </Link>
                ))}
                {project.code.map((codeLink, index) => (
                  <Link
                    className={buttonVariants({
                      size: "sm",
                      variant: "outline",
                      className: "bg-transparent",
                    })}
                    key={index}
                    to={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View code on GitHub for project: ${project.title}`}
                  >
                    Code
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
