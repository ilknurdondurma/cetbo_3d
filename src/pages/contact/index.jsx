import React, { useState, useEffect } from 'react';
import { contactData } from '../../fakeAPI/contact';
import { FaEnvelope, FaAddressCard, FaPhone } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-gesture-handling';
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css';
import { AnimateContainer } from 'react-animate-container';
import TextArea from '../../components/textArea';
import Input from '../../components/input';
import Button from '../../components/button';
import { Form, Formik } from 'formik';

//npm install react-leaflet leaflet leaflet-gesture-handling

function GestureHandling() {
  const map = useMap();
  
  useEffect(() => {
    if (map) {
      map.gestureHandling.enable();
    }
  }, [map]);

  return null;
}

function Contact() {
  const [contacts, setContacts] = useState(contactData);
  const position = [37.9035985, 32.4633813];

  return (
    <div className='flex flex-col w-4/5 mx-auto'>
      <div className={`${responsiveGrid} grid grid-cols-3 gap-5`}>

            <AnimateContainer.fadeInUp duration={1} active >
            <div className='border-2 p-5 flex justify-center flex-col shadow-lg my-5 hover:cursor-pointer max-h-52 min-h-52'>
              <div className='flex justify-center font-bold text-xl'>Email</div>
              <div className='flex justify-center py-5'><FaEnvelope size={50}/></div>
              <div className='flex justify-center'>{contacts[0].email}</div>
            </div>
            </AnimateContainer.fadeInUp>

            <AnimateContainer.fadeInDown duration={1} active >
            <div className='border-2 p-5 flex justify-center flex-col shadow-lg my-5 hover:cursor-pointer max-h-52 min-h-52'>
              <div className='flex justify-center font-bold text-xl'>Telefon</div>
              <div className='flex justify-center py-5'><FaPhone size={50}/></div>
              <div className='flex justify-center'>{contacts[0].phone}</div>
            </div> 
            </AnimateContainer.fadeInDown>

            <AnimateContainer.fadeInRight duration={1} active >
            <div className='border-2 p-5 flex justify-center flex-col shadow-lg my-5 hover:cursor-pointer max-h-52 min-h-52'>
              <div className='flex justify-center font-bold text-xl'>İletişim Adresi :</div>
              <div className='flex justify-center py-5'><FaAddressCard size={50}/></div>
              <div className='flex justify-center '>{contacts[0].address}</div>
            </div>  
            </AnimateContainer.fadeInRight>
            
            

      </div>
      
      <div className={` ${responsiveGrid} marker:grid grid-cols-4 gap-10`}>
          <div className='col-span-3 flex flex-col justify-center justify-items-center items-center border-8  shadow-2xl my-20'>
            <span className='text-xl'>Neredeyiz ?</span>
            <MapContainer 
              center={position} 
              zoom={13} 
              style={{ height: "500px", width: "100%" ,margin:'10px' }}
              scrollWheelZoom={false}
              dragging={false}
              touchZoom={false}
            >
              <GestureHandling />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          <Formik 
              initialValues={{
                name: '',
                email: '',
                message: '',
              }}
            >
              <Form>
                <div className='flex flex-col bg-secondary/60 p-5 rounded-lg  my-20'>
                  <label className='text-white font-bold text-2xl p-2 m-2'>İletişim Formu </label>
                  <Input name='name' label="Ad Soyad"  className='border-2 p-2 m-2 rounded-xl bg-white  focus:border-primary  active:border-primary' type='text'  placeholder='İlknur Dondurma'/>
                  <Input name='email' label="Email" className='border-2 p-2 m-2 rounded-xl bg-white  focus:border-primary  active:border-primary' type='email' placeholder='dondurmailknur001@gmail.com'/>
                  <TextArea label="Mesajınız" name="message" placeholder="mesaj.."/>
                  <Button variant="Primary" size="Normal" className="p-2 m-2 w-1/2 flex self-end" >Gönder</Button>
                </div>
                
              </Form>
          </Formik>
      </div>
      
  
    </div>
  );
}

export default Contact;
const responsiveGrid="sm:gap-2 md:grid-cols-1 sm:grid-cols-1 "
const responsiveText="md:text-sm sm:text-sm lg:text-md"
