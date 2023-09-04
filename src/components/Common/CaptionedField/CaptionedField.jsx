import React from 'react';
import './captioned-field.css';

function CaptionedField({ caption, id, name, value, errorText, onChange, type = 'text', disabled = false }) {
  return (
    <label className="captioned-field">
      <span className="captioned-field__caption">{caption}</span>
      <input type={type} className={`captioned-field__input ${errorText && errorText.length > 0 && "captioned-field__input_type_error"}`} placeholder={caption} id={id} name={name}
        required={true} onChange={onChange} value={value ? value : ''} disabled={disabled} />
      <span className={`captioned-field__error captioned-field-${id}`}>{errorText && errorText}</span>
    </label>
  );
}
export default CaptionedField;
