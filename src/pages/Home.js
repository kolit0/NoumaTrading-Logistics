import React from 'react';
import Sidebar from "../components/Sidebar";
import Inicio from "../components/Inicio";
import Inicio2 from "../components/Inicio2";
import Enviar from "../components/ContactoEnviar";
import Footer from "../components/footer";
import Ws from "../components/wsBtn";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'Inicio - Nouma Trading & Logistics'
  }, [])
    return(
      <>
        <div className='font-Pthin'>
            <div className='z-20 sticky top-0'>
              <Sidebar/>
              <Ws/>
            </div>
            <div className='flex md:ml-20 z-0'>
              <Inicio></Inicio>
            </div>
            <div className='flex md:ml-20 z-0'> 
              <Inicio2></Inicio2>
            </div>
            <div className='flex md:ml-20 z-0'> 
              <Enviar></Enviar>
            </div>
            <div className='flex md:pl-20 z-0'>
              <Footer></Footer>
            </div>
      </div>
      </>
    )
  }