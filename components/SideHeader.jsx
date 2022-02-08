import React from "react";
import { useRouter } from "next/router";

const SideHeader = ({ topics }) => {
  const router = useRouter();
  return (
    <div className="md:flex flex-col z-50 max-w-full sm:hidden">
      <p className="text-3xl font-bold sticky pb-3">topics</p>

      <div className="flex text-center sticky max-w-full flex-wrap">
        {topics.map((topic, index) => (
          <button
            className="sideBtn"
            onClick={() => router.push(`/${topic}`)}
            key={index}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideHeader;
