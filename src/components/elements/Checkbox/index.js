// src/components/CustomCheckbox.js
import React from "react";
import "./Checkbox.css"; // File CSS để tùy chỉnh nếu cần

const Checkbox = ({ id, name, value, label, checked, onChange }) => {
  return (
    <div className="custom-checkbox">
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} style={{ textAlign: "start" }}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
