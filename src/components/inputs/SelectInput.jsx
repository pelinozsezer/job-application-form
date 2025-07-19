import React from "react";

const SelectInput = ({
  label,
  name,
  value,
  onChange,
  options = [],
  disabled = false,
}) => {
  const sharedStyles =
    "appearance-none w-full bg-[#F5F5FF] focus:bg-white border border-gray-300 rounded-full px-5 py-3 shadow-sm text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500";

  return (
    <div className="relative w-full mb-4">
      {label && (
        <label
          htmlFor={name}
          className="absolute rounded-full -top-0 left-5 bg-[#F5F5FF]  px-1 text-sm font-medium text-gray-700 z-10"
        >
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`mt-3 ${sharedStyles}`}
      >
        <option value="">Seçiniz</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
