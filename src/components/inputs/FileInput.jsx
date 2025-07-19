import React from "react";
import UploadIcon from "../../assets/icons/upload.svg";

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
      <div className="mt-3 relative">
        <div className="flex items-center justify-between gap-4 border border-gray-300 bg-[#F5F5FF] focus:bg-white rounded-full px-5 py-3 shadow-sm">
          {/* Icon */}
          <img src={UploadIcon} alt="Upload" className="w-5 h-5 shrink-0" />

          {/* Dosya türü bilgisi */}
          <span className="text-sm text-gray-400 flex-1 text-center">
            PNG, JPG, JPEG, PDF
          </span>

          {/* Maks boyut bilgisi */}
          <span className="text-xs text-gray-500 whitespace-nowrap">
            (Maks. Boyut: 1 MB)
          </span>
        </div>

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
