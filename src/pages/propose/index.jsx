import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { MdLocalOffer } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import { ImCart } from "react-icons/im";
import { sorularData } from "../../fakeAPI/sorular";
import { color } from "../../fakeAPI/colors";
import { material } from "../../fakeAPI/materials";
import Acordion from "../../components/acordion";
import backgroundImage from "../../assets/3d_object.png";
import { AnimateContainer } from "react-animate-container";
import { BaskiInfo } from "../../helpers/text/3d-baski";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {validationSchema} from '../../validations/file';
import { NavLink } from "react-router-dom";

function Propose() {
  const [sorular, setSorular] = useState(sorularData);
  const [colorOptions, setColorOptions] = useState(color);
  const [materialOptions, setMaterialOptions] = useState(material);
 
  const handleSubmit = (values) => {
    console.log(values);

  };

  return (
    <div >
      {/* baslık */}
      <div
        className="bg-secondary/40 p-20 mb-10 relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "300px",
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center p-5 gap-3">
          <AnimateContainer.fadeInLeft duration={0.3} active>
            <div className="text-4xl font-bold sm:text-md ">
              {BaskiInfo[0].title}
            </div>
          </AnimateContainer.fadeInLeft>
          <AnimateContainer.fadeInLeft duration={1} active>
            <div className="text-xl font-bold sm:text-sm">
              {BaskiInfo[0].subTitle}{" "}
            </div>
          </AnimateContainer.fadeInLeft>
          <AnimateContainer.fadeInLeft duration={1} active>
            <div className="text-lg  sm:text-xs max-w-5xl sm:max-w-md">
              {BaskiInfo[0].description}{" "}
            </div>
          </AnimateContainer.fadeInLeft>
        </div>
      </div>
     
      {/* cardlar */}
      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 place-items-center  gap-20 m-10 ">
        <Card icon={<FaTruckFast size={40} color="#59cae8"/>} title={BaskiInfo[0]['header2']} description={BaskiInfo[0]['content2']} />
        <Card icon={<MdAccessTimeFilled size={40} color="#59cae8"/>} title={BaskiInfo[0]['header3']} description={BaskiInfo[0]['content3']} />
        <Card icon={<MdLocalOffer size={40} color="#59cae8"/>} title={BaskiInfo[0]['header4']} description={BaskiInfo[0]['content4']} />
        <NavLink to={'/order'} className={'border-2 border-dotted border-primary'}>
            <Card 
              icon={
                <AnimateContainer.bounce duration={0.5} active iterationCount={10}>
                  <ImCart size={40} color="#59cae8"/>
                </AnimateContainer.bounce>
                    } 
              title={BaskiInfo[0]['header5']} 
              description={BaskiInfo[0]['content5']}/>
        </NavLink>
      </div>

      {/* dosya */}
      <div className="w-full flex justify-center">
      <div className="m-5 border-2 shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-secondary/20">
        <h1 className="text-2xl py-5 font-extrabold">{BaskiInfo[0]['header1']}</h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            file: null,
            specialRequest: '',
            material: '',
            color: '',
            quantity: 1
          }}
          onSubmit={(values, {  }) => {
            handleSubmit(values);
          }}
          validationSchema={validationSchema}
        >
          {({ setFieldValue, values }) => (
            <Form>
              <div className="mb-4 gap-5 grid grid-cols-6">
                <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="firstName">
                  Adınız:
                </label>
                <Field
                  placeholder="Ahmet"
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="col-span-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs italic" />
              </div>
              <div className="mb-4 gap-5 grid grid-cols-6">
                <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="lastName">
                  Soyadınız:
                </label>
                <Field
                  placeholder="Yılmaz"
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="col-span-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs italic" />
              </div>
              <div className="mb-4 gap-5 grid grid-cols-6">
                <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="email">
                  Email:
                </label>
                <Field
                  placeholder="ayilmaz@gmail.com"
                  type="email"
                  name="email"
                  id="email"
                  className="col-span-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />
              </div>
              <div className="mb-4 gap-5 grid grid-cols-6">
                <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="phone">
                  Telefon:
                </label>
                <Field
                  placeholder="0512 345 67 89"
                  type="tel"
                  name="phone"
                  id="phone"
                  className="col-span-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-xs italic" />
              </div>
              <div className="mb-4 gap-5 grid grid-cols-6">
                <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="file">
                  Dosya (png, jpg, tif, rar, zip)
                </label>
                <input
                  id="file"
                  name="file"
                  type="file"
                  accept=".png,.jpg,.jpeg,.tif,.rar,.zip"
                  onChange={(event) => {
                    setFieldValue("file", event.currentTarget.files[0]);
                  }}
                  className="col-span-4 bg-white min-h-20 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage name="file" component="div" className="text-red-500 text-xs italic" />
              </div>
              <div className="mb-4 gap-5 grid grid-cols-6">
                <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="material">
                  Malzeme:
                </label>
                <Field as="select" name="material" id="material" className="col-span-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="" label="Seçiniz" />
                  {materialOptions.map((option, index) => (
                    <option key={index} value={option.name}>{option.name}</option>
                  ))}
                </Field>
                <ErrorMessage name="material" component="div" className="text-red-500 text-xs italic" />
              </div>
              <div className="mb-4 gap-5 grid grid-cols-6">
                <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="color">
                  Renk:
                </label>
                <Field as="select" name="color" id="color" className="col-span-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="" label="Seçiniz" />
                  {colorOptions.map((option, index) => (
                    <option key={index} value={option.name}>{option.color}</option>
                  ))}
                </Field>
                <ErrorMessage name="color" component="div" className="text-red-500 text-xs italic" />
              </div>
              <div className="mb-4 gap-5 grid grid-cols-6">
                <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="quantity">
                  Adet:
                </label>
                <div className="col-span-5 flex items-center">
                  <button
                    type="button"
                    className="bg-gray-300 text-gray-700 px-3 py-1 rounded-l"
                    onClick={() => setFieldValue("quantity", Math.max(1, values.quantity - 1))}
                  >
                    -
                  </button>
                  <Field
                    type="number"
                    name="quantity"
                    id="quantity"
                    className="w-20 text-center shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    min="1"
                  />
                  <button
                    type="button"
                    className="bg-gray-300 text-gray-700 px-3 py-1 rounded-r"
                    onClick={() => setFieldValue("quantity", values.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <ErrorMessage name="quantity" component="div" className="text-red-500 text-xs italic" />
              </div>
              <div className="mb-4 gap-5 grid grid-cols-6">
                <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="specialRequest">
                  Eklemek İstedikleriniz:
                </label>
                <Field
                  placeholder="Eklemek istedikleriniz.."
                  as="textarea"
                  name="specialRequest"
                  id="specialRequest"
                  className="col-span-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="4"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-primary w-full hover:bg-cyan-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Gönder
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      </div>

      {/* sss */}
      <div>
            <h1 className="text-3xl font-semibold italic text-center my-5">
              <FaQuestionCircle className="inline-block mr-2" />
              Sıkça Sorulan Sorular
            </h1>
            <div className="w-full p-5 m-5 mx-auto">
              <Acordion props={sorular} />
            </div>
      </div>

      
    </div>
  );
}

export default Propose;

function Card({ icon, title, description }) {
  return (
    <div className="max-w-sm flex items-center justify-center rounded overflow-hidden shadow-lg bg-white">
      <div className="h-32 p-5 flex justify-center items-center">{icon}</div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}


