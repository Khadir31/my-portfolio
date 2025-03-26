"use client"; // Required for using state/hooks in Next.js pages

import { title } from "@/components/primitives";
import React from "react"; // Correctly import React
import ProjectCard from "../cards/ProjectCard"; // Ensure this path is correct

const ProjectDetails = [
  {
    name: "Semak Kata Kesat",
    date: "Jun 2024",
    description: "A web application to detect profanity word in Malay language.",
    githubUrl: "https://github.com/hkaiman/kata-kesat-frontend",
    image: "/img/semak-kata-kesat.png", // ✅ Fixed: Replaced JSX with an image URL
    tech: ["Next.js", "Hono.js", "React", "ShadcnUI", "Upstash", "Tailwind"],
    siteUrl: "https://semak-kata-kesat.vercel.app/",
  },
  {
    name: "Diskusi",
    date: "February 2024",
    description: "A Reddit clone web application created using Next.js.",
    githubUrl: "https://github.com/hkaiman/diskusi",
    image: "/img/diskusi.png",
    tech: ["Next.js", "React", "ShadcnUI", "Upstash", "Prisma", "MySQL"],
    siteUrl: "https://diskusi.vercel.app/",
  },
  {
    name: "DK Car Auto",
    date: "February 2024",
    description: "A simple landing page for car dealer company.",
    image: "/img/dkcarauto.png",
    tech: ["React"],
    siteUrl: "https://dkautocar.com/",
  },
  {
    name: "Personal Portfolio",
    date: "March 2025",
    description: "A personal portfolio site created using Next.js and Notion.",
    githubUrl: "https://github.com/Khadir31/my-portfolio",
    image: "/img/portfolio.png",
    tech: ["Next.js", "NextUI", "Framer Motion", "Notion"],
  },
  {
    name: "Household Management System",
    date: "June 2023 - December 2023",
    description:
      "A mobile application developed to help households manage and streamline chores while fostering community engagement among members.",
    githubUrl: "https://github.com/hkaiman/household_management_system_public",
    image: "/img/household.png",
    tech: ["Flutter", "Firebase"],
  },
];

const Projects = () => {
  return (
    <section className="text-center justify-center">
      <div className="items-center inline-block max-w-lg text-center justify-center mb-10">
        <h2 className={title()}>Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
        {ProjectDetails.map((project, index) => (
          <div key={index} className="col-span-1 md:col-span-2">
            <ProjectCard
              name={project.name}
              date={project.date}
              description={project.description}
              githubUrl={project.githubUrl}
              siteUrl={project.siteUrl}
              image={project.image}
              techs={project.tech}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
