import React from 'react';
import Footer from "../components/footer";
import Sidebar from "../components/Sidebar";
import Directorio from "../components/ServiciosDirectorio";
import Inicio from "../components/ServiciosInicio";
import Enviar from "../components/ContactoEnviar"
import Contenido from "../components/ServiciosContenido";
import Ws from "../components/wsBtn";
import { useEffect } from 'react';

export default function Servicios() {
  useEffect(() => {
    document.title = 'Servicios - Nouma Trading & Logistics'
  }, [])
  return(
    <>
      <div className='font-Pthin'>
        <div className='z-20 sticky top-0'>
          <Sidebar/>
          <Ws />
        </div>
        <div className='flex md:pl-20 z-0'>
          <Directorio/>
        </div>
        <div className='flex md:pl-20 z-0'>
          <Inicio/>
        </div>
        <div className='flex md:pl-20 z-0'>
          <Contenido/>
        </div>
        <div className='flex md:pl-20 z-0'>
          <Enviar/>
        </div>
        <div className='flex md:pl-20 z-0'>
          <Footer/>
        </div>

      </div>
    </>
  )
}