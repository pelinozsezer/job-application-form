import { useState, useMemo } from "react";

// API & toast
import { submitApplication } from "../api/submitApplication.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Lottie from "lottie-react"; // Lottie animations
import loadingAnimation from "../assets/animations/loadingAnimation.json";
import successAnimation from "../assets/animations/successAnimation.json";

// input components
import ToggleInput from "./inputs/ToggleInput.jsx";
import FileInput from "./inputs/FileInput.jsx";
import SelectInput from "./inputs/SelectInput.jsx";
import InputField from "./inputs/InputField.jsx";
import CheckboxInput from "./inputs/CheckboxInput.jsx";
import ThemeToggle from "./theme/ThemeToggle.jsx";

// data
import provinceDistrictData from "../data/turkiye_province_district.json";

// icons
import UserIcon from "../assets/icons/user.svg";
import EmailIcon from "../assets/icons/email.svg";
import PhoneIcon from "../assets/icons/phone.svg";
import WalletIcon from "../assets/icons/wallet.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import LocationIcon from "../assets/icons/location.svg";

// initial values
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
  // state hooks
  const [form, setForm] = useState(initialForm);
  const [showAddress, setShowAddress] = useState(false); // toggle address fields
  const [error, setError] = useState(null); // error message
  const [isSubmitting, setIsSubmitting] = useState(false); // disables submit button
  const [isSubmitted, setIsSubmitted] = useState(false); // success animation
  const [loading, setLoading] = useState(false); // loading animation

  // handle input changes for all fields
  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;

    // no negative salary!
    if (name === "salary" && Number(value) < 0) return;

    // phone: digits only, no leading 0, max 10 digits
    if (
      name === "phone" &&
      (!/^\d*$/.test(value) || value.startsWith("0") || value.length > 10)
    )
      return;

    // update state based on input type - updates the correct field in the form state accordingly
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "file" ? files[0] : type === "checkbox" ? checked : value,
    }));
  };

  // reset district (tr:ilce) when province (tr:il) changes
  const handleProvinceChange = (e) => {
    const province = e.target.value;
    setForm((prev) => ({ ...prev, province, district: "" }));
  };

  // handle district selection
  const handleDistrictChange = (e) => {
    setForm((prev) => ({ ...prev, district: e.target.value }));
  };

  // filter district options based on selected province
  const districtOptions = useMemo(() => {
    return (
      provinceDistrictData.find((p) => p.provinceName === form.province)
        ?.districts || []
    );
  }, [form.province]);

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.kvkk) {
      toast.error("Please accept the KVKK checkbox.");
      return;
    }
    setIsSubmitting(true);
    setLoading(true);
    setError(null); // clear previous errors
    try {
      const result = await submitApplication(form);
      if (result.status === "success") {
        setIsSubmitted(true);
        toast.success(result.message || "Başvuru başarılı!");
      } else {
        setError(result.message || "Bir hata oluştu."); // set error message
        toast.error(result.message || "Bir hata oluştu.");
      }
    } catch (error) {
      setError("Sunucu hatası: Başvuru gönderilemedi."); // catch server errors
      toast.error("Sunucu hatası: Başvuru gönderilemedi.");
    } finally {
      setLoading(false);
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-4xl mx-auto mt-10 mb-10 bg-[#F5F5FF] dark:bg-[#1e1e2f] text-gray-800 dark:text-gray-100 backdrop-blur-md px-4 sm:px-8 md:px-12 py-8 rounded-2xl shadow-xl space-y-6 transition-colors duration-300"
    >
      {/* loading animation */}
      {loading && (
        <div className="flex justify-center mb-4">
          <Lottie animationData={loadingAnimation} loop={true} />
        </div>
      )}

      {/* success animation */}
      {isSubmitted && (
        <div className="flex justify-center mb-4">
          <Lottie animationData={successAnimation} loop={false} />
        </div>
      )}

      {/* error message */}
      {error && <div className="text-red-500 mb-4">{error}</div>}

      {/* header and toggles */}
      <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
        {/* title and subtitle on the left upper section */}
        <div className="mt-8 flex-1 relative -top-2 -left-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3F2F70] dark:text-white">
            [Title] İlanına Başvur
          </h2>
          <h2 className="text-sm sm:text-base text-[#5A5A59] dark:text-gray-300 mt-4">
            Aşağıdaki bilgileri doldurarak başvurunuzu tamamlayabilirsiniz.
          </h2>
        </div>

        {/* theme and address toggles on the right upper section */}
        <div className="flex flex-row md:flex-col items-start md:items-end gap-2 md:gap-4">
          <ThemeToggle />
          <ToggleInput
            label="Adres Bilgilerimi Eklemek İstiyorum"
            checked={showAddress}
            onChange={() => setShowAddress((prev) => !prev)}
          />
        </div>
      </div>

      {/* INPUT FIELDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* name, surname, email, phone */}
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

        {/* CONDITIONALLY show address section */}
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

        {/* LinkedIn, CV, salary */}
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

      {/* KVKK consent */}
      <CheckboxInput name="kvkk" checked={form.kvkk} onChange={handleChange} />

      {/* buttons: return to job & submit */}
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
          disabled={isSubmitting} // disable button while submitting!
          className={`w-full sm:w-1/2 font-semibold py-2 px-4 rounded-xl shadow transition-colors ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-800 dark:bg-[#7054c7] text-white dark:text-gray-800 hover:bg-indigo-900 dark:hover:bg-[#c6b7fb]"
          }`}
        >
          {isSubmitting ? "Gönderiliyor..." : "Başvuruyu Tamamla"}
        </button>
      </div>
    </form>
  );
};

export default JobApplicationForm;
