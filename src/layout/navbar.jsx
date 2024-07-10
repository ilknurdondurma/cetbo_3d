import React, {useState} from 'react'
import { SiD3Dotjs } from "react-icons/si";
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import Button from '../components/button'
import { NavLink, useLocation } from 'react-router-dom';
import backgroundImage from '../assets/3d.jpg';
import { contactData } from '../fakeAPI/contact';
import { AnimateContainer } from 'react-animate-container';


function Navbar() {
  const [contacts, setContacts] = useState(contactData);
  const mail=`mailto:${contacts[0].email}`;
  const phone=`tel:${contacts[0].phone}`;
  const whatsapp=`https://wa.me/${contacts[0].phone}`;
  const location = useLocation();
  

  return (
    <div className='h-auto flex flex-col justify-center bg-secondary/40 mt-20'>

        <div className={`p-5 relative ${location.pathname==='/' ? "block" :" hidden"} `}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '300px',//200  // 150
          }}
        >
          <div className="absolute inset-0 bg-gray-800 bg-opacity-60 flex flex-row justify-between">{/*absolute inset-0 bg-gray-800 bg-opacity-60*/}{/*absolute inset-0 */}
              <div className="flex items-center  mx-5">
                  <div><SiD3Dotjs size={50} /></div>
                  <div className="flex flex-col ml-2 text-white ">{/*text-white */}{/* text-gray-800*/}
                  <AnimateContainer.fadeInLeft duration={0.1} active><div className="text-2xl sm:text-md px-5 ">{contacts[0]["name"]}</div></AnimateContainer.fadeInLeft>
                  <AnimateContainer.fadeInLeft duration={1} active><div className="text-md sm:text-sm px-5 ">{contacts[0]["subTitle"]}</div></AnimateContainer.fadeInLeft>
                  <AnimateContainer.fadeInLeft duration={1} active><div className="text-md sm:text-sm px-5 sm:hidden">{contacts[0]["slogan"]}</div></AnimateContainer.fadeInLeft>
                  </div>
              </div>
              
              <div className="flex items-center m-5">
              <AnimateContainer.fadeInRight duration={1} active><a href={whatsapp} className="sm:hidden hover:text-gray-100 text-white flex flex-col items-center justify-center gap-1 mx-5 border-2 p-2 px-5 rounded-xl bg-green-900">
                  <div className='flex gap-3'>
                    <FaWhatsapp size={35} color='white'/> 
                    <span className='md:hidden sm:hidden text-xl'>WhatsApp</span>
                  </div>
                  <span className='md:hidden sm:hidden text-md'>ile iletişim kur</span>
                </a></AnimateContainer.fadeInRight>

                <AnimateContainer.fadeInRight duration={1} active>
                  <NavLink to="/propose">
                  <Button variant="Primary" className="sm:text-sm cursor-pointer h-20 rounded-xl border-4 border-dotted border-secondary">
                    <div className='flex flex-col h-auto '>
                    <div className='py-1 text-md sm:text-sm'>3D Baskı Teklif Al</div>
                    <div className='opacity-75 py-1 text-xs sm:hidden'>(Dosya Yükle)</div>
                    </div>
                    </Button>
                </NavLink>
                </AnimateContainer.fadeInRight>
              </div>
          </div>
            
        </div>

          <div className='flex flex-row justify-center gap-5 bg-primary h-10 items-center '>
              <span>Bize Ulaşın : </span>
              <a href={mail} className=" hover:text-gray-500 flex gap-1 text-white"><FaEnvelope size={25} color='black' /><span className='md:hidden sm:hidden'>{contacts[0]["email"]}</span></a>
              <a href={whatsapp} className=" hover:text-gray-500 flex gap-1 text-white"><FaWhatsapp size={25} color='black'/> <span className='md:hidden sm:hidden'>{contacts[0]["phone"]}</span></a>
              {/* <a href={phone} className=" hover:text-gray-500 flex gap-1 text-gray-100"><FaPhone size={25} color='black'/> <span className='md:hidden sm:hidden'>0332 123 45 67</span></a> */}
          </div>
       
    </div>
  )
}
export default Navbar


