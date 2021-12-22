import React, { useEffect, useState } from "react";

const MainCard = ({ title, description, creator, imgURL, keywords, link }) => {
  const [altImg, setAltImg] = useState("null");

  useEffect(() => {
    const fetchMyAPI = async () => {
      let res = await fetch("https://dog.ceo/api/breeds/image/random");
      res = await res.json();
      setAltImg(res);
    };
    fetchMyAPI();
  }, []);

  const newsLink = () => {
    window.open(link, "_blank");
  };

  const imgLink = () => {
    window.open(imgURL, "_blank");
  };

  return (
    <div className="max-w-4xl flex cursor-pointer py-10 first:pt-0 border-b ">
      {/* TEXT SECTION */}
      <div onClick={() => newsLink()} className="pr-4">
        {/* author */}
        <div className="text-sm font-medium pb-2">
          {creator === null ? "anonymous" : creator}
        </div>

        {/* title */}
        <div className="text-2xl font-bold text-gray-800">{title}</div>

        {/* description */}
        <div className="text-gray-600">
          {description?.length > 350
            ? description.slice(0, 350) + "..."
            : description}
        </div>

        {/* buttons/category */}
        <div className="text-gray-600 text-sm pt-2 flex flex-wrap">
          {keywords?.map((keyword, index) => (
            <p className="px-1 pb-2" key={index}>
              · {keyword.replace(",More", "").replace(",Cities", "")}
            </p>
          ))}
        </div>
      </div>

      {/* PICTURE SECTION */}
      <div className="flex items-center pl-4" onClick={() => imgLink()}>
        <div className="relative w-40 h-40 flex items-center">
          {imgURL !== null ? (
            <img src={imgURL} alt="" width="160" height="160" />
          ) : (
            <img src={altImg.message} alt="" width="160" height="80" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainCard;
