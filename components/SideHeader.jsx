import React from "react";

const SideHeader = ({ topics }) => {
  return (
    <div className="flex flex-col z-50 max-w-full">
      <p className="text-3xl font-bold sticky pb-3">Topics</p>

      <div className="flex text-center sticky max-w-full flex-wrap">
        {topics.map((topic) => (
          <button className="sideBtn">{topic}</button>
        ))}
      </div>
    </div>
  );
};

export default SideHeader;
