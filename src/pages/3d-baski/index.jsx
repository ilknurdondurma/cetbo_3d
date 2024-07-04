import React, { useState } from 'react';
import { FaQuestionCircle} from "react-icons/fa";
import { sorularData } from '../../fakeAPI/sorular';
import { teknologiesData } from '../../fakeAPI/teknologies';
import Acordion from '../../components/acordion';
import Table from '../../components/table';
import backgroundImage from '../../assets/3d_object.png';
import { AnimateContainer } from 'react-animate-container';

function SSS() {
    const [sorular, setSorular] = useState(sorularData);
    const [teknologies, setTeknologies] = useState(teknologiesData);



    return (
        <div className=''>
            <div className='bg-secondary/40 p-20 mb-10 relative'
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '300px',
                }}
            >
                <div className='absolute inset-0 flex flex-col justify-center p-5'>
                <AnimateContainer.fadeInLeft duration={0.3} active ><div className='text-4xl font-bold sm:text-md ' >3D Baskı Hizmeti</div></AnimateContainer.fadeInLeft>
                <AnimateContainer.fadeInLeft duration={1} active ><div className='text-xl font-bold sm:sm-text-sm'>3D Baskı Hizmetimizden Faydalanarak Hemen Teklif Alın. </div></AnimateContainer.fadeInLeft>
                </div>
            </div>
            <div className='w-4/5 mx-auto overflow-y-scroll'>
                <h1 className='text-3xl font-semibold italic text-center my-5'>
                3D Baskı Teknolojileri
                </h1>
                <Table props={teknologies}/>
            </div>

            <h1 className='text-3xl font-semibold italic text-center my-5'>
                <FaQuestionCircle className='inline-block mr-2' />Sıkça Sorulan Sorular
            </h1>
            <div className='w-full p-5 m-5 mx-auto'>
            
                <Acordion props={sorular}/>
            </div>
            

            
        </div>
    );
}

export default SSS;
