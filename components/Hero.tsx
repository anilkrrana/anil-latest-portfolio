import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

// const imgURl =
//   "https://cdn.hashnode.com/res/hashnode/image/upload/v1671209654236/2TRB5sdiZ.png?w=500&h=500&fit=crop&crop=faces&auto=compress";

type Props = { src: string };
export default function Hero({ src }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hey, Anil Rana here.",
      "I build things for the web.",
      "I create content for community.",
      "I learn new things everyday.",
    ],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="pt-16 md:pt-28 h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <Image
        className="relative w-aut0 h-auto rounded-full mx-auto object-cover"
        src="/profile pic.jpeg"
        alt=""
        width={132}
        height={122}
      />

      <div className="z-20">
        <h2 className="text-sm text-gray-400 uppercase tracking-[8px] md:tracking-[15px] pb-2 font-outfit">
          Front-End Developer
        </h2>
        <h1 className="pt-2 text-3xl md:text-4xl lg:text-6xl font-semibold px-16">
          <span className="mr-3 font-outfit">{text}</span>
          <Cursor cursorColor="#aaaaaa" />
        </h1>

        <div className="pt-4 lg:pt-4 font-outfit">
          <Link href="#about">
            <button className="heroButton bg-slate-500/20 backdrop-blur-sm">
              about
            </button>
          </Link>
          <Link href={"#experience"}>
            <button className="heroButton bg-slate-500/20 backdrop-blur-sm">
              experience
            </button>
          </Link>
          <Link href={"#skills"}>
            <button className="heroButton bg-slate-500/20 backdrop-blur-sm">
              skills
            </button>
          </Link>
          <Link href={"#projects"}>
            <button className="heroButton bg-slate-500/20 backdrop-blur-sm">
              projects
            </button>
          </Link>
          <Link href="https://drive.google.com/file/d/1L39SAAJwNvq0U8yQutH8Uq3c3UfD5cqb/view?usp=sharing">
            <button className="heroButton bg-slate-500/20 backdrop-blur-sm">
              resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
