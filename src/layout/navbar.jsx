import React, {useState} from 'react'
import navbarElements from '../helpers/navbarElements'
import { SiD3Dotjs } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from '../components/button/button'
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div className='h-auto flex flex-col justify-center bg-white mb-5'>
      <div className='p-5 flex flex-row justify-between'>

          <div className='flex'>
              <div><SiD3Dotjs size={50}/></div>
              <div className='flex flex-col'>
                <div className='text-xl sm:text-md p-5'>CETBO 3D Baskı Hizmeti</div> 
                <div className='text-sm sm:text-sm px-5 opacity-60'>CETBO 3D Baskı Hizmeti</div> 
              </div>
          </div>
      

          <NavLink className='flex flex-col justify-center ' to={"/propose"}>
              <Button variant={'Secondary'} className="sm:text-sm " > Teklif Al  </Button>
          </NavLink>

          <div></div>

      </div>


      <div className='flex flex-row justify-center bg-secondary'>
        
      </div>
      
      <Navigation/>

      
    </div>
  )
}
export default Navbar


function Navigation() {
  const [active, setActive] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex flex-row justify-center bg-primary'>
        <div className='flex flex-col justify-center'>
                <div className='flex flex-row gap-5 sm:hidden'>
                  {navbarElements.map((element, index ) => {
                    return <NavLink to={`${element.path}`} key={index} >
                      <div key={index} className={`${responsiveClass} ${hover} border border-1 border-transparent  m-2 p-2 text-lg ${active === index ? 'border-white rounded-lg' : ''}`} onClick={() => setActive(index)}>
                          {element.name}
                        </div>
                    </NavLink>;
                  })}
                </div>
                <span className='hover:shadow-md hover:shadow-white self-center hidden sm:block sm:mx-3' onClick={toggleSidebar}>
                    <GiHamburgerMenu color='white' size="30px"/>
                </span>
                <div className='hidden sm:block bg-primary z-10 w-full h-auto'>
                    {isSidebarOpen && (
                        navbarElements.map((menu , index) => (
                          <NavLink key={index} to={`${menu.path}`} onClick={()=>setIsSidebarOpen(false)}>
                            <div key={index} className='flex m-2 p-2 cursor-pointer text-white'>
                                {menu.name}
                            
                            </div>
                          </NavLink>
                        ))
                     )}
                </div>
            </div>
      </div>
  )
}

const responsiveClass="md:text-sm sm:text-sm lg-text-md gap-2 "
const hover="hover:border hover:border-1 hover:border-white hover:rounded-md"