import React from "react";

const TextInput = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  required = false,
  pattern,
}) => {
  return (
    <div className="relative w-full">
      {/* Sol üstte bindirilmiş label */}
      {label && (
        <label
          htmlFor={name}
          className="absolute -top-0 left-5 bg-white px-1 text-sm font-medium text-gray-700 z-10"
        >
          {label}
        </label>
      )}

      {/* Oval input alanı */}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        className="mt-3 w-full px-5 py-3 border border-gray-300 rounded-full bg-gray-50 text-gray-800 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
      />
    </div>
  );
};

export default TextInput;
