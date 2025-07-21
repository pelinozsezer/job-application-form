import axios from "axios";

const API_URL = "https://cms.dinero.com.tr/api/test/case";

export const submitApplication = async (formData) => {
  const payload = new FormData();

  for (const key in formData) {
    payload.append(key, formData[key]);
  }

  const response = await axios.post(API_URL, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
