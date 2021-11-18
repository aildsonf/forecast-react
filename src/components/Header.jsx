import React from "react";

export default function Header({ children }) {
  return (
    <h1 className="flex justify-between items-center text-5xl text-white font-semibold">
      {children}
    </h1>
  );
}
