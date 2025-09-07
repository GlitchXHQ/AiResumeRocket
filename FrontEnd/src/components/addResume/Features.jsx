import React from "react";

const features = ["Free", "Customizable", "Minimalism", "Fast", "Simple"];

const Features = () => {
  return (
    <div className="mt-8">
      <div
        className="
          flex flex-wrap justify-center gap-6
          md:gap-8 lg:gap-10
        "
      >
        {features.map((feature, index) => (
          <h1
            key={index}
            className="
              bg-gray-100 border rounded-2xl cursor-pointer
              transition transform hover:scale-110 hover:shadow-lg hover:shadow-blue-600
              text-sm sm:text-base md:text-lg lg:text-xl 
              p-2 sm:p-3 md:p-4 lg:p-5
              w-full sm:w-auto text-center
            "
          >
            {feature}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Features;
