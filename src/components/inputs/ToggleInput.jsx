import React from "react";

const ToggleInput = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center justify-between cursor-pointer select-none border border-[#E5E7EB] dark:border-gray-600 rounded-full px-4 py-2 w-fit gap-4 min-h-11 bg-white dark:bg-[#1e1e2f]">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-100">
        {label}
      </span>

      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />

        {/* Toggle track */}
        <div
          className="w-11 h-6 rounded-full bg-gray-300 dark:bg-gray-700 peer-checked:bg-[linear-gradient(116.03deg,_#3A3A38_-4.81%,_#7C6DC2_50.75%,_#7260A8_88.49%)]
 transition-all"
        ></div>

        {/* Toggle knob */}
        <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md peer-checked:translate-x-full transition-all"></div>
      </div>
    </label>
  );
};

export default ToggleInput;
