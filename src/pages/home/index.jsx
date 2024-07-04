import React, { useEffect } from 'react';
import { AnimateContainer } from 'react-animate-container';
import scrollRevealConfig from '../../helpers/scrollRevealConfig';
import { useAuth } from '../../context/authContext/authContext';

function Home() {

  useEffect(() => {
    scrollRevealConfig();
  }, []);


  return (
    <div>
      <AnimateContainer.fadeInUp duration={5} active className='animationLoop'>
        <h6 className="text-red-600 text-2xl">react-animate-container</h6>
        <h1 className="text-red-600 text-2xl">react-animate-container</h1>
        <h1 className="text-red-600 text-2xl">react-animate-container</h1>
        <h1 className="text-red-600 text-2xl">react-animate-container</h1>
        <h1 className="text-red-600 text-2xl">react-animate-container</h1>
      </AnimateContainer.fadeInUp>
    </div>
  )
}

export default Home
