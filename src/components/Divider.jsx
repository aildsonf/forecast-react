import React from "react";
import "./Divider.css";

export default function Divider({ color = "white" }) {
  return <hr className="divider" style={{ borderColor: color }} />;
}
