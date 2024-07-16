import React from 'react';
import Footer from "../components/footer";
import Sidebar from "../components/Sidebar";
import ContactoDirectorio from "../components/ContactoDirectorio";
import ContactoInicio from "../components/ContactoInicio";
import ContactoEnviar from '../components/ContactoEnviar';
import Ws from "../components/wsBtn";

export default function Contact() {
  return(
    <>
      <div className='font-Pthin'>
        <div className='z-20 sticky top-0'>
          <Sidebar/>
          <Ws />
        </div>
        <div className='flex ml-20 z-0'>
          <ContactoDirectorio/>
        </div>
        <div className='flex ml-20 z-0'>
          <ContactoInicio/>
        </div>
        <div className='flex ml-20 z-0'>
          <ContactoEnviar/>
        </div>
        <div className='flex pl-20 z-0'>
          <Footer/>
        </div>
      </div>
    </>
  )
}