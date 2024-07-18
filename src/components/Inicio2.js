import React from 'react';
import imgLogistica from "../Imagenes/logistica.jpg";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

function Section({ children }) {
  const [t] = useTranslation("global");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });
  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { once: true });

  return (
    <section className='bg-center bg-cover bg-blend-multiply bg-gray-500 h-screen w-screen flex max-md:justify-center' style={{backgroundImage: `url(${imgLogistica})`}} >
      <div className='w-full h-40 bg-[#ffffff1e] bg-opacity-40 backdrop-blur-md'>  
        <div className='h-screen shrink md:w-80 w-10 md:bg-white backdrop-blur-md'>
        </div>
      </div>
      <div className='flex-col absolute md:grid md:grid-cols-3 h-screen md:ml-60 md:place-items-start  place-items-center z-10 max-md:space-y-10 max-md:px-5 pr-40'>
        <div className='bg-[#0e1852] flex text-gray-300 w-auto max-w-[30rem] md:max-h-40 md:h-auto md:py-5 h-20 content-center place-items-center' style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} ref={ref}>
          {children}
        <h2 className='md:text-4xl text-2xl text-center border-b-2 border-[#00c08d] mx-4'>{t("home.subtitle")}</h2>
        </div>
        <div className='self-center flex justify-center bg-gray-300 bg-opacity-40 backdrop-blur-md text-[#0e1852] w-auto max-w-[30rem] md:max-h-52 md:h-auto md:py-5 h-20 place-items-center content-center'style={{
          transform: isInView2 ? "none" : "translateX(-200px)",
          opacity: isInView2 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} ref={ref2}>
          {children}
          <h3 className='md:text-4xl text-2xl text-center border-b-2 border-[#00c08d]  mx-4'>{t("home.miniSubtitle")}</h3>
        </div>
        <div className='self-center flex justify-center place-items-center col-start-3 bg-gray-300 bg-opacity-40 backdrop-blur-md text-[#0e1852] w-auto max-w-[30rem] md:max-h-40 md:h-auto md:py-5 h-20 md:mt-[20rem] content-center'style={{
          transform: isInView3 ? "none" : "translateY(200px)",
          opacity: isInView3 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} ref={ref3}>
          {children}
          <h3 className='md:text-4xl text-2xl text-center border-b-2 border-[#00c08d]  mx-4'>{t("home.miniSubtitle2")}</h3>
        </div>
        <div className='col-start-2 flex justify-center place-items-center bg-gray-300 bg-opacity-40 backdrop-blur-md text-[#0e1852] w-auto max-w-[30rem] md:max-h-40 md:h-auto md:py-5 h-20 content-center mb-5'style={{
          transform: isInView4 ? "none" : "translateY(200px)",
          opacity: isInView4 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} ref={ref4}>
          {children}
          <h3 className='md:text-4xl text-2xl text-center border-b-2 border-[#00c08d]  mx-4'>{t("home.miniSubtitle3")}</h3>
        </div>
        
      </div>
    </section>
    
  )
}

export default function Inicio2() {
  return (
    <>
      <Section></Section>

    </>
  );
}