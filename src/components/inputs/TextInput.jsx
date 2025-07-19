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
  icon: Icon,
}) => {
  return (
    <div className="relative w-full">
      {/* Üst çizgiye bindirilmiş gibi görünen label */}
      {label && (
        <label
          htmlFor={name}
          className="absolute rounded-full left-4 -top-2.5 bg-[#F5F5FF] focus:bg-white px-1 text-sm text-gray-700 z-10"
        >
          {label}
        </label>
      )}

      {/* Input + Icon container */}
      <div className="mt-3 relative">
        {Icon && (
          <div className="absolute inset-y-0 left-4 flex items-center text-gray-400">
            <Icon className="w-5 h-5" />
          </div>
        )}

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          pattern={pattern}
          className={`w-full ${
            Icon ? "pl-11" : "pl-5"
          } pr-5 py-3 pt-4 pb-2 border border-gray-300 rounded-full bg-[#F5F5FF] focus:bg-white text-gray-800 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition`}
        />
      </div>
    </div>
  );
};

export default TextInput;
