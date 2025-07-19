import React from "react";

const FileInput = ({
  label,
  name,
  onChange,
  accept = ".pdf,.jpg,.jpeg,.png",
}) => {
  return (
    <div className="relative w-full">
      {/* Sol üstte kutunun üstüne binen label */}
      {label && (
        <label
          htmlFor={name}
          className="absolute -top-2 left-5 bg-white px-1 text-sm font-medium text-gray-700 z-10"
        >
          {label}
        </label>
      )}

      {/* Kutunun kendisi */}
      <div className="mt-3 relative flex items-center justify-between border border-gray-300 bg-gray-50 rounded-full px-5 py-3 shadow-sm">
        {/* Sol kısım: ikon + dosya türü açıklaması */}
        <div className="flex items-center gap-3">
          <div className="text-indigo-600 text-xl">⬆️</div>
          <span className="text-sm text-gray-400">PNG, JPEG, PDF</span>
        </div>

        {/* Sağ kısım: max boyut */}
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
