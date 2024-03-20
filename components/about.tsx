"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-18 max-w-[95rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      suppressHydrationWarning
    >
      <SectionHeading>About me</SectionHeading>
      <div
        id="about-section"
        className="about-section-container flex gap-5 justify-between  py-20"
        style={{ zIndex: 100, position: "relative" }}
      >
        <div className="text-start">
          <p
            className="greetings text-white font-bold text-3xl"
            style={{ margin: "1rem 5rem" }}
            suppressHydrationWarning
          >
            Hi, I'm Lokesh Vazirani <span className="wave">👋🏻</span>
          </p>
          <p
            className="introduction-para text-white"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
            suppressHydrationWarning
          >
            Based in Nagpur, I'm a results-driven
            <span className="text-sky-500"> Software Developer & Data Analyst</span> pursuing
            <span className="text-sky-500">
              {" "}
              B.Tech degree in Information Technology from G H Raisoni College of Engineering, Nagpur.
            </span>{" "}
            My professional journey revolves around transforming problems into
            impactful Solutions, raw Data to impactful insights, and I'm particularly passionate about
            <span className="text-sky-500">
              {" "}
              Software Development, Data Science, & Generative AI.
            </span>
          </p>
          <p
            className="text-white introduction-para"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
            suppressHydrationWarning
          >
            Proficient in{" "}
            <span className="text-sky-500">
              Java, Python, C++ & JavaScript.
            </span>
            Worked on frameworks like <span className="text-sky-500">Spring, Node.js, Django, Flutter, Android</span>
            , I bring a creative touch using{" "}
            <span className="text-sky-500">NextJS</span> for visual
            appeal. Navigating key Python libraries such as{" "}
            <span className="text-sky-500">Numpy and Pandas,</span> I craft
            intelligent solutions with tools like
            <span className="text-sky-500">
              {" "}
              Scikit-Learn, Tensorflow and Streamlit.{" "}
            </span>
            Beyond coding, I view data as an infinite canvas for innovation, and
            my future is a thrilling horizon of AI possibilities. Committed to
            continuous improvement,
            <span className="text-sky-500">
              {" "}
              I hold Experience in emerging technologies{" "}
            </span>
            and actively participate in Workshops & Hackathons to stay ahead of industry
            trends.
          </p>
        </div>
        <img
          src="https://ik.imagekit.io/lokesh790/1665981480114_lKwbZT2sO.jpg?updatedAt=1710936184929"
          alt="saumya-gupta-img"
          className=" text-white img-saumya"
          style={{
            margin: "0rem 5rem 1rem 1rem",
            borderRadius: "50%",
            width: "90%",
            height: "20rem",
            position: "relative",
            objectFit: "cover",
          }}
        />
      </div>
    </motion.section>
  );
}
