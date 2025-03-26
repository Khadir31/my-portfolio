"use client";

import { title } from "@/components/primitives";
import React from "@/components/icons/React";
import { Col } from "react-bootstrap";
import ProjectCard from "../cards/ProjectCard";

const ProjectDetails = [
  {
    name: "FYP - Paday Garage Management System",
    date: "Jun 2024",
    description: "**Paday Garage Management System** is a web-based platform designed to combat counterfeit car parts by providing a trusted marketplace for **Paday Garage** to sell original spare parts. Built using **Java, HTML, CSS, and JavaScript**, the system ensures customers can easily purchase genuine parts and book service appointments at the garage. It enhances user experience with a secure, efficient, and user-friendly interface, streamlining both product sales and service scheduling. 🚗💻",
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
  // {
  //   name: "Mockup Cinema Booking System",
  //   date: "September 2022 - October 2022",
  //   description:
  //     "A cinema booking system designed to enable users to seamlessly reserve movie tickets and administrators to efficiently manage ticket operations.",
  //   githubUrl: "https://github.com/hkaiman/cinema-booking-system",
  //   image: "/img/syne.png",
  //   tech: ["Java SE", "Servlet", "JavaScript"],
  // },
  // {
  //   name: "Mockup School Management System",
  //   date: "September 2022 - October 2022",
  //   description:
  //     "A school management system tailored for streamlined student registration and effective teacher management.",
  //   githubUrl: "https://github.com/hkaiman/school_management_system",
  //   image: "/img/school.png",
  //   tech: ["Java SE", "Servlet", "JavaScript", "ChartJS"],
  // },
  // {
  //   name: "Gaming Store System",
  //   date: "September 2021",
  //   description:
  //     "A gaming store system which enable user to buy games and make payment.",
  //   githubUrl: "https://github.com/hkaiman/gaming-store-system",
  //   image: "/img/gx.png",
  //   tech: ["Java Swing", "Netbeans GUI"],
  // },
];

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
