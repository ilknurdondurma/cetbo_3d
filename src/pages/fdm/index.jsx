import React, { useState , useRef} from 'react';
import Table from '../../components/table';
import { teknologiesData } from '../../fakeAPI/teknologies';
import { fdmPicture } from '../../fakeAPI/fdmPictures';
import { fdmContext } from '../../fakeAPI/fdm';
import { AnimateContainer } from 'react-animate-container';
import  fdmPhoto  from '../../assets/fdm.jpeg';
import { fdmInfo } from '../../helpers/text/fdm';

function Fdm() {
  const [teknologies, setTeknologies] = useState(teknologiesData);
  const [fdmPictures, setFdmPicture] = useState(fdmPicture);
  const [fdm, setFdm] = useState(fdmContext);
  const sectionsRef = useRef([]);
  const [selectedImage, setSelectedImage] = useState(null);



  const handleTitleClick = (index) => {
    sectionsRef.current[index].scrollIntoView({ behavior: 'instant' });
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='mb-10'>
      
      {/* baslık */}
      <div className='p-5 box-border mb-10 relative min-h-60 bg-slate-100 shadow-2xl'>
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
                <AnimateContainer.fadeInLeft duration={0.5} active ><div className='text-4xl sm:text-2xl font-bold ' >{fdmInfo[0].title}</div></AnimateContainer.fadeInLeft>
                <div className='text-xl font-bold sm:text-sm'>F{fdmInfo[0].subTitle}</div>
                <div className='text-lg  sm:text-xs max-w-xl'>{fdmInfo[0].description}</div>
            </div>
      </div>

      {/* özellikler */}
      <div className='w-4/5 grid grid-cols-4 mx-auto '>
          <div className='col-span-1'>
            {fdm.map((f, index) => (
              <section key={index} className="cursor-pointer p-2 hover:bg-gray-200 text-xl py-5 border-b-2" onClick={() => handleTitleClick(index)}>
                {f.title}
              </section>
            ))}
          </div>
          <div className='col-span-3'>
            {fdm.map((f, index) => (
              <section
                key={index}
                ref={(el) => sectionsRef.current[index] = el}
                className="p-4 mb-4 border-b"
              >
                <h2 className="text-2xl font-bold mb-2">{f.title}</h2>
                <p className='text-lg'>{f.content}</p>
              </section>
            ))}
          </div>
    </div>

      {/* Resimler */}
      <div className='w-4/5 mx-auto '>
              <h1 className='text-3xl font-semibold italic text-center my-5'>
                  Görseller
                </h1>
                <div className='grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 justify-center justify-items-center'>
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
          Diğer 3D Baskı Teknolojileri ile Farkı
        </h1>
        <Table props={teknologies} />
      </div>
    </div>
  );
}

export default Fdm;
