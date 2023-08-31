import React from "react";
import './section-header.css';

function SectionHeader({ text, isSpecial = false }) {
  return (
    <h2 className={`section-header ${isSpecial && 'section-header_is-special'}`}>{text}</h2>
  );
}
export default SectionHeader;
