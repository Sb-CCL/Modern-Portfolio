"use client";
import WordRotate from "../magicui/word-rotate";
import { ModeToggle } from "../ModeToggle";

const Intro = () => {
  return (
    <section className="flex gap-4" aria-labelledby="intro-heading">
      <div className="flex flex-col gap-4">
        {/* Invisible heading for screen readers to identify the section */}
        <h1 id="intro-heading" className="sr-only">
          Welcome to my professional profile
        </h1>

        {/* Rotating word section */}
        <div
          className="flex justify-between text-4xl tracking-tighter"
          aria-live="polite" // Announces changes dynamically for screen reader users
          aria-atomic="true" // Ensures screen readers announce updates as a whole
          role="status" // Indicates the content here is dynamic and important
        >
          <WordRotate
            className="text-4xl font-bold"
            tabIndex="0" // Focusable for keyboard users
            words={[
              "Hello.",
              "こんにちは.",
              "Buongiorno.",
              "Buenos Días.",
              "Bonjour.",
              "안녕하세요.",
            ]}
            aria-label="Greeting in multiple languages" // Descriptive label for the rotating words
          />

          {/* Light/Dark Mode Toggle button */}
          <ModeToggle
            aria-label="Toggle between light and dark mode" // Descriptive label for the toggle button
            tabIndex={0} // Focusable for keyboard users
            role="button" // Role button to ensure it's announced as an interactive element
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                // Ensures keyboard accessibility (Space/Enter)
                e.preventDefault();
                e.target.click(); // Triggers the toggle on key press
              }
            }}
            aria-pressed="false" // Aria-pressed indicates whether the button is pressed (light/dark mode state)
          />
        </div>

        {/* Descriptive paragraph */}
        <p className="text-base text-gray-700 dark:text-white ">
          Results-driven professional tansitioning from 8+ years of enterprise
          business and systems analysis experience. Skilled in bridging
          technical and business needs to build user-centric solutions with
          modern tools like React, Node.js, and RESTful APIs. Multilingual
          communicator with a strong background in cross-cultural collaboration,
          honed through diverse professional and community engagements. Combines
          analytical rigor, adaptability, and a passion for leveraging
          technology to solve complex problems and create inclusive digital
          experiences.
        </p>
      </div>
    </section>
  );
};

export default Intro;
