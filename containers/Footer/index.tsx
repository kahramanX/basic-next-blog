"use client";
import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-black text-white p-6 text-center">
      <div>
        <p> &copy; {new Date().getFullYear()} </p>
      </div>
    </footer>
  );
}

export default Footer;
