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
      {/* Floating label */}
      {label && (
        <label
          htmlFor={name}
          className="absolute rounded-full left-4 -top-0 bg-[#F5F5FF] dark:bg-[#1e1e2f]
            group-focus-within:bg-white dark:group-focus-within:bg-[#dbd1fd]
            group-focus-within:dark:text-black px-1 text-sm font-medium
            text-gray-700 dark:text-gray-100 z-10"
        >
          {label}
        </label>
      )}

      {/* Input container with optional icon */}
      <div className="mt-3 relative">
        <div
          className="flex items-center border border-gray-300 dark:border-gray-600
            bg-[#F5F5FF] dark:bg-[#1e1e2f]
            group-focus-within:bg-white dark:group-focus-within:bg-[#dbd1fd]
            rounded-full px-5 py-3 shadow-sm transition-colors duration-200"
        >
          {/* Optional icon */}
          {icon && (
            <img
              src={icon}
              alt=""
              className="w-5 h-5 mr-3 shrink-0 self-center"
            />
          )}

          {/* Text input field */}
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            pattern={pattern}
            className="w-full bg-transparent text-sm
              text-gray-800 dark:text-gray-100 dark:focus:text-black
              placeholder-gray-400 dark:placeholder-gray-500
              focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default TextInput;
