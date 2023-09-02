import React from "react";
import './check-thumb.css';

function CheckThumb({ id, name, isChecked, onChange }) {
  return (
    <label className="check-thumb" htmlFor={id} >
      <input type="checkbox" checked={isChecked} id={id} name={name} onChange={onChange} />
      <div className="check-thumb__switch" />
    </label>

  );
}
export default CheckThumb;
