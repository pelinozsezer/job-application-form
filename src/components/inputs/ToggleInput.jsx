import React from "react";

const ToggleInput = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center justify-between cursor-pointer select-none border border-[#E5E7EB] rounded-full px-4 py-2 w-fit gap-4 bg-white">
      <span className="text-sm font-medium text-gray-700">{label}</span>

      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />

        {/* Toggle track */}
        <div className="w-11 h-6 rounded-full bg-gray-300 peer-checked:bg-[linear-gradient(116.03deg,_#1D1D1B_-4.81%,_#543F95_50.75%,_#3F2F70_88.49%)] transition-all"></div>

        {/* Toggle knob */}
        <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md peer-checked:translate-x-full transition-all"></div>
      </div>
    </label>
  );
};

export default ToggleInput;
