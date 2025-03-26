"use client";

import { title } from "@/components/primitives";
import React from "@/components/icons/React";
import { Col } from "react-bootstrap";
import ProjectCard from "../cards/ProjectCard";

const ProjectDetails = [
  {
    name: "FYP - Paday Garage Management System",
    date: "Jun 2024",
    description: "Paday Garage Management System is a web platform built with Java, HTML, CSS, and JavaScript to help Paday Garage sell original spare parts and allow users to book car services. It ensures customers get genuine parts while making service booking easy and efficient. 🚗",
    githubUrl: "https://github.com/Khadir31/FYP---Paday-Garage-Management-System",
    image: "/img/pglogo.png",
    tech: [
      "Java",
      "HTML",
      "JavaScript",
      "CSS",
      
    ],
  },
  {
    name: "Diskusi",
    date: "February 2024",
    description: "A Reddit clone web application created using Next.js.",
    githubUrl: "https://github.com/hkaiman/diskusi",
    image: "/img/diskusi.png",
    tech: [
      "Next.js",
      "React",
      "ShadcnUI",
      "Upstash",
      "Prisma",
      "MySQL",
    ],
    siteUrl: "https://diskusi.vercel.app/",
  },
  {
    name: "DK Car Auto",
    date: "February 2024",
    description: "A simple landing page for car dealer company.",
    image: "/img/dkcarauto.png",
    tech: [
      "React",
    ],
    siteUrl: "https://dkautocar.com/",
  },
  {
    name: "Personal Portfolio",
    date: "March 2025",
    description: "A personal portfolio site created using Next.js and Notion.",
    githubUrl: "https://github.com/Khadir31/my-portfolio",
    image: <React width={50} height={50} />,
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

const Projects = () => {
  return (
    <section className="text-center justify-center">
      <div className="items-center inline-block max-w-lg text-center justify-center mb-10">
        <h2 className={title()}>Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
        {ProjectDetails.map((project, index) => (
          <Col key={index} xs={12} md={4}>
            <ProjectCard
              name={project.name}
              date={project.date}
              description={project.description}
              githubUrl={project.githubUrl}
              siteUrl={project.siteUrl}
              image={project.image}
              techs={project.tech}
            />
          </Col>
        ))}
      </div>
    </section>
  );
};

export default Projects;
