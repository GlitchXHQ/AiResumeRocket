import RichTextEditor from '@/components/RichTextEditor.jsx';
import { GemIcon, Loader, PlusCircle, Trash, Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { GiArtificialHive, GiGemini } from 'react-icons/gi';
import { RiAddBoxFill } from 'react-icons/ri';

const Temp = () => {
    const[experience,setExperienceList]=useState([
        {
            jobTitle:"",
            companyName:"",
            city:"",
            state:"",
            startDate:"",
            endDate:"",
            currentlyWorking:false,
            workSummary:""
        }
    ])

    const[loading,setLoading]=useState(false);

    const AddSection=()=>{

    }

    const RemoveSection=(idx)=>{

    }

    const onSubmit=()=>{

    }

    const onSave=()=>{

    }

    // useEffect(()=>{
    //     setExperienceList([...experience,
    //         experience
    //     ])
    // },[experience])
  
    return (
    <div className="border w-[600px] mt-5 p-4 h-fit bg-white shadow-purple-500 shadow-xl rounded-lg">
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl font-bold text-gray-800 text-center'>Professional Experience</h1>
            <p className='text-gray-500 mb-6 text-center'>Add your previous job experiences Below</p>
        </div>

        <form action="">
            {experience.map((val,key)=>(
                <div key={key} className='relative bg-white shadow-md rounded-2xl border border-gray-200 mb-6'>
                    
                    <Trash2 className='absolute top-5 right-5 text-red-500'/>

                    <div className="grid grid-cols-2 gap-4 p-6">
                        <div>
                            <label htmlFor="">Position Title</label>
                            <input type="text" className="w-full mt-1 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"/>
                        </div>
                        <div>
                            <label htmlFor="">Company Name</label>
                            <input type="text" className="w-full mt-1 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"/>
                        </div>
                    </div>

                <div className="grid grid-cols-2 gap-4 p-6">
                    <div>
                        <label htmlFor="">City</label>
                        <input type="text" className="w-full mt-1 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"/>
                        </div>
                    <div>
                        <label htmlFor="">State</label>
                        <input type="text" className="w-full mt-1 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"/>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 p-6">
                        <div>
                            <label htmlFor="">Start Date</label>
                            <input type="text" className="w-full mt-1 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"/>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <label htmlFor="">End Date</label>
                                <input type="text" className="w-full mt-1 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"/>
                            </div>
                            <div className='gap-2'>
                                <label htmlFor="" className='flex flex-row items-center gap-2'>
                                    <input type="checkbox"  />
                                    <h3>Currently Working Here?</h3>
                                </label>
                            </div>
                        </div>
                </div>

                <div className='flex flex-col w-full'>
                    <h1 className='text-gray-500'>Work Summary</h1>
                    <RichTextEditor/>
                </div>

                <div className='border-t-2 border-gray-400 flex flex-row items-center p-2 justify-between'>
                    <div className='text-red-500 flex flex-row items-center gap-2'>
                        <GiArtificialHive/>
                        <button type='button'>
                            {loading? <Loader/>: "Use AI"}
                        </button>
                    </div>

                    <div className='flex flex-row items-center bg-green-500 p-2 rounded-md gap-2'>
                        <PlusCircle/>
                        <button type='button'>Add Section</button>
                    </div>
                </div>
            </div>
            ))}
        </form>
        <button type='submit' className='p-2 bg-blue-500 text-white rounded-md'>
            {loading? <Loader/>:"Save"}
        </button>
    </div>
  )
}

export default Temp