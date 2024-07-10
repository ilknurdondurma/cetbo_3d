import React, { useRef, useState } from 'react'
import Table from '../../components/table'
import { teknologiesData } from '../../fakeAPI/teknologies';
import { slaPicture } from '../../fakeAPI/slaPictures';
import { slaContext } from '../../fakeAPI/sla';
import { AnimateContainer } from 'react-animate-container';
import  slaPhoto  from '../../assets/sla.jpeg';
import { slaInfo } from '../../helpers/text/sla';

function Sla() {
  const [teknologies, setTeknologies] = useState(teknologiesData);
  const [slaPictures, setSlaPicture] = useState(slaPicture);
  const [sla, setSla] = useState(slaContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const sectionsRef = useRef([]);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  
  const handleTitleClick = (index) => {
    sectionsRef.current[index].scrollIntoView({ behavior: 'instant' });
  };

  return (
    <div className='mb-10'>

      {/* baslık */}
      <div className=' p-5 box-border mb-10 relative min-h-60 border-2 bg-slate-100 shadow-2xl'>
          <div className='relative sm:hidden md:hidden'
                    style={{
                        backgroundImage: `url(${slaPhoto})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right',
                        minHeight: '250px',
                        maxHeight: '260px',
                        boxSizing:'border-box',
                      
                    }}
                >     
          </div>
          <div className='absolute inset-0  flex flex-col justify-center p-5 gap-2'>
                <AnimateContainer.fadeInLeft duration={0.5} active ><div className='text-4xl sm:text-2xl font-bold ' >{slaInfo[0].title}</div></AnimateContainer.fadeInLeft>
                <div className='text-xl font-bold sm:text-sm'>{slaInfo[0].subTitle}</div>
                <div className='text-lg  sm:text-xs max-w-xl'>{slaInfo[0].description}</div>
            </div>
      </div>

       {/* özellikler */}
       <div className='w-4/5 grid grid-cols-4 mx-auto '>
          <div className='col-span-1'>
            {sla.map((s, index) => (
              <section key={index} className="cursor-pointer p-2 hover:bg-gray-200 text-xl py-5 border-b-2" onClick={() => handleTitleClick(index)}>
                {s.title}
              </section>
            ))}
          </div>
          <div className='col-span-3'>
            {sla.map((s, index) => (
              <section
                key={index}
                ref={(el) => sectionsRef.current[index] = el}
                className="p-4 mb-4 border-b"
              >
                <h2 className="text-2xl font-bold mb-2">{s.title}</h2>
                <p className='text-lg'>{s.content}</p>
              </section>
            ))}
          </div>
    </div>

      {/* Resimler */}
      <div className='w-4/5 mx-auto'>
          <h1 className='text-3xl font-semibold italic text-center my-5'>
              Görseller
          </h1>
          <div className='grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 justify-center justify-items-center'>
              {slaPictures.map((fdm, index) => (
                <AnimateContainer.bounceIn duration={index+1} active >
                  <img
                    key={fdm.id}
                    src={`data:image/jpeg;base64, ${fdm.imageUrl}`}
                    alt={"fdm resim"}
                    className="mb-4 w-full h-auto object-contain cursor-pointer "
                    style={{ maxHeight: '30vh', maxWidth: '30vw' }} 
                    onClick={() => openModal(fdm.imageUrl)}
                  />
                  </AnimateContainer.bounceIn>
              ))}
          </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
          <div className="relative flex items-center justify-center">
            <img
              src={`data:image/jpeg;base64, ${selectedImage}`}
              alt="Büyütülmüş FDM Resmi"
              className="w-2/3 h-2/3 object-contain"
            />
            <button
              className="absolute right-0  bg-white text-black rounded-md p-2"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
      {/* tablo */}
      <div className='w-4/5 mx-auto overflow-y-scroll'>
                <h1 className='text-3xl font-semibold italic text-center my-5'>
                3D Baskı Teknolojileri
                </h1>
                <Table props={teknologies}/>
      </div>
    </div>
  )
}

export default Sla
