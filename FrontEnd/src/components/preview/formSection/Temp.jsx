import RichTextEditor from '@/components/RichTextEditor.jsx';
import { ResumeInfoContext } from '@/context/ResumeInfoContext.jsx';
import { Loader, PlusCircle, Trash2 } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { GiArtificialHive } from 'react-icons/gi';
import { toast } from 'sonner';
import { generateText } from '@/services/Gemini.js';
import GlobalApi from '@/services/GlobalApi.js';
import { useParams } from 'react-router-dom';

const Temp = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loadingAI, setAiLoading] = useState(null);
  const [experience, setExperienceList] = useState([
    {
      jobTitle: '',
      companyName: '',
      city: '',
      state: '',
      startDate: '',
      endDate: '',
      currentlyWorking: false,
      workSummary: '',
    },
  ]);

  const [loading, setLoading] = useState(false);

  const AddSection = () => {
    setExperienceList([
      ...experience,
      {
        jobTitle: '',
        companyName: '',
        city: '',
        state: '',
        startDate: '',
        endDate: '',
        currentlyWorking: false,
        workSummary: '',
      },
    ]);
  };

  const params = useParams();

  const RemoveSection = (idx) => {
    if (experience.length === 1) {
      toast.error('Experience Cannot Be Empty');
      return;
    } else setExperienceList((list) => list.filter((_, i) => i !== idx));
  };

  const Submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const cleanedExperience = experience.map((exp) => ({
      ...exp,
      endDate: exp.currentlyWorking ? null : exp.endDate || null,
    }));

    const data = {
      data: {
        experience: cleanedExperience,
      },
    };
    await GlobalApi.updateUserResume(params?.documentId, data).then(
      (res) => {
        setLoading(false);
        toast.success('Experience saved successfully');
      },
      (err) => {
        setLoading(false);
        toast.error('Error, try again later');
      }
    );
  };

  const changeHandler = (e, idx) => {
    const updatedList = [...experience];
    const { name, value, checked, type } = e.target;
    updatedList[idx][name] = type === 'checkbox' ? checked : value;
    if (name === 'currentlyWorking') {
      if (checked) updatedList[idx].endDate = '';
    }
    setExperienceList(updatedList);
  };

  const useAI = async (content, idx) => {
    const prompt = content.replace(/<[^>]+>/g, '');
    if (prompt.length === 0) {
      toast.error('Input cannot be empty');
      return;
    }
    try {
      setAiLoading(idx);
      const Prompt = `Rewrite the following content into a single, ATS-friendly experience summary using strong action verbs and industry-relevant keywords. 
        Incorporate quantifiable achievements (numbers, percentages, or metrics) where possible.

        ⚠️ Formatting Rules:
        - Output ONLY in bullet points.
        - Each bullet point must start with ". " (dot + space).
        - Do NOT include asterisks, dashes, numbering, or multiple variations.
        - Keep points concise, professional, and ATS-optimized.
        - Return only one final version.

        Content: ${prompt}`;
      const result = await generateText(Prompt);
      const updatedList = [...experience];
      updatedList[idx].workSummary = result.replace('/\n/g', '<br/>');
      setExperienceList(updatedList);
      setAiLoading(null);
    } catch {
      setAiLoading(null);
      toast.error('Network error, try again later');
    }
  };

  useEffect(() => {
    setResumeInfo((prev) => ({
      ...prev,
      experience: experience,
    }));
  }, [experience, setResumeInfo]);

  return (
    <div className="w-full max-w-2xl mx-auto mt-5 p-4 sm:p-6 bg-white shadow-purple-500 shadow-xl rounded-lg">
      <div className="flex flex-col items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-center">
          Professional Experience
        </h1>
        <p className="text-gray-500 mb-6 text-center text-sm sm:text-base">
          Add your previous job experiences below
        </p>
      </div>

      <form action="" onSubmit={Submit}>
        {experience.map((val, idx) => (
          <div
            key={idx}
            className="relative bg-white shadow-md rounded-2xl border border-gray-200 mb-6"
          >
            <Trash2
              className="absolute top-5 right-5 text-red-500 cursor-pointer"
              onClick={() => RemoveSection(idx)}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-6">
              <div>
                <label>Position Title</label>
                <input
                  name="jobTitle"
                  onChange={(e) => changeHandler(e, idx)}
                  type="text"
                  className="w-full mt-1 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label>Company Name</label>
                <input
                  name="companyName"
                  onChange={(e) => changeHandler(e, idx)}
                  type="text"
                  className="w-full mt-1 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-6">
              <div>
                <label>City</label>
                <input
                  name="city"
                  onChange={(e) => changeHandler(e, idx)}
                  type="text"
                  className="w-full mt-1 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label>State</label>
                <input
                  name="state"
                  onChange={(e) => changeHandler(e, idx)}
                  type="text"
                  className="w-full mt-1 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-6">
              <div>
                <label>Start Date</label>
                <input
                  name="startDate"
                  onChange={(e) => changeHandler(e, idx)}
                  type="date"
                  className="w-full mt-1 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <label>End Date</label>
                  {!val.currentlyWorking ? (
                    <input
                      name="endDate"
                      onChange={(e) => changeHandler(e, idx)}
                      type="date"
                      className="w-full mt-1 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  ) : (
                    <span className="italic text-gray-600">Current</span>
                  )}
                </div>
                <div className="gap-2">
                  <label className="flex flex-row items-center gap-2">
                    <input
                      type="checkbox"
                      onChange={(e) => changeHandler(e, idx)}
                      checked={val.currentlyWorking}
                      name="currentlyWorking"
                    />
                    <h3 className="text-sm sm:text-base">Currently Working Here?</h3>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full px-4 sm:px-6">
              <h1 className="text-gray-500">Work Summary</h1>
              <RichTextEditor
                value={val.workSummary}
                onRichTextEditorChange={(content) => {
                  const updatedList = [...experience];
                  updatedList[idx].workSummary = content;
                  setExperienceList(updatedList);
                }}
              />
            </div>

            <div className="border-t-2 border-gray-400 flex flex-col sm:flex-row items-center p-3 sm:p-4 justify-between gap-3">
              <div className="text-red-500 flex flex-row items-center gap-2">
                <GiArtificialHive />
                <button
                  type="button"
                  onClick={() => useAI(val.workSummary, idx)}
                >
                  {loadingAI === idx ? (
                    <Loader className="animate-spin" />
                  ) : (
                    'Use AI'
                  )}
                </button>
              </div>

              <div
                className="flex flex-row items-center bg-green-500 px-3 py-2 rounded-md gap-2 text-white cursor-pointer"
                onClick={AddSection}
              >
                <PlusCircle />
                <button type="button">Add Section</button>
              </div>
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-md w-full sm:w-auto"
        >
          {loading ? <Loader className="animate-spin" /> : 'Save'}
        </button>
      </form>
    </div>
  );
};

export default Temp;
