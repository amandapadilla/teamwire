import React from "react";
import "../stylesheets/App.css";

const Header = () => {
  return (
    <div className="header">
      <img
        src="./images/Elf.png"
        alt="My christmas wishlist"
        className="logo"
      />
      <h1 className="title">Christmas Wishlist</h1>
    </div>
  );
};

export default Header;
