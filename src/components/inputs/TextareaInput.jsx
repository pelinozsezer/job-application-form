import React from "react";

const TextareaInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  maxLength = 100,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="relative w-full mb-4">
      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className="absolute -top-0 left-5 bg-white px-1 text-sm font-medium text-gray-700 z-10"
        >
          {label}
        </label>
      )}

      {/* Textarea */}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        rows={1}
        className="mt-3 w-full bg-gray-50 border border-gray-300 rounded-full px-5 py-3 pr-20 shadow-sm text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
      />

      {/* Sayaç */}
      <div className="absolute bottom-2 right-5 text-xs text-gray-400">
        {value.length}/{maxLength}
      </div>
    </div>
  );
};

export default TextareaInput;
