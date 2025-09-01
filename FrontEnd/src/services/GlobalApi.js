import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    "Content-Type": "application/json",
    'Authorization':`Bearer ${API_KEY}`
  },
});

export const updateResumeExperience = async (resumeId, data) => {
  const sanitizedExperience = data.data.experience.map(exp => ({
    jobTitle: exp.jobTitle,
    companyName: exp.companyName,
    city: exp.city,
    state: exp.state,
    startDate: exp.startDate || null,
    endDate: exp.endDate || null,     // null instead of ""
    workSummary: exp.workSummary,
    currentlyWorking: exp.currentlyWorking,
  }));

  try {
    const res = await axiosClient.put(`/user-resumes/${resumeId}`,sanitizedExperience);
    return res;
  } catch (error) {
    console.error("❌ Error response:", error.response?.data);
    throw error;
  }
};


const createNewResume = (data) => axiosClient.post("/user-resumes", data);
const getUserResume=(userEmail)=>axiosClient.get(`/user-resumes?filters[userEmail][$eq]=${userEmail}`)
const updateUserResume=(id,data)=>axiosClient.put(`/user-resumes/${id}`,data)
export default { createNewResume,getUserResume,updateUserResume,updateResumeExperience }
