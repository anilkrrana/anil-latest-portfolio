import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import OrderFlowShowcase from "@/components/OrderFlowShowcase";
import EngineeringMindset from "@/components/EngineeringMindset";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import TeachingMentorship from "@/components/TeachingMentorship";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import Contact from "@/components/Contact";

export default function Home({ data }: any) {
  const title = "Anil Kumar Rana | Senior Software Engineer | Java Backend Developer";
  const description =
    "Portfolio of Anil Kumar Rana — Senior Software Engineer at Capgemini with 2+ years experience building scalable backend systems, Spring Boot microservices, REST APIs, PostgreSQL, Redis caching, and MuleSoft enterprise integrations.";
  const url = "https://anil-latest-portfolio.vercel.app/";

  return (
    <div id="mainBody" className="dark:bg-[#09090b] bg-[#f8fafc] dark:text-neutral-100 text-slate-900 min-h-screen selection:bg-blue-600 selection:text-white transition-colors duration-300">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />

        {/* OpenGraph Metadata */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Anil Kumar Rana Portfolio" />

        {/* Twitter Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@anilkrana_" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      {/* 1. Command Center Navbar with Dark/Light Toggle */}
      <Header />

      {/* 2. Hero Section (Clean right panel, NO scribble/circle decoration) */}
      <section id="hero">
        <Hero />
      </section>

      {/* 3. Narrative & Stats */}
      <section id="about">
        <About />
      </section>

      {/* 4. Timeline & Work Experience */}
      <section id="experience">
        <Experience />
      </section>

      {/* 5. Flagship Section — OrderFlow Showcase & Simulator */}
      <section id="orderflow">
        <OrderFlowShowcase />
      </section>

      {/* 6. System Design Pillars */}
      <section id="engineering">
        <EngineeringMindset />
      </section>

      {/* 7. Skills & Tech Constellation (Smooth Category Scrolling) */}
      <section id="skills">
        <Skills />
      </section>

      {/* 8. Preserved Projects Showcase */}
      <section id="projects">
        <Projects data={data?.data || []} />
      </section>

      {/* 9. Teaching & Mentorship + YouTube WebTechNil */}
      <section id="teaching">
        <TeachingMentorship />
      </section>

      {/* 10. Currently Building & Learning */}
      <section id="learning">
        <CurrentlyLearning />
      </section>

      {/* 11. Contact & Minimal Footer */}
      <Contact />
    </div>
  );
}

export async function getStaticProps() {
  const fs = require("fs/promises");
  const path = require("path");
  const filePath = path.join(process.cwd(), "data", "data.json");

  try {
    const fileData = await fs.readFile(filePath, "utf-8");
    const parsedData = JSON.parse(fileData);

    return {
      props: {
        data: parsedData.data,
      },
    };
  } catch (error) {
    console.error("Error reading data.json:", error);
    return {
      props: {
        data: { data: [] },
      },
    };
  }
}
