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
    // Prevent line breaks on Enter
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="relative w-full group">
      {/* Floating label */}
      {label && (
        <label
          htmlFor={name}
          className="absolute rounded-full -top-2.5 left-5 
            bg-[#F5F5FF] dark:bg-[#1e1e2f]
            group-focus-within:bg-white dark:group-focus-within:bg-[#dbd1fd]
            group-focus-within:dark:text-black
            px-1 text-sm font-medium text-gray-700 dark:text-gray-100 z-10"
        >
          {label}
        </label>
      )}

      {/* Container for textarea and icon */}
      <div
        className="flex items-center border border-gray-300 dark:border-gray-600
          bg-[#F5F5FF] dark:bg-[#1e1e2f]
          group-focus-within:bg-white dark:group-focus-within:bg-[#dbd1fd]
          rounded-full px-4 py-3 shadow-sm transition-colors duration-200"
      >
        {/* Optional icon */}
        {icon && (
          <img
            src={icon}
            alt=""
            className="w-5 h-5 mr-3 shrink-0 self-center"
          />
        )}

        {/* Textarea field (single-line style) */}
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
          className="w-full bg-transparent text-sm leading-tight
            text-gray-800 dark:text-gray-100 dark:focus:
            placeholder-gray-400 dark:placeholder-gray-500
            focus:outline-none resize-none"
        />
      </div>

      {/* Character counter */}
      <div className="absolute bottom-2 right-5 text-xs text-gray-400 dark:text-gray-500">
        {value.length}/{maxLength}
      </div>
    </div>
  );
};

export default TextareaInput;
