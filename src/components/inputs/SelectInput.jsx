import React from "react";

const SelectInput = ({
  label,
  name,
  value,
  onChange,
  options = [],
  disabled = false,
  icon,
}) => {
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

      {/* Select with optional icon */}
      <div className="mt-3 relative">
        {icon && (
          <div className="absolute top-1/2 left-4 -translate-y-1/2 flex items-center pointer-events-none">
            <img src={icon} alt="" className="w-5 h-5" />
          </div>
        )}

        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full ${
            icon ? "pl-12" : "pl-5"
          } pr-5 py-3 bg-[#F5F5FF] focus:bg-white border border-gray-300 rounded-full shadow-sm text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none`}
        >
          <option value="">Seçiniz</option>
          {options.map((opt) => (
            <option
              key={opt.provinceId || opt.districtId}
              value={opt.provinceName || opt.districtName}
            >
              {opt.provinceName || opt.districtName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectInput;
