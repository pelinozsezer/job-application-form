import React from "react";

const ToggleInput = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center justify-between cursor-pointer select-none">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-indigo-600 transition-all"></div>
        <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md peer-checked:translate-x-full transition-all"></div>
      </div>
    </label>
  );
};

export default ToggleInput;
