import React from "react";

const features = ["Free", "Customizable", "Minimalism", "Fast", "Simple"];

const Features = () => {
  return (
    <div className="mt-8">
      <div className="flex flex-wrap justify-center gap-6">
        {features.map((feature, index) => (
          <h1
            key={index}
            className="bg-gray-100 p-3 px-6 border rounded-2xl cursor-pointer 
                       transition transform hover:scale-110 hover:shadow-lg hover:shadow-blue-600"
          >
            {feature}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Features;
