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
      "CSS",
      "JavaScript",
      "HTML",
    ],
  },
  {
    name: "React Quiz",
    date: "August 2024",
    description: "A React Question app created using React.js.",
    githubUrl: "https://github.com/Khadir31/ReactQuiz",
    image: <React width={50} height={50} />,
    tech: [      
      "React",    ],
    siteUrl: "https://react-quiz-xi-three.vercel.app/",
  },
  {
    name: "Jokes Generator",
    date: "January 2025",
    description: "A simple page that display some Programming jokes.",
    githubUrl: "https://github.com/Khadir31/JokeGenerator",
    image: <React width={50} height={50} />,
    tech: [
      "React",
    ],
    siteUrl: "https://joke-generator-delta-blush.vercel.app/",
  },
  {
    name: "Personal Portfolio",
    date: "March 2025",
    description: "A personal portfolio site created using Next.js and Notion.",
    githubUrl: "https://github.com/Khadir31/my-portfolio",
    image: <React width={50} height={50} />,
    tech: ["Next.js", "NextUI", "Framer Motion", "Notion"],
  },
  // {
  //   name: "Household Management System",
  //   date: "June 2023 - December 2023",
  //   description:
  //     "A mobile application developed to help households manage and streamline chores while fostering community engagement among members.",
  //   githubUrl: "https://github.com/hkaiman/household_management_system_public",
  //   image: "/img/household.png",
  //   tech: ["Flutter", "Firebase"],
  // },
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
