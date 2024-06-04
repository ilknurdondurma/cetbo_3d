import React, { useEffect } from 'react';
import {useDispatch , useSelector} from 'react-redux';
import Actions from '../../redux/actions/rootAction';
import { decrement, carp } from '../../redux/actions/counterActions';
import { dark, light } from '../../redux/actions/themeActions';
import { AnimateContainer } from 'react-animate-container';
import scrollRevealConfig from '../../helpers/scrollRevealConfig';
import { useAuth } from '../../context/authContext/authContext';

function Home() {
  const count=useSelector(state=>state.counter.count)
  const sayi=useSelector(state=>state.counter.sayi)
  const theme=useSelector(state=>state.theme.theme)
  useEffect(() => {
    scrollRevealConfig();
    
  }, []);
  const dispatch=useDispatch();
  return (
    <div>
       <div style={theme} >
      <br />
          <div className='flex flex-col'>
              <button onClick={() => dispatch(Actions.counterActions.increment(2))} >ARTTIR</button>
              <button onClick={() => dispatch(decrement())}>AZALT</button>
              <button onClick={() => dispatch(carp())}>CARP</button>
              <button onClick={() => dispatch(dark({backgroundColor:"violet"}))}>dark</button>
              <button onClick={() => dispatch(light())}>light</button>
          </div>
          <p >{count}</p>
          <p>{sayi}</p>
          <AnimateContainer.fadeInUp duration={5} active className='animationLoop'>
         <h1 className="text-red-600">react-animate-container</h1>
          <h1 className="text-red-600">react-animate-container</h1>
          <h1 className="text-red-600">react-animate-container</h1>
          <h1 className="text-red-600">react-animate-container</h1>
          <h1 className="text-red-600">react-animate-container</h1>
         
      </AnimateContainer.fadeInUp>
      <AnimateContainer.fadeIn duration={5} active className='animationLoop'>
         <h1 className="text-red-600">react-animate-container</h1>
          <h1 className="text-red-600">react-animate-container</h1>
          <h1 className="text-red-600">react-animate-container</h1>
          <h1 className="text-red-600">react-animate-container</h1>
          <h1 className="text-red-600">react-animate-container</h1>
         
      </AnimateContainer.fadeIn>
      <br/>
      
      <br />
      
    </div>
    </div>
  )
}

export default Home
