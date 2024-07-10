import React, { useEffect } from 'react';
import { AnimateContainer } from 'react-animate-container';
import scrollRevealConfig from '../../helpers/scrollRevealConfig';
import { useAuth } from '../../context/authContext/authContext';
import backgroundImage from '../../assets/fdm.jpeg';
import backgroundImage2 from '../../assets/3d.jpg';

function Home() {

  useEffect(() => {
    scrollRevealConfig();
  }, []);


  return (
    <div className='grid gap-2' >
      <section className='relative grid grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-5 place-items-center '
      >
        <div className='h-60 w-60 bg-secondary '>a</div>
        <div className='h-60 w-60 bg-secondary '>a</div>
        <div className='h-60 w-60 bg-secondary '>a</div>
        <div className='h-60 w-60 bg-secondary '>a</div>
        <div className='h-60 w-60 bg-secondary '>a</div>

      </section>
      <section className='bg-secondary/40 relative'
      style={{
          backgroundImage: `url(${backgroundImage2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '1000px',
          opacity:"50%"
  
      }}>

      </section>
      
    </div>
  )
}

export default Home

/**
 * <AnimateContainer.fadeInUp duration={5} active className='animationLoop'>
        <h6 className="text-red-600 text-2xl">react-animate-container</h6>
        <h1 className="text-red-600 text-2xl">react-animate-container</h1>
        <h1 className="text-red-600 text-2xl">react-animate-container</h1>
        <h1 className="text-red-600 text-2xl">react-animate-container</h1>
        <h1 className="text-red-600 text-2xl">react-animate-container</h1>
      </AnimateContainer.fadeInUp>
 */