"use client";

import React from "react";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref}>
      <div>
        <div
          ref={ref}
          id="workex-container"
          className="workex-containerpt-20 pb-12"
          style={{ zIndex: 100, position: "relative" }}
        >
          <h3 className="text-white text-center text-3xl font-bold mt-2">
            Work Experience
          </h3>
          <div className="timeline mt-6">
            <div className="timeline-container">
              <div className="timeline-block timeline-block-right">
                <div className="marker"></div>
                <div className="timeline-content">
                  <h3 className="text-sky-500">Data Analyst Intern</h3>
                  <span className="text-white">Codons, Nagpur</span>
                  <p className="text-white mb-3">
                    <em>Aug 2023 - Present</em>
                  </p>
                  <p className="text-gray-400 text-justify">
                    Implemented advanced analytics techniques, achieving an 80%
                    accuracy boost in predicting investment opportunities and
                    future earnings. Proficient in Python, utilized AI
                    frameworks (TensorFlow, PyTorch, Keras, Hugging Face) for
                    precise data processing, realizing a notable 98% accuracy
                    improvement in mutual funds data analysis. Leveraged PowerBI
                    for valuable data-driven insights in strategic
                    decision-making within the mutual funds sector. Demonstrated
                    strong analytical skills, attention to detail, and a
                    commitment to delivering impactful outcomes. Additionally,
                    possess expertise in SQL for comprehensive data management
                    and analysis.
                  </p>
                </div>
              </div>

              <div className="timeline-block timeline-block-left">
                <div className="marker"></div>
                <div className="timeline-content">
                  <h3 className="text-sky-500">Full-Stack Developer Intern</h3>
                  <span className="text-white">
                    Alhansat Solutions, Mumbai(Remote)
                  </span>
                  <p className="text-white mb-3">
                    <em>Sept 2023 - Oct 2023</em>
                  </p>
                  <p className="text-justify text-gray-400">
                    During my internship at Alhansat Solutions, in collaboration
                    with IEEE Bombay Section, I significantly enhanced the
                    DeveloperStar platform. I led the development of a visually
                    captivating frontend using Svelte.js and architected
                    critical backend API endpoints with Servlet.js, elevating
                    the platform's functionality and scalability. Recognized
                    with a formal Letter of Recommendation for my innovative
                    solutions and dedication, this experience solidified my
                    passion for Full Stack Development and deepened my
                    appreciation for emerging technologies.
                  </p>
                </div>
              </div>

              <div className="timeline-block timeline-block-right">
                <div className="marker"></div>
                <div className="timeline-content">
                  <h3 className="text-sky-500">Backend Developer Intern</h3>
                  <span className="text-white">
                    TechnoSpectra EdTech. (UniConnect)
                  </span>
                  <p className="text-white mb-3">
                    <em>Oct 2022 - Jan 2023</em>
                  </p>
                  <p className="text-gray-400 text-justify">
                    Spearheaded the development of a robust Express.js backend
                    and AngularJS frontend for the 108th Indian Science Congress
                    App, ensuring seamless integration and high performance.
                    Leading the implementation of REST APIs and JWT-based user
                    authentication, we enhanced system security by 30%. Thorough
                    API testing with Postman allowed us to identify and resolve
                    over 50 issues, ensuring a smooth user experience.
                    Connecting the backend with MongoDB Atlas Cluster provided
                    reliable and scalable data storage. This comprehensive
                    approach to development and testing resulted in a resilient
                    application ready to serve the needs of the Indian Science
                    Congress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
