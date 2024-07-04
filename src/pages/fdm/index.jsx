import React, { useState } from 'react';
import Table from '../../components/table';
import { teknologiesData } from '../../fakeAPI/teknologies';
import { fdmPicture } from '../../fakeAPI/fdmPictures';
import { AnimateContainer } from 'react-animate-container';
import  fdmPhoto  from '../../assets/fdm.jpeg';

function Fdm() {
  const [teknologies, setTeknologies] = useState(teknologiesData);
  const [fdmPictures, setFdmPicture] = useState(fdmPicture);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='mb-10'>
      
      
      <div className=' p-5 box-border mb-10 relative min-h-60 bg-slate-100 shadow-2xl'>
          <div className='relative sm:hidden md:hidden'
                    style={{
                        backgroundImage: `url(${fdmPhoto})`,
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
                <div className='text-4xl sm:text-2xl font-bold ' >FDM Baskı Örneklerimiz</div>
                <div className='text-xl font-bold sm:text-sm'>Fused Deposition Modeling (FDM) </div>
                <div className='text-lg  sm:text-xs max-w-xl'>FDM 3D baskı teknolojilerinden biridir ve termoplastik filamentlerin eritilip katman katman depozit edilmesiyle nesnelerin üretilmesini sağlar.</div>
            </div>
      </div>

      {/* Resimler */}
      <div className='w-4/5 mx-auto grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-2 justify-center justify-items-center'>
        {fdmPictures.map((fdm, index) => (
          <AnimateContainer.backInUp duration={index/2} active >
            <img
              key={fdm.id}
              src={`data:image/jpeg;base64, ${fdm.imageUrl}`}
              alt={"fdm resim"}
              className="mb-4 w-full h-auto object-contain cursor-pointer "
              style={{ maxHeight: '30vh', maxWidth: '30vw' }} 
              onClick={() => openModal(fdm.imageUrl)}
            />
            </AnimateContainer.backInUp>
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

      {/* Tablo */}
      <div className='w-4/5 mx-auto overflow-y-scroll'>
        <h1 className='text-3xl font-semibold italic text-center my-5'>
          3D Baskı Teknolojileri
        </h1>
        <Table props={teknologies} />
      </div>
    </div>
  );
}

export default Fdm;
