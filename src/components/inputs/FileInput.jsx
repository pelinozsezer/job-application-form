import React from "react";

const FileInput = ({
  label,
  name,
  onChange,
  accept = ".pdf,.jpg,.jpeg,.png",
}) => {
  return (
    <div className="relative w-full">
      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className="absolute rounded-full -top-2 left-5 bg-[#F5F5FF] focus:bg-white px-1 text-sm font-medium text-gray-700 z-10"
        >
          {label}
        </label>
      )}

      {/* Self */}
      <div className="mt-3 relative flex items-center justify-between border border-gray-300 bg-[#F5F5FF] focus:bg-white rounded-full px-5 py-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="text-xl">⬆️</div>
          <span className="text-sm text-gray-400">PNG, JPEG, PDF</span>
        </div>

        {/* right side: max file size */}
        <span className="text-xs text-gray-500">(Maks. Boyut: 1 MB)</span>

        {/* Tüm kutuyu tıklanabilir yapan input */}
        <input
          id={name}
          name={name}
          type="file"
          accept={accept}
          onChange={onChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default FileInput;
