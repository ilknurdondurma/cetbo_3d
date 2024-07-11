import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { FaLock, FaUser } from "react-icons/fa";
import { AnimateContainer } from 'react-animate-container';
import { useNavigate } from 'react-router-dom';

const validationSchemaLogin = Yup.object({
  email: Yup.string()
    .email('Geçersiz email adresi')
    .required('Email gerekli'),
  password: Yup.string()
    .min(6, 'Şifre en az 6 karakter olmalıdır')
    .required('Şifre gerekli')
});

const validationSchemaSignup = Yup.object({
  email: Yup.string()
    .email('Geçersiz email adresi')
    .required('Email gerekli'),
  password: Yup.string()
    .min(6, 'Şifre en az 6 karakter olmalıdır')
    .required('Şifre gerekli'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Şifreler eşleşmiyor')
    .required('Şifre onayı gerekli')
});

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [animation, setAnimation] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    setAnimation(!animation)
    setIsLogin(!isLogin);
  };

  const handleSubmit=(values)=>{
    console.log(values);
    setTimeout(() => {
      navigate("/admin",{replace:true});
    }, 2000);
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className={`w-full max-w-md bg-white p-8 rounded-lg shadow-lg`}>
        <h2 className='text-2xl font-bold text-center mb-5'>{isLogin ? 'Giriş Yap' : 'Üye Ol'}</h2>
        <Formik
          initialValues={{ email: '', password: '', confirmPassword: '' }}
          validationSchema={isLogin ? validationSchemaLogin : validationSchemaSignup}
          onSubmit={(values, { setSubmitting }) => {
            
            setSubmitting(false);
            handleSubmit(values);
          }}
        >
          {({ isSubmitting }) => (
            <AnimateContainer.flipInY duration={1}  className='animationLoop' manualActive={animation} >
                <Form className='space-y-6'>
              <div>
                <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="email">
                  Email:
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <Field
                    placeholder="ayilmaz@gmail.com"
                    type="text"
                    name="email"
                    className="shadow appearance-none border rounded w-full py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic mt-2" />
              </div>
              <div>
                <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="password">
                  Şifre:
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <Field
                    placeholder="****"
                    type="password"
                    name="password"
                    className="shadow appearance-none border rounded w-full py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic mt-2" />
              </div>
              {!isLogin && (
                <div>
                  <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="confirmPassword">
                    Şifre Onayı:
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaLock className="text-gray-400" />
                    </div>
                    <Field
                      placeholder="****"
                      type="password"
                      name="confirmPassword"
                      className="shadow appearance-none border rounded w-full py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs italic mt-2" />
                </div>
              )}
              <div className='flex items-center justify-between'>
                <button
                  type="submit"
                  className="bg-primary w-full hover:bg-cyan-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  disabled={isSubmitting}
                >
                  {isLogin ? 'Giriş Yap' : 'Üye Ol'}
                </button>
              </div>
              <div className='text-center mt-4 flex flex-col'>
                <div  className="text-blue-500 hover:text-blue-700 text-sm" onClick={handleToggle}>
                  {isLogin ? 'Üye Ol' : 'Giriş Yap'}
                </div>
              </div>
            </Form>
            </AnimateContainer.flipInY>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
