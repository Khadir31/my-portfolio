"use client";

import { Link } from "@nextui-org/link";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { TypingCodeSnippet } from "@/components/typing-snippet";
import { Avatar } from "@nextui-org/avatar";
import { motion } from "framer-motion";
import { DocumentIcon, EmailIcon } from "@/components/icons";

const About = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center px-8 py-20 bg-black text-white rounded-2xl shadow-lg border border-gray-800">
      
      {/* Left Content - Text & Button */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl font-extrabold text-white leading-tight"
        >
          Abdul Khadir
        </motion.h1>


        <p className="mt-4 text-gray-400 text-lg leading-relaxed"> 
          🚀 Hi, I’m <strong>Abdul Khadir</strong>, a <strong>Software Engineer</strong> from Kedah,
           Malaysia, and a proud graduate of <strong>Universiti Malaysia Terengganu</strong>.
            <br /><br /> Previously an intern at <strong>Fulkrum Interactive</strong>, 
            where I gained hands-on experience in full-stack development using Laravel and React, 
            API design, testing, and agile practices. <br /><br /> 
            I’m now working at <strong>Capgemini</strong> as a Software Engineer, 
            currently serving at the client site as a <strong>Software Tester</strong>, 
            ensuring software quality and reliability. <br /><br /> 
            Passionate about <strong>web development, backend systems,
           and building meaningful digital experiences</strong>. <br /><br />
            💡 Open to <strong>collaborations & opportunities</strong>. 
            
        Let’s connect! </p>


        {/* CTA Button */}
  <motion.div 
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    className="mt-6"
  >
      <Link 
    href={siteConfig.links.resume} 
    className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-black bg-green-500 rounded-full shadow-md hover:bg-green-600 transition-all"
  >
    <DocumentIcon className="w-6 h-6 text-black" />
    Resume ➜
  </Link>

  </motion.div>


  <motion.div 
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    className="mt-6"
  >
      <Link 
    href={siteConfig.links.email} 
    className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 transition-all"
  >
    <EmailIcon className="w-6 h-6 text-white" />
    Email ➜
  </Link>

  </motion.div>


        {/* Worked With Section
        <p className="mt-8 text-gray-500 text-sm uppercase tracking-wider">
          Worked with
        </p> */}

        {/* <div className="flex gap-4 mt-4">
          <div className="px-6 py-3 bg-gray-900 rounded-lg text-gray-400 text-sm shadow">
            ClickUp
          </div>
          <div className="px-6 py-3 bg-gray-900 rounded-lg text-gray-400 text-sm shadow">
            Dropbox
          </div>
          <div className="px-6 py-3 bg-gray-900 rounded-lg text-gray-400 text-sm shadow">
            Paychex
          </div>
          <div className="px-6 py-3 bg-gray-900 rounded-lg text-gray-400 text-sm shadow">
            Elastic
          </div>
          <div className="px-6 py-3 bg-gray-900 rounded-lg text-gray-400 text-sm shadow">
            Stripe
          </div>
        </div> */}
      </div>

      {/* Right Side - Profile Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2 flex justify-center mt-10 lg:mt-0"
      >
        <Avatar
          src="/img/cp_convo.jpg"
          className="w-56 h-56 border-4 border-gray-700 shadow-lg rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default About;
