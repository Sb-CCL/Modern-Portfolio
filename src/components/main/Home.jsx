import React from "react";
import { Card } from "../ui/card";
import Intro from "./Intro";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";
import Meteors from "../magicui/meteors";
import Projects from "./Projects";
import ScrollToTopButton from "@/hooks/scroll-to-top-button";

const Home = () => {
  return (
    <Card className="relative rounded-lg border text-card-foreground border-[#d8dde6] dark:border-[#272727] bg-background dark:bg-[#191919] py-8 px-4 my-5 lg:my-8 mx-auto max-w-screen-xl w-11/12 lg:py-7 lg:px-12 overflow-hidden">
      <ScrollToTopButton />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ">
        <Intro />
        <Meteors />
        <Skills />
        <WorkExperience />
        <Projects />
      </main>
    </Card>
  );
};

export default Home;
