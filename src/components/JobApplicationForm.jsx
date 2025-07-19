import { useState } from "react";
import ToggleInput from "./inputs/ToggleInput.jsx";
import TextInput from "./inputs/TextInput.jsx";
import FileInput from "./inputs/FileInput.jsx";
import SelectInput from "./inputs/SelectInput.jsx";
import TextareaInput from "./inputs/TextareaInput.jsx";

import CheckboxInput from "./inputs/CheckboxInput.jsx";
import cityDistrictData from "../data/turkiye_city_district.json";

const JobApplicationForm = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    city: "",
    district: "",
    address: "",
    linkedin: "",
    cv: null,
    salary: "",
    kvkk: false,
  });

  const [showAddress, setShowAddress] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "file" ? files[0] : type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.kvkk) {
      alert("Lütfen KVKK onayını kabul ediniz.");
      return;
    }
    console.log("Form submitted:", form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-4 sm:mx-8 md:mx-auto mt-10 mb-10 bg-white backdrop-blur-md p-6 rounded-2xl shadow-xl space-y-4 max-w-md "
    >
      <h2 className="text-2xl font-bold text-gray-800">
        [Title] İlanına Başvur
      </h2>
      <h2 className="">
        Aşağıdaki bilgileri doldurarak başvurunuzu tamamlayabilirsiniz.
      </h2>

      <ToggleInput
        label="Adres Bilgilerimi Eklemek İstiyorum"
        checked={showAddress}
        onChange={() => setShowAddress((prev) => !prev)}
      />

      <TextInput
        label="Adınız"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Adınızı girin"
        required
      />

      <TextInput
        label="Soyadınız"
        name="surname"
        value={form.surname}
        onChange={handleChange}
        placeholder="Soyadınızı girin"
        required
      />

      <TextInput
        label="E-Posta Adresiniz"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="E-posta adresinizi giriniz"
        required
      />

      {showAddress && (
        <>
          <SelectInput
            label="İl Seçiniz"
            name="city"
            value={form.city}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                city: e.target.value,
                district: "", // Reset district when city changes
              }))
            }
            options={Object.keys(cityDistrictData)}
          />

          <SelectInput
            label="İlçe Seçiniz"
            name="district"
            value={form.district}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                district: e.target.value,
              }))
            }
            options={form.city ? cityDistrictData[form.city] : []}
            disabled={!form.city}
          />
          <TextareaInput
            label="Açık Adres"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Sokak, mahalle, daire vb. giriniz"
            required
          />
        </>
      )}

      <TextInput
        label="LinkedIn URL"
        name="linkedin"
        type="url"
        value={form.linkedin}
        onChange={handleChange}
        placeholder="https://www.linkedin.com/in/"
        required
      />

      <FileInput label="CV Yükleyin" name="cv" onChange={handleChange} />

      <TextInput
        label="Maaş Beklentisi"
        name="salary"
        type="number"
        value={form.salary}
        onChange={handleChange}
        placeholder="00,000 ₺"
        min={0}
        step={100}
        required
      />

      <CheckboxInput name="kvkk" checked={form.kvkk} onChange={handleChange} />

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition"
      >
        Başvuruyu Gönder
      </button>
    </form>
  );
};

export default JobApplicationForm;
