import React from "react";

const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  maxLength,
  icon,
  type = "text",
  inputMode,
  pattern,
  min,
  max,
  step,
}) => {
  return (
    <div className="relative w-full group">
      {/* label */}
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

      {/* container for input and icon */}
      <div
        className="flex items-center border border-gray-300 dark:border-gray-600
          bg-[#F5F5FF] dark:bg-[#1e1e2f]
          group-focus-within:bg-white dark:group-focus-within:bg-[#dbd1fd]
          rounded-full px-4 py-3 shadow-sm transition-colors duration-200"
      >
        {/* icon (optional) */}
        {icon && (
          <img
            src={icon}
            alt=""
            className="w-5 h-5 mr-3 shrink-0 self-center"
          />
        )}

        {/* input field */}
        <input
          id={name}
          name={name}
          type={type}
          inputMode={inputMode}
          pattern={pattern}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          maxLength={maxLength}
          min={min}
          max={max}
          step={step}
          className="w-full bg-transparent text-sm leading-tight
            text-gray-800 dark:text-gray-100 dark:focus:text-black
            placeholder-gray-400 dark:placeholder-gray-500
            focus:outline-none"
        />
      </div>

      {/* character counter */}
      {typeof maxLength === "number" && (
        <div className="absolute bottom-1 right-4 text-xs text-gray-400 dark:text-gray-500">
          {value.length}/{maxLength}
        </div>
      )}
    </div>
  );
};

export default InputField;
