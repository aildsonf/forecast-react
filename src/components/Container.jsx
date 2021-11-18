import React from "react";

export default function Container({ children }) {
  return (
    <div className="flex flex-col md:max-w-lg mx-auto py-8 px-4 lg:px-0">
      {children}
    </div>
  );
}
