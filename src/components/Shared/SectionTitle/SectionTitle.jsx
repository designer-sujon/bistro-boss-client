import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-3/12 mx-auto mb-10">
      <p className="text-center text-yellow-500 mb-2">---{subHeading}---</p>
      <h3 className="text-center text-4xl uppercase border-y-2 py-2">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
