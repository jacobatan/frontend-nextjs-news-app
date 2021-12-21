import React from "react";

const Header = ({ category }) => {
  return (
    <header className="border-b-2 pb-12 ">
      <h1 className="text-5xl font-bold pb-4">{category}</h1>
      <p>latest news on {category}</p>
    </header>
  );
};

export default Header;
