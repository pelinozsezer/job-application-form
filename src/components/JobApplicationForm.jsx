import { useState, useMemo } from "react";

// Input components
import ToggleInput from "./inputs/ToggleInput.jsx";
import FileInput from "./inputs/FileInput.jsx";
import SelectInput from "./inputs/SelectInput.jsx";
import InputField from "./inputs/InputField.jsx";
import CheckboxInput from "./inputs/CheckboxInput.jsx";
import ThemeToggle from "./theme/ThemeToggle.jsx";

// Static province/district data for dropdowns
import provinceDistrictData from "../data/turkiye_province_district.json";

// Icon assets
import UserIcon from "../assets/icons/user.svg";
import EmailIcon from "../assets/icons/email.svg";
import PhoneIcon from "../assets/icons/phone.svg";
import WalletIcon from "../assets/icons/wallet.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import LocationIcon from "../assets/icons/location.svg";

// Initial form state
const initialForm = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  province: "",
  district: "",
  address: "",
  linkedin: "",
  cv: null,
  salary: "",
  kvkk: false,
};

const JobApplicationForm = () => {
  const [form, setForm] = useState(initialForm);
  const [showAddress, setShowAddress] = useState(false);

  // Handles all input changes
  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;

    // Prevent negative salary input
    if (name === "salary" && Number(value) < 0) return;

    // Phone: only digits, max 10, no leading 0
    if (
      name === "phone" &&
      (!/^\d*$/.test(value) || value.startsWith("0") || value.length > 10)
    )
      return;

    // Update form state
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "file" ? files[0] : type === "checkbox" ? checked : value,
    }));
  };

  // When province is selected, reset district
  const handleProvinceChange = (e) => {
    const province = e.target.value;
    setForm((prev) => ({ ...prev, province, district: "" }));
  };

  // Handle district change
  const handleDistrictChange = (e) => {
    setForm((prev) => ({ ...prev, district: e.target.value }));
  };

  // Dynamically get districts for selected province
  const districtOptions = useMemo(() => {
    return (
      provinceDistrictData.find((p) => p.provinceName === form.province)
        ?.districts || []
    );
  }, [form.province]);

  // Submit logic
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.kvkk) {
      alert("Please accept the KVKK checkbox.");
      return;
    }
    console.log("Form submitted:", form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-4xl mx-auto mt-10 mb-10 bg-[#F5F5FF] dark:bg-[#1e1e2f] text-gray-800 dark:text-gray-100 backdrop-blur-md px-4 sm:px-8 md:px-12 py-8 rounded-2xl shadow-xl space-y-6 transition-colors duration-300"
    >
      {/* Header and toggles */}
      <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
        {/* Left: Title and description */}
        <div className="mt-8 flex-1 relative -top-2 -left-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3F2F70] dark:text-white">
            [Title] İlanına Başvur
          </h2>
          <h2 className="text-sm sm:text-base text-[#5A5A59] dark:text-gray-300 mt-4">
            Aşağıdaki bilgileri doldurarak başvurunuzu tamamlayabilirsiniz.
          </h2>
        </div>

        {/* Right: Theme toggle and address toggle */}
        <div className="flex flex-row md:flex-col items-start md:items-end gap-2 md:gap-4">
          <ThemeToggle />
          <ToggleInput
            label="Adres Bilgilerimi Eklemek İstiyorum"
            checked={showAddress}
            onChange={() => setShowAddress((prev) => !prev)}
          />
        </div>
      </div>

      {/* Main form inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Adınız"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Adınızı girin"
          icon={UserIcon}
        />

        <InputField
          label="Soyadınız"
          name="surname"
          type="text"
          value={form.surname}
          onChange={handleChange}
          required
          placeholder="Soyadınızı girin"
          icon={UserIcon}
        />

        <InputField
          label="E-Posta Adresiniz"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="E-posta adresinizi giriniz"
          icon={EmailIcon}
        />

        <InputField
          label="Telefon Numaranız"
          name="phone"
          type="tel"
          inputMode="numeric"
          value={form.phone}
          onChange={handleChange}
          required
          placeholder="(5xx) 123 45 67"
          icon={PhoneIcon}
        />

        {/* Conditionally rendered address fields */}
        {showAddress && (
          <>
            <SelectInput
              label="İl Seçiniz"
              name="province"
              value={form.province}
              onChange={handleProvinceChange}
              options={provinceDistrictData}
              icon={LocationIcon}
            />
            <SelectInput
              label="İlçe Seçiniz"
              name="district"
              value={form.district}
              onChange={handleDistrictChange}
              options={districtOptions}
              disabled={!form.province}
              icon={LocationIcon}
            />
            <div className="md:col-span-2 -mt-1">
              <InputField
                label="Açık Adres"
                name="address"
                type="text"
                value={form.address}
                onChange={handleChange}
                required
                placeholder="Açık adres giriniz"
                icon={LocationIcon}
                maxLength={100}
              />
            </div>
          </>
        )}

        {/* Social + File Inputs */}
        <div className="md:col-span-2 mt-2">
          <InputField
            label="LinkedIn URL"
            name="linkedin"
            type="url"
            value={form.linkedin}
            onChange={handleChange}
            required
            placeholder="https://www.linkedin.com/in/"
            icon={LinkedinIcon}
          />
        </div>

        <FileInput label="CV Yükleyin" name="cv" onChange={handleChange} />
        <InputField
          label="Maaş Beklentisi"
          name="salary"
          type="number"
          inputMode="numeric"
          value={form.salary}
          onChange={handleChange}
          required
          placeholder="00,000 ₺"
          min={0}
          step={100}
          icon={WalletIcon}
        />
      </div>

      {/* KVKK checkbox */}
      <CheckboxInput name="kvkk" checked={form.kvkk} onChange={handleChange} />

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <a
          href="https://www.linkedin.com/jobs/view/4261141443"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-1/2 bg-white dark:bg-[#695c91] text-gray-800 dark:text-gray-400 border border-gray-300 dark:border-transparent font-semibold py-2 px-4 rounded-xl shadow hover:bg-gray-100 dark:hover:bg-[#574b77] text-center transition-colors"
        >
          İş Tanımına Geri Dön
        </a>
        <button
          type="submit"
          className="w-full sm:w-1/2 bg-indigo-800 dark:bg-[#7054c7] text-white dark:text-gray-800 font-semibold py-2 px-4 rounded-xl shadow hover:bg-indigo-900 dark:hover:bg-[#c6b7fb] transition-colors"
        >
          Başvuruyu Tamamla
        </button>
      </div>
    </form>
  );
};

export default JobApplicationForm;
