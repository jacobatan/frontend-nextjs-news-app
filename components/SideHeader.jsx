import React from "react";
import { useRouter } from "next/router";

const SideHeader = ({ topics }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col z-50 max-w-full">
      <p className="text-3xl font-bold sticky pb-3">topics</p>

      <div className="flex text-center sticky max-w-full flex-wrap">
        {topics.map((topic) => (
          <button
            className="sideBtn"
            onClick={() => router.push(`/topics/${topic}`)}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideHeader;
