import React from "react";

const CheckboxInput = ({ name, checked, onChange }) => {
  return (
    <label className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-500">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="mt-1 accent-[#3F2F70] dark:accent-[#6e65a0]"
        required
      />
      <span>
        Tarafıma hizmet sunulması amacıyla paylaştığım kişisel verilerimin
        işlenmesine ilişkin{" "}
        <a
          href="https://www.resmigazete.gov.tr/eskiler/2018/03/20180310-5.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-indigo-600 hover:text-indigo-800"
        >
          KVKK
        </a>{" "}
        Metni'ni okudum. Kişisel verilerimin belirtilen kapsamda işlenmesine
        onay veriyorum.
      </span>
    </label>
  );
};

export default CheckboxInput;
