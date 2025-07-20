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
    <div className="relative w-full mb-4 group">
      {/* Floating label above the select field */}
      {label && (
        <label
          htmlFor={name}
          className="absolute rounded-full -top-0 left-5 
            bg-[#F5F5FF] dark:bg-[#1e1e2f] 
            group-focus-within:bg-white dark:group-focus-within:bg-[#dbd1fd] 
            group-focus-within:dark:text-black 
            px-1 text-sm font-medium text-gray-700 dark:text-gray-100 z-10"
        >
          {label}
        </label>
      )}

      {/* Select box container */}
      <div className="mt-3 relative">
        {/* Optional left icon inside select field */}
        {icon && (
          <div className="absolute top-1/2 left-4 -translate-y-1/2 flex items-center pointer-events-none">
            <img src={icon} alt="" className="w-5 h-5" />
          </div>
        )}

        {/* Select dropdown input */}
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full ${icon ? "pl-12" : "pl-5"} pr-5 py-3 
          bg-[#F5F5FF] dark:bg-[#1e1e2f] 
          group-focus-within:bg-white dark:group-focus-within:bg-[#dbd1fd] 
          border border-gray-300 dark:border-gray-600 
          rounded-full shadow-sm 
          text-sm text-gray-700 dark:text-gray-100 dark:focus:text-black
          focus:outline-none 
          appearance-none transition-colors duration-200`}
        >
          {/* Default placeholder option */}
          <option value="">Seçiniz</option>

          {/* Dynamic options rendered from province or district */}
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
