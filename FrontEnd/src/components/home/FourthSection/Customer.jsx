import React, { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    name: "Sophia Johnson",
    position: "Software Engineer",
    review:
      "This AI Resume Builder helped me to land my dream job at a top tech company. The suggestions were spot-on!",
  },
  {
    id: 2,
    name: "Michael Lee",
    position: "Marketing Specialist",
    review:
      "I was struggling with resume formatting, but this tool made it professional and ATS-friendly. It really boosted my confidence.",
  },
  {
    id: 3,
    name: "Emily Davis",
    position: "Data Analyst",
    review:
      "The AI Resume Builder guided me step by step and helped me highlight the right skills. It helped me to land my dream job!",
  },
  {
    id: 4,
    name: "David Brown",
    position: "Project Manager",
    review:
      "Super easy to use and very effective. My recruiter even complimented my resume. Totally worth it!",
  },
  {
    id: 5,
    name: "Olivia Martinez",
    position: "UI/UX Designer",
    review:
      "I loved how it customized my resume for different roles. This tool helped me to land my dream job in design!",
  },
];

const Customer = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 3000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto mt-17">

        <div className="flex flex-col items-center text-[30px]">
            <h1>Check Out What Our Customer Say</h1>
            <h1 className="font-bold">About Us</h1>
        </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {reviews.map((r) => (
            <div
              key={r.id}
              className="w-full flex-shrink-0 px-6 py-8 bg-white rounded-2xl shadow-md text-center"
            >
              <p className="text-lg italic">"{r.review}"</p>
              <h3 className="mt-4 font-semibold text-xl">{r.name}</h3>
              <p className="text-gray-500">{r.position}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Customer;
