import React from "react";
import UploadIcon from "../../assets/icons/upload.svg";

const FileInput = ({ label, name, onChange, accept = ".pdf, jpeg,.png" }) => {
  return (
    <div className="relative w-full group">
      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className="absolute rounded-full -top-2 left-5 bg-[#F5F5FF] dark:bg-[#1e1e2f] group-focus-within:bg-white dark:group-focus-within:bg-[#dbd1fd] group-focus-within:dark:text-black px-1 text-sm font-medium text-gray-700 dark:text-gray-100 z-10"
        >
          {label}
        </label>
      )}

      {/* Self */}
      <div className="mt-3 relative">
        <div className="flex items-center justify-between gap-4 border border-gray-300 dark:border-gray-600 bg-[#F5F5FF] dark:bg-[#1e1e2f] group-focus-within:bg-white dark:group-focus-within:bg-[#dbd1fd] rounded-full px-5 py-3 shadow-sm transition-colors duration-200">
          {/* Icon + Dosya Türü Açıklaması */}
          <div className="flex items-center gap-3">
            <img src={UploadIcon} alt="Upload" className="w-5 h-5 shrink-0" />
            <span className="text-xs text-gray-400 dark:text-gray-500">
              PNG, JPG, JPEG, PDF
            </span>
          </div>

          {/* Maks boyut bilgisi */}
          <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">
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
