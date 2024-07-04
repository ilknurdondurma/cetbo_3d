import React, { useState } from 'react'
import { FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { contactData } from '../fakeAPI/contact';


function Footer() {
  const [contacts, setContacts] = useState(contactData);

  return (
    <div className='bg-secondary grid grid-cols-3 h-auto p-5'>
      <div className='col-span-1 flex flex-col justify-evenly items-center border-0 border-r-2 '>
        <div className='text-2xl'>Telif Hakkı</div>
        <div className='text-lg'>Tüm Hakları Saklıdır © 2024 Blog</div>
      </div>
      <div className='col-span-1 flex flex-col justify-evenly items-center border-0 border-r-2'>
        <div className='flex p-3 gap-2 text-2xl'>İletişim</div>
        <div className='flex p-3 gap-2 text-lg'><FaEnvelope size={25} color='black' /><span className='md:hidden sm:hidden'>{contacts[0]["email"]}</span></div>
        <div className='flex p-3 gap-2 text-lg'><FaPhone size={25} color='black'/> <span className='md:hidden sm:hidden'>{contacts[0]["phone"]}</span></div>
      </div>
      <div className='col-span-1 flex justify-center items-center gap-5'>
        <a href="/" className="text-blue-700">
          <FaFacebook size={24} />
        </a>
        <a href="/" className="text-pink-700">
          <FaInstagram size={24} />
        </a>
        <a href="/" className="text-blue-600">
          <FaTwitter size={24} />
        </a>
        <a href="/" className="text-red-800">
          <FaYoutube size={24} />
        </a>
      </div>
    </div>
    
  )
} 

export default Footer
