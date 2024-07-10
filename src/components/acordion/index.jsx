import React, { useState } from 'react'
import {  FaChevronDown, FaChevronUp } from "react-icons/fa";

function Acordion({props}) {

    const [openIndexes, setOpenIndexes] = useState({});

    const toggleAccordion = (techIndex, index) => {
        setOpenIndexes((prevState) => ({
            ...prevState,
            [techIndex]: prevState[techIndex] === index ? null : index
        }));
    };
  return (
    <div className='mx-auto'>
      {props.map((tech, techIndex) => (
                <div key={techIndex}>
                    <h2 className='text-2xl font-semibold my-4'>{tech.teknologies}</h2>
                    {tech.questions.map((item, index) => (
                        <div key={index} className='border-2 p-5 my-3 rounded-lg shadow-md bg-white'>
                            <div
                                className='flex justify-between items-center cursor-pointer'
                                onClick={() => toggleAccordion(techIndex, index)}
                            >
                                <h2 className='text-md font-bold'>{item.question}</h2>
                                {openIndexes[techIndex] === index ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            {openIndexes[techIndex] === index && (
                                <p className='mt-3 text-lg'>{item.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            ))}
    </div>
  )
}

export default Acordion
