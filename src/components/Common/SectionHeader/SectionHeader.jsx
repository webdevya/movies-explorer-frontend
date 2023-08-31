import React from "react";
import './section-header.css';

function SectionHeader({ text }) {
  return (
    <h2 className="section-header">{text}</h2>
  );
}
export default SectionHeader;
