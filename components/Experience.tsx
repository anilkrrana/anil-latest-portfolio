import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl pl-6">
        Experience
      </h3>

      <div className="w-full mt-20 flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-transparent scrollbar-thin xl:space-x-14 ">
        <ExperienceCard
          clogo="/companyLogo/simplbyte-logo.png"
          title="Web developer and Design intern"
          company="at, Simplebyte"
          point1="Contributed to the development of UI and components using Next.js for  applications across various industries."
          point2="Implemented interactive features using React and optimize data display and enhance user engagement."
          startDate="March, 2023"
          endDate="April, 2023"
        />
        <ExperienceCard
          clogo="/companyLogo/lhc.jpeg"
          title="Frontend Developer Intern"
          company="SDE Camp"
          point1="Implemented interactive features using React and optimize data display and enhance user engagement."
          point2="Contributed to the development of UI and components using Next.js for their Landing Page"
          startDate="July, 2023"
          endDate="July 2023"
        />
        {/* <ExperienceCard
          clogo="/companyLogo/lhc.jpeg"
          title="Virtual Apprentenship"
          company="ZenSar"
          point1="Tained in Industry level skills by Zensar's proffessionals "
          point2="Learned about the industry requirments and "
          startDate="August, 2021"
          endDate="December 2021"
        /> */}
      </div>
    </motion.div>
  );
}

