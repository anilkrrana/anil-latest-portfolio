import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{
        once: true,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pt-16 lg:pt-28"
    >
      <h3 className="ml-6 absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        viewport={{
          once: true,
        }}
        src="/linkedin.jpg"
        className="-mb-32 md:mb-0 md:ml-16 flex-shrink-0 w-40 h-40 rounded-xl object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[350px] xl:h-[450px]"
      />

      <div className="px-0 md:px-20">
        <h4 className="text-3xl md:text-4xl font-semibold mt-8 lg:mt-2 font-outfit lg:ml-6 md:ml-6">
          $: /whoami
        </h4>
        <p className="text-sm md:text-base lg:text-lg lg:mt-4 font-light px-4 md:px-7 pt-3 font-outfit">
          Welcome to my digital abode! <br />
          <br /> I am a{" "}
          <span className="text-blue-500 font-semibold">
            front-end developer
          </span>{" "}
          I am having an experience of building high-performing, responsive,
          beautiful web applications.
          <br />
          I enjoy turning complex problems into simple, beautiful and intuitive
          designs. A Software Engineer, who loves to solve problems.
          <br />I am a well-trained a teammate who loves to share ideas and
          prioritizes communication in order to achieve goals within the set
          deadlines. I enjoy being challenged and working on projects that
          require me to step outside of my comfort zone.
          <br />
          <span className="text-blue-500 font-semibold">Thank You</span>
        </p>
      </div>
    </motion.div>
  );
}

