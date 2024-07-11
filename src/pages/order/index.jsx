import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FaMagnifyingGlass, FaCheck, FaTruck, FaTimes } from "react-icons/fa6";
import * as Yup from 'yup';
import { orderResult } from '../../fakeAPI/orderResult';
import { SpinnerDiamond } from 'spinners-react';

// Örnek doğrulama şeması
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Geçersiz email adresi')
    .required('Email gerekli')
});

const stagesIcons = {
  "Modeliniz analiz ediliyor": <FaTruck />,
  "Baskı sırasına alındı": <FaTruck />,
  "Baskıya başlandı": <FaTruck />,
  "Baskı tamamlandı": <FaCheck />,
  "Kargoya verildi": <FaTruck />,
  "Teslim edildi": <FaCheck />,
};

function Login() {
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (values) => {
    console.log(values);
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setResult(orderResult);
      setIsSubmitting(false);
    }, 2000);
  };

  const handleCancelOrder = () => {
    // API çağrısı yapılabilir
    console.log('Sipariş iptal edildi');
    // İptal işlemi gerçekleştikten sonra sonucu temizleyebiliriz
    setResult(null);
  };

  const canCancelOrder = () => {
    if (!result) return false;
    const indexOfStartPrint = result.findIndex(stage => stage.stage === 'Baskıya başlandı');
    return indexOfStartPrint === -1 || !result[indexOfStartPrint].date;
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='p-5 w-full flex flex-col justify-center items-center border-b-4'>
        <h1 className='text-xl sm:text-md flex gap-5'>
          <FaMagnifyingGlass size={30} />
          Sipariş durumunu kontrol etmek için mail adresinizi giriniz.
        </h1>
        <div className='w-1/2 sm:w-full md:w-2/3 bg-white p-5 m-5 rounded-xl shadow-lg bg-secondary/30'>
          <Formik
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4 gap-5">
                  <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="email">
                    Email:
                  </label>
                  <Field
                    placeholder="ayilmaz@gmail.com"
                    type="email"
                    name="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-primary w-1/2 hover:bg-cyan-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    disabled={isSubmitting}
                  >
                    Kontrol Et
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/* Result */}
      <div className="w-full p-5 flex flex-col justify-center items-center">
        {isSubmitting ? (
          <SpinnerDiamond />
        ) : result ? (
          <div className="w-4/5 sm:w-full bg-white p-5 rounded-xl shadow-lg">
            <h1 className="text-xl sm:text-md mb-5 text-center">Sipariş Durumu:</h1>
            <div className="space-y-4">
              {result.map((stage, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 border rounded-md shadow-sm">
                  <div className="text-primary">{stagesIcons[stage.stage]}</div>
                  <div className="flex-1">
                    <div className="text-lg font-semibold">{stage.stage}</div>
                    <div className="text-sm text-gray-600">{stage.date || 'Bekleniyor...'}</div>
                  </div>
                  <div className={`h-4 w-4 rounded-full ${stage.date ? 'bg-green-500' : 'bg-red-500'}`}></div>
                </div>
              ))}
            </div>
            {canCancelOrder() && (
              <div className="flex justify-center mt-5">
                <button
                  onClick={handleCancelOrder}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Siparişi İptal Et
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="p-5 w-full flex flex-col justify-center items-center border-b-4">
            Sonuç için sorgu yapınız
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
