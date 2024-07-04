import React, { useState } from 'react';
import { aboutData } from '../../fakeAPI/about';
import { servicesData } from '../../fakeAPI/services';
import { AnimateContainer } from 'react-animate-container';
import { FaAnglesRight } from "react-icons/fa6";
import { SiD3Dotjs } from "react-icons/si";
import exampleImage from '../../assets/3d.jpg';

function About() {
  const [about, setAbout] = useState(aboutData);
  const [services, setServices] = useState(servicesData);

  return (
    <div className='mx-5'>
      {/* <h1 className='flex justify-center text-2xl font-semibold italic gap-2 py-3 rounded-xl ' style={{backgroundImage:exampleImage}}><SiD3Dotjs /> CETBO 3D Baskı Hizmeti</h1> */}
      <div className='grid grid-cols-5 sm:grid-cols-1 p-1 gap-5'>

        {/* hakkımızda sm kısmı once gozuksun diye tekrar yazdık */}
        <div className="col-span-1 2xl:hidden xl:hidden lg:hidden md:hidden">
          
          {about.map((item, index) => (
            <div
              key={item.id}
              className={`p-5 rounded-lg h-auto `}
            >
              <h2 className='text-2xl my-5 mx-6 flex gap-2'><FaAnglesRight />{item.title}</h2>
              
                <div className={`border-l-2 p-5 rounded-lg h-auto`}>
                  <p className='text-lg font-serif'> {item.content}</p>
                </div>
             
            </div>
          ))}
        </div>
        {/* hizmetler */}
        <div className='col-span-1 '>
        <AnimateContainer.fadeInDown duration={1} active className='animationLoop'><h1 className='flex justify-center text-lg font-semibold italic my-5 bg-primary p-2 rounded-xl gap-2 border-2 border-dotted border-black'>
            <FaAnglesRight /> Hizmetlerimiz
          </h1></AnimateContainer.fadeInDown>
          {services.map((service, index) => (
            <div key={service.id} className='col-span-2 col-start-4 flex flex-col justify-center gap-2'>
              <div className='border-2 rounded-lg h-auto p-5 m-2 shadow-md'>
                <h2 className='text-xl flex gap-2'>*{service.title}</h2>
                <p>{service.content}</p>
              </div>
            </div>
          ))}
        </div>
        {/* hakkımızda xl */}
        <div className="col-span-3 sm:hidden ">
          
          {about.map((item, index) => (
            <div
              key={item.id}
              className={`p-5 rounded-lg h-auto `}
            >
              <h2 className='text-2xl my-5 mx-6 flex gap-2'><FaAnglesRight />{item.title}</h2>
              
                <div className={`border-l-2 p-5 rounded-lg h-auto`}>
                  <p className='text-lg font-serif'> {item.content}</p>
                </div>
             
            </div>
          ))}
        </div>
        {/* fotolar */}
        <div className='col-span-1 '>
            <h1 className='flex justify-center text-lg font-semibold italic my-5 bg-primary p-2 rounded-xl gap-2'>
              <FaAnglesRight /> Foto Galeri
            </h1>
            <AnimateContainer.fadeInDown duration={1} active><img src={exampleImage} alt="resim" className="mb-4 w-full h-auto object-contain rounded-lg"style={{ maxHeight: '20vh' ,maxWidth:'40vh' }}/></AnimateContainer.fadeInDown>
            <AnimateContainer.fadeInDown duration={2} active><img src={exampleImage} alt="resim" className="mb-4 w-full h-auto object-contain rounded-lg"style={{ maxHeight: '20vh' ,maxWidth:'40vh'}} /></AnimateContainer.fadeInDown>
            <AnimateContainer.fadeInDown duration={3} active><img src={exampleImage} alt="resim" className="mb-4 w-full h-auto object-contain rounded-lg"style={{ maxHeight: '20vh' ,maxWidth:'40vh'}} /></AnimateContainer.fadeInDown>
        </div>
        
      </div>
    </div>
  );
}

export default About;
