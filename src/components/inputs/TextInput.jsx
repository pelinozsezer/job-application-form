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
  icon,
}) => {
  return (
    <div className="relative w-full group">
      {label && (
        <label
          htmlFor={name}
          className="absolute rounded-full left-4 -top-2.5 bg-[#F5F5FF] group-focus-within:bg-white px-1 text-sm text-gray-700 z-10 "
        >
          {label}
        </label>
      )}

      {/* Input + Icon container */}
      <div className="mt-3 relative">
        <div className="flex items-center border border-gray-300 bg-[#F5F5FF] group-focus-within:bg-white rounded-full px-5 py-3 shadow-sm transition">
          {/* Icon */}
          {icon && <img src={icon} alt="" className="w-5 h-5 mr-3 shrink-0" />}

          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            pattern={pattern}
            className="w-full bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default TextInput;
