import React from "react";

const TextareaInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  maxLength = 100,
  icon,
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
          className="absolute rounded-full -top-2.5 left-5 bg-[#F5F5FF] px-1 text-sm font-medium text-gray-700 z-10"
        >
          {label}
        </label>
      )}

      <div className="mt-3 flex items-center border border-gray-300 bg-[#F5F5FF] focus-within:bg-white rounded-full px-4 py-3 shadow-sm">
        {/* Icon */}
        {icon && (
          <img
            src={icon}
            alt=""
            className="w-5 h-5 mr-3 shrink-0 self-center"
          />
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
          className="w-full bg-transparent text-sm leading-tight text-gray-700 placeholder-gray-400 focus:outline-none resize-none"
        />
      </div>

      {/* Counter */}
      <div className="absolute bottom-2 right-5 text-xs text-gray-400">
        {value.length}/{maxLength}
      </div>
    </div>
  );
};

export default TextareaInput;
