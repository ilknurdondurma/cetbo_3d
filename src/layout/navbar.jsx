import React, {useState} from 'react'
import { SiD3Dotjs } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import Button from '../components/button'
import { NavLink } from 'react-router-dom';
import backgroundImage from '../assets/3d.jpg';
import { contactData } from '../fakeAPI/contact';
import { navbarElements } from '../fakeAPI/navbarElements';


function Navbar() {
  const [contacts, setContacts] = useState(contactData);
  const [navbarElements, setNavbarElements] = useState(contactData);
  const mail=`mailto:${contacts[0].email}`;
  const phone=`tel:${contacts[0].phone}`;
  const whatsapp=`https://wa.me/${contacts[0].phone}`;
  

  return (
    <div className='h-auto flex flex-col justify-center bg-white '>

    <div className="p-5 relative"
      style={{
        //backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '150px',//200
      }}
    >
      <div className="absolute inset-0  flex flex-row justify-between">{/*absolute inset-0 bg-gray-800 bg-opacity-60*/}
          <div className="flex items-center  mx-5">
              <div><SiD3Dotjs size={50} /></div>
              <div className="flex flex-col ml-2 ">
                <div className="text-2xl sm:text-md px-5 ">{contacts[0]["name"]}</div>{/* //text-white */}
                <div className="text-md sm:text-sm px-5 text-gray-800">{contacts[0]["subTitle"]}</div>
                <div className="text-md sm:text-sm px-5 text-gray-800 sm:hidden">{contacts[0]["slogan"]}</div>
              </div>
          </div>
          
          <div className="flex items-center m-5">
            <NavLink to="/propose">
              <Button variant="Primary" className="sm:text-sm cursor-pointer h-20 rounded-xl border-4 border-dotted border-secondary">
                <div className='flex flex-col h-auto '>
                <div className='py-1 text-md sm:text-sm'>3D Baskı Teklif Al</div>
                <div className='opacity-75 py-1 text-xs sm:hidden'>(Dosya Yükle)</div>
                </div>
                </Button>
            </NavLink>
          </div>
      </div>
        
    </div>

      <div className='flex flex-row justify-center gap-5 bg-secondary/60 h-10 items-center'>
          <span>Bize Ulaşın : </span>
          <a href={mail} className=" hover:text-gray-500 flex gap-1 text-white"><FaEnvelope size={25} color='black' /><span className='md:hidden sm:hidden'>{contacts[0]["email"]}</span></a>
          <a href={whatsapp} className=" hover:text-gray-500 flex gap-1 text-white"><FaWhatsapp size={25} color='black'/> <span className='md:hidden sm:hidden'>{contacts[0]["phone"]}</span></a>
          {/* <a href={phone} className=" hover:text-gray-500 flex gap-1 text-gray-100"><FaPhone size={25} color='black'/> <span className='md:hidden sm:hidden'>0332 123 45 67</span></a> */}
      </div>
       
      <Navigation/>
    </div>
  )
}
export default Navbar


function Navigation() {
  const [active, setActive] = useState();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex flex-row justify-center border-b-2 bg-slate-50 '>
        <div className='flex flex-col justify-center sm:w-full'>
                <div className='flex flex-row gap-5 sm:hidden'>
                  {navbarElements.map((element, index ) => {
                    return <NavLink to={`${element.path}`} key={index} >
                      <div key={index} className={`${responsiveClass} ${hover} border border-1 border-transparent  m-2 p-2 text-lg ${active === index ? ' bg-primary/80 rounded-lg p-2' : ''}`} onClick={() => setActive(index)}>
                          {element.name}
                        </div>
                    </NavLink>;
                  })}
                </div>
                <span className='hover:shadow-md hover:shadow-white self-center sm:self-start sm:px-5 hidden sm:flex sm:gap-2 sm:text-secondary sm:font-bold' onClick={toggleSidebar}>
                    <GiHamburgerMenu color='#9ca3af' size="30px"/> Menü
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
const hover="hover:bg-primary/60 rounded-lg"