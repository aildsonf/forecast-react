import React from "react";

export default function Divider({ color = "white" }) {
  return <hr className="w-full" style={{ borderColor: color }} />;
}
