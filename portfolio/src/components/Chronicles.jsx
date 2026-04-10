// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Chronicles() {
  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Header / Navigation */}
      <nav className="p-6 bg-white shadow-md flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-3xl font-bold text-gray-800">My Chronicles</h1>
        <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold text-xl flex items-center">
          <span className="mr-2">←</span> Back to Home
        </Link>
      </nav>

      {/* Hero Header */}
      <header className="py-16 px-6 text-center bg-gradient-to-r from-blue-500 to-teal-400 text-white">
        <h2 className="text-5xl font-extrabold mb-4">The Journey of Windsurf</h2>
        <p className="text-xl max-w-2xl mx-auto opacity-90">
          A collection of milestones, challenges, and growth from my personal and professional life.
        </p>
      </header>

      <div className="mt-10">
        <VerticalTimeline lineColor="#3b82f6">
          {/* Milestone: Pandemic & Discovery */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "#333", borderTop: "4px solid #3b82f6" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date="2020 - 2021"
            iconStyle={{ background: "#3b82f6", color: "#fff" }}
            icon={<span className="flex items-center justify-center h-full text-xl">🎮</span>}
          >
            <h3 className="text-2xl font-bold">The Pandemic Spark</h3>
            <h4 className="text-blue-500 font-semibold">Chiang Mai, Thailand</h4>
            <p>
              Started exploring game development while staying at home during the pandemic. 
              This was the first time I realized I wanted to build the technologies I was using.
            </p>
          </VerticalTimelineElement>

          {/* Milestone: Education & GED */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2022 - 2023"
            iconStyle={{ background: "#ec4899", color: "#fff" }}
            icon={<span className="flex items-center justify-center h-full text-xl">🎓</span>}
          >
            <h3 className="text-2xl font-bold">Academic Foundation</h3>
            <h4 className="text-pink-500 font-semibold">GED & IELTS</h4>
            <p>
              Completed General Educational Development (GED) and prepared for international studies. 
              Successfully passed the IELTS to pursue a degree in Computer Science.
            </p>
          </VerticalTimelineElement>

          {/* Milestone: University of Wollongong */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sept 2023 - Jan 2024"
            iconStyle={{ background: "#ec4899", color: "#fff" }}
            icon={<span className="flex items-center justify-center h-full text-xl">🏛️</span>}
          >
            <h3 className="text-2xl font-bold">Bachelor of Computer Science</h3>
            <h4 className="text-pink-500 font-semibold">SIM / University of Wollongong</h4>
            <p>
              Enrolled in Game and Mobile Development. Although I had to pause due to financial 
              challenges, this period solidified my commitment to software engineering.
            </p>
          </VerticalTimelineElement>

          {/* Milestone: JSD7 Bootcamp */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2024 - Present"
            iconStyle={{ background: "#10b981", color: "#fff" }}
            icon={<span className="flex items-center justify-center h-full text-xl">💻</span>}
          >
            <h3 className="text-2xl font-bold">Junior Software Developer Bootcamp (JSD7)</h3>
            <h4 className="text-emerald-500 font-semibold">Generation Thailand</h4>
            <p>
              Immersive 3-month bootcamp learning the MERN stack. Transitioned from a curious 
              learner to a professional-ready full-stack developer.
            </p>
          </VerticalTimelineElement>

          {/* Milestone: Future Placeholder */}
          <VerticalTimelineElement
            iconStyle={{ background: "#f59e0b", color: "#fff" }}
            icon={<span className="flex items-center justify-center h-full text-xl">🚀</span>}
          >
            <h3 className="text-2xl font-bold">The Next Chapter</h3>
            <p>Looking for opportunities to contribute to impactful projects and continue growing as a developer.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Chronicles;
