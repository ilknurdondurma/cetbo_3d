import React, { useState } from 'react'
import Table from '../../components/table'
import { teknologiesData } from '../../fakeAPI/teknologies';
import { slaPicture } from '../../fakeAPI/slaPictures';
import { AnimateContainer } from 'react-animate-container';
import  slaPhoto  from '../../assets/sla.jpeg';
function Sla() {
  const [teknologies, setTeknologies] = useState(teknologiesData);
  const [slaPictures, setSlaPicture] = useState(slaPicture);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div className='mb-10'>
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
                <div className='text-4xl sm:text-2xl font-bold ' >SLA Baskı Örneklerimiz</div>
                <div className='text-xl font-bold sm:text-sm'>Stereolitografi (SLA) </div>
                <div className='text-lg  sm:text-xs max-w-xl'>3D baskı teknolojilerinden biridir ve UV ışığı ile sıvı reçinelerin polimerleştirilmesi yoluyla nesnelerin üretilmesini sağlar.</div>
            </div>
      </div>

      {/* Resimler */}
      <div className='w-4/5 mx-auto grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-2 justify-center justify-items-center'>
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
